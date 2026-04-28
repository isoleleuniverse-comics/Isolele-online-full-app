-- ISOLELE CONTENT MANAGEMENT SYSTEM TABLES
-- For managing homepage content, translations, media, and admin users

-- 1. Page Content Table - stores all homepage text content
CREATE TABLE IF NOT EXISTS public.page_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section TEXT NOT NULL,
  key TEXT NOT NULL,
  en TEXT,
  fr TEXT,
  es TEXT,
  pt TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_by UUID REFERENCES auth.users(id),
  UNIQUE(section, key)
);

-- 2. Media Table - stores image metadata and URLs
CREATE TABLE IF NOT EXISTS public.media (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  section TEXT NOT NULL,
  field TEXT NOT NULL,
  mime_type TEXT,
  size_bytes INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  uploaded_by UUID REFERENCES auth.users(id),
  is_active BOOLEAN DEFAULT true
);

-- 3. Translations Table - stores dynamic translations separate from content
CREATE TABLE IF NOT EXISTS public.translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  language_code TEXT NOT NULL,
  key TEXT NOT NULL,
  value TEXT NOT NULL,
  context TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_by UUID REFERENCES auth.users(id),
  UNIQUE(language_code, key, context)
);

-- 4. Admin Users Table - manages admin access and permissions
CREATE TABLE IF NOT EXISTS public.admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL DEFAULT 'editor',
  permissions TEXT[] DEFAULT '{"manage_content", "upload_media"}',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  last_login TIMESTAMP WITH TIME ZONE,
  CONSTRAINT valid_role CHECK (role IN ('admin', 'editor', 'viewer'))
);

-- Create indexes for performance
CREATE INDEX idx_page_content_section ON public.page_content(section);
CREATE INDEX idx_media_section ON public.media(section);
CREATE INDEX idx_translations_language ON public.translations(language_code);
CREATE INDEX idx_admin_users_user_id ON public.admin_users(user_id);

-- Enable RLS (Row Level Security)
ALTER TABLE public.page_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- RLS Policies for page_content: Everyone can read, only admins can write
CREATE POLICY "Enable read access for all users" ON public.page_content
  FOR SELECT USING (true);

CREATE POLICY "Enable write access for admins only" ON public.page_content
  FOR INSERT WITH CHECK (auth.uid() IN (SELECT user_id FROM public.admin_users WHERE is_active = true));

CREATE POLICY "Enable update for admins only" ON public.page_content
  FOR UPDATE USING (auth.uid() IN (SELECT user_id FROM public.admin_users WHERE is_active = true));

-- RLS Policies for media: Everyone can read, only admins can write
CREATE POLICY "Enable read access for all users" ON public.media
  FOR SELECT USING (true);

CREATE POLICY "Enable write access for admins only" ON public.media
  FOR INSERT WITH CHECK (auth.uid() IN (SELECT user_id FROM public.admin_users WHERE is_active = true));

CREATE POLICY "Enable update for admins only" ON public.media
  FOR UPDATE USING (auth.uid() IN (SELECT user_id FROM public.admin_users WHERE is_active = true));

-- RLS Policies for translations: Everyone can read, only admins can write
CREATE POLICY "Enable read access for all users" ON public.translations
  FOR SELECT USING (true);

CREATE POLICY "Enable write for admins" ON public.translations
  FOR INSERT WITH CHECK (auth.uid() IN (SELECT user_id FROM public.admin_users WHERE is_active = true));

CREATE POLICY "Enable update for admins" ON public.translations
  FOR UPDATE USING (auth.uid() IN (SELECT user_id FROM public.admin_users WHERE is_active = true));

-- RLS Policies for admin_users: Only super-admins can manage
CREATE POLICY "Enable read for authenticated users" ON public.admin_users
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create storage bucket for media uploads (if not exists)
INSERT INTO storage.buckets (id, name, public) 
VALUES ('isolele-media', 'isolele-media', true)
ON CONFLICT (id) DO NOTHING;

-- Storage RLS policies
CREATE POLICY "Allow authenticated uploads" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'isolele-media' AND 
    auth.uid() IN (SELECT user_id FROM public.admin_users WHERE is_active = true)
  );

CREATE POLICY "Allow public read" ON storage.objects
  FOR SELECT USING (bucket_id = 'isolele-media');

-- Seed initial admin content keys (will be populated by admin dashboard)
INSERT INTO public.page_content (section, key, en, fr, es, pt)
VALUES
  ('hero', 'title', 'Welcome to ISOLELE', 'Bienvenue à ISOLELE', 'Bienvenido a ISOLELE', 'Bem-vindo a ISOLELE'),
  ('hero', 'subtitle', 'The Chosen Ones', 'Les Élus', 'Los Elegidos', 'Os Eleitos'),
  ('characters', 'section_title', 'Meet the Universe', 'Rencontrez l''Univers', 'Conoce el Universo', 'Conheça o Universo'),
  ('cta', 'main_text', 'Join the ISOLELE Universe', 'Rejoignez l''Univers ISOLELE', 'Únete al Universo ISOLELE', 'Junte-se ao Universo ISOLELE'),
  ('cta', 'button_text', 'Explore Now', 'Explorer Maintenant', 'Explorar Ahora', 'Explorar Agora')
ON CONFLICT (section, key) DO NOTHING;
