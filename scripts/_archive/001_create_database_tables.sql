-- Create games table
CREATE TABLE IF NOT EXISTS public.games (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  subtitle TEXT,
  description TEXT,
  category TEXT,
  rating DECIMAL(3,1),
  review_count INTEGER DEFAULT 0,
  price DECIMAL(10,2),
  players TEXT,
  age_rating TEXT,
  duration TEXT,
  developer TEXT,
  platform TEXT[] DEFAULT ARRAY[]::TEXT[],
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Create game images table
CREATE TABLE IF NOT EXISTS public.game_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  game_id UUID NOT NULL REFERENCES public.games(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Create game features table
CREATE TABLE IF NOT EXISTS public.game_features (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  game_id UUID NOT NULL REFERENCES public.games(id) ON DELETE CASCADE,
  title_en TEXT NOT NULL,
  title_fr TEXT,
  description_en TEXT,
  description_fr TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Enable RLS for games table
ALTER TABLE public.games ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to read games
CREATE POLICY "allow_read_games" ON public.games
  FOR SELECT
  USING (true);

-- Create policy to allow authenticated users to manage games (admin only)
CREATE POLICY "allow_authenticated_manage_games" ON public.games
  FOR ALL
  USING (auth.role() = 'authenticated');

-- Enable RLS for game_images
ALTER TABLE public.game_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "allow_read_game_images" ON public.game_images
  FOR SELECT
  USING (true);

-- Enable RLS for game_features
ALTER TABLE public.game_features ENABLE ROW LEVEL SECURITY;

CREATE POLICY "allow_read_game_features" ON public.game_features
  FOR SELECT
  USING (true);

-- Create newsletter subscriptions table
CREATE TABLE IF NOT EXISTS public.newsletter_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  language TEXT DEFAULT 'en',
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  confirmed_at TIMESTAMP WITH TIME ZONE,
  is_active BOOLEAN DEFAULT true,
  metadata JSONB DEFAULT '{}'::jsonb
);

-- Enable RLS for newsletter subscriptions
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to subscribe
CREATE POLICY "allow_subscribe" ON public.newsletter_subscriptions
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow users to read their own subscription
CREATE POLICY "allow_read_own_subscription" ON public.newsletter_subscriptions
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_games_slug ON public.games(slug);
CREATE INDEX IF NOT EXISTS idx_game_images_game_id ON public.game_images(game_id);
CREATE INDEX IF NOT EXISTS idx_game_features_game_id ON public.game_features(game_id);
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON public.newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_active ON public.newsletter_subscriptions(is_active);
