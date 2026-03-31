-- Create tables for ISOLELE Comics Store

-- Books Table
CREATE TABLE IF NOT EXISTS books (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  cover VARCHAR(500),
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  rating DECIMAL(3, 1) DEFAULT 5.0,
  pages INTEGER,
  status VARCHAR(50) DEFAULT 'available', -- available, coming, recommended
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Orders Table
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_email VARCHAR(255) NOT NULL,
  stripe_session_id VARCHAR(255) UNIQUE,
  items JSONB,
  total DECIMAL(10, 2) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending', -- pending, completed, failed, cancelled
  paid_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Transactions Table
CREATE TABLE IF NOT EXISTS transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  stripe_session_id VARCHAR(255),
  amount DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'USD',
  customer_email VARCHAR(255),
  status VARCHAR(50), -- completed, failed
  error_message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- User Library Table (for purchased books)
CREATE TABLE IF NOT EXISTS user_library (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_email VARCHAR(255) NOT NULL,
  book_id UUID REFERENCES books(id),
  purchased_at TIMESTAMP DEFAULT NOW(),
  access_until TIMESTAMP,
  UNIQUE(user_email, book_id)
);

-- Notifications Table
CREATE TABLE IF NOT EXISTS notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  message TEXT,
  category VARCHAR(50), -- chapter, offer, news
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_orders_user_email ON orders(user_email);
CREATE INDEX IF NOT EXISTS idx_orders_stripe_session_id ON orders(stripe_session_id);
CREATE INDEX IF NOT EXISTS idx_user_library_user_email ON user_library(user_email);
CREATE INDEX IF NOT EXISTS idx_transactions_stripe_session_id ON transactions(stripe_session_id);
CREATE INDEX IF NOT EXISTS idx_notifications_created_at ON notifications(created_at);

-- Insert sample books
INSERT INTO books (title, author, cover, description, price, rating, pages, status) VALUES
  ('Zaiire: The Prince of Kongo', 'ISOLELE Universe', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5413e9fc-976b-4c59-97bd-5858678b1f42.jpeg', 'An epic journey of destiny and power in ancient kingdoms.', 9.99, 4.8, 120, 'available'),
  ('Kimoya: The Heritage Bearer', 'ISOLELE Universe', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=400&fit=crop', 'A tale of female empowerment and ancient wisdom.', 10.99, 4.6, 140, 'coming'),
  ('Bambula: The Guardian', 'ISOLELE Universe', 'https://images.unsplash.com/photo-1544716278-ca5e3af4abd8?w=300&h=400&fit=crop', 'Protecting the balance between worlds.', 9.99, 4.7, 130, 'available'),
  ('Mokele: Prince of the Depths', 'ISOLELE Universe', 'https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=300&h=400&fit=crop', 'Mysteries of the ancient water kingdoms.', 10.99, 4.5, 125, 'recommended')
ON CONFLICT DO NOTHING;

-- Insert sample notifications
INSERT INTO notifications (title, message, category) VALUES
  ('New chapter available', 'Zaiire Chapter 5 is now available', 'chapter'),
  ('Special offer', '20% off all comics this week', 'offer'),
  ('Latest news', 'ISOLELE Universe expands with new storylines', 'news')
ON CONFLICT DO NOTHING;
