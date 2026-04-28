-- ISOLELE Full Schema Migration
-- Creates all tables for books, characters, games, articles, products, contact messages

-- ============================================================
-- BOOKS
-- ============================================================
CREATE TABLE IF NOT EXISTS public.books (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT,
  tag TEXT,
  description TEXT,
  cover_image TEXT,
  background_image TEXT,
  series TEXT,
  volume INTEGER,
  published_at DATE,
  available BOOLEAN DEFAULT true,
  buy_url TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.books ENABLE ROW LEVEL SECURITY;
CREATE POLICY "books_public_read" ON public.books FOR SELECT USING (true);

-- ============================================================
-- CHARACTERS
-- ============================================================
CREATE TABLE IF NOT EXISTS public.characters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  title TEXT,
  universe TEXT,
  origin TEXT,
  power TEXT,
  description TEXT,
  long_description TEXT,
  image TEXT,
  card_image TEXT,
  book_slug TEXT REFERENCES public.books(slug),
  sort_order INTEGER DEFAULT 0,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.characters ENABLE ROW LEVEL SECURITY;
CREATE POLICY "characters_public_read" ON public.characters FOR SELECT USING (true);

-- ============================================================
-- GAMES
-- ============================================================
CREATE TABLE IF NOT EXISTS public.games (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT,
  tagline TEXT,
  description TEXT,
  long_description TEXT,
  cover_image TEXT,
  board_image TEXT,
  category TEXT,
  players TEXT,
  age TEXT,
  duration TEXT,
  rating NUMERIC(3,1) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  price NUMERIC(10,2),
  available BOOLEAN DEFAULT true,
  features JSONB DEFAULT '[]',
  screenshots JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.games ENABLE ROW LEVEL SECURITY;
CREATE POLICY "games_public_read" ON public.games FOR SELECT USING (true);

-- ============================================================
-- PRODUCTS (SHOP)
-- ============================================================
CREATE TABLE IF NOT EXISTS public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC(10,2) NOT NULL,
  original_price NUMERIC(10,2),
  image TEXT,
  category TEXT,
  in_stock BOOLEAN DEFAULT true,
  featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "products_public_read" ON public.products FOR SELECT USING (true);

-- ============================================================
-- ARTICLES / NEWS
-- ============================================================
CREATE TABLE IF NOT EXISTS public.articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  image TEXT,
  category TEXT,
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  author TEXT DEFAULT 'ISOLELE',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "articles_public_read" ON public.articles FOR SELECT USING (published = true);

-- ============================================================
-- CONTACT MESSAGES
-- ============================================================
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "contact_insert_public" ON public.contact_messages FOR INSERT WITH CHECK (true);

-- ============================================================
-- SUPPORTERS
-- ============================================================
CREATE TABLE IF NOT EXISTS public.supporters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  tier TEXT DEFAULT 'standard',
  message TEXT,
  country TEXT,
  avatar_url TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.supporters ENABLE ROW LEVEL SECURITY;
CREATE POLICY "supporters_public_read" ON public.supporters FOR SELECT USING (true);

-- ============================================================
-- ORDERS (CART)
-- ============================================================
CREATE TABLE IF NOT EXISTS public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id TEXT,
  customer_email TEXT,
  customer_name TEXT,
  items JSONB NOT NULL DEFAULT '[]',
  total NUMERIC(10,2) NOT NULL DEFAULT 0,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "orders_insert_public" ON public.orders FOR INSERT WITH CHECK (true);
