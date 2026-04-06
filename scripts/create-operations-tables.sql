-- Create operations_log table to save all user interactions
CREATE TABLE IF NOT EXISTS operations_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID,
  operation_type VARCHAR(255) NOT NULL,
  description TEXT,
  page_name VARCHAR(255),
  action_details JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create ai_translations table for caching translated content
CREATE TABLE IF NOT EXISTS ai_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  original_text TEXT NOT NULL,
  source_language VARCHAR(10) DEFAULT 'en',
  target_language VARCHAR(10) NOT NULL,
  translated_text TEXT NOT NULL,
  context VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(original_text, source_language, target_language)
);

-- Create ai_generated_news table for Story/News feature
CREATE TABLE IF NOT EXISTS ai_generated_news (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(500) NOT NULL,
  content TEXT NOT NULL,
  category VARCHAR(100),
  language VARCHAR(10) DEFAULT 'en',
  featured_image_url VARCHAR(500),
  generated_by VARCHAR(50) DEFAULT 'gemini',
  published_at TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create product_negotiations table for Shop AI widget
CREATE TABLE IF NOT EXISTS product_negotiations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID,
  product_id VARCHAR(255),
  product_name VARCHAR(500),
  original_price DECIMAL(10, 2),
  negotiated_price DECIMAL(10, 2),
  negotiation_history JSONB,
  custom_requests TEXT,
  status VARCHAR(50) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_operations_user_id ON operations_log(user_id);
CREATE INDEX idx_operations_created_at ON operations_log(created_at);
CREATE INDEX idx_translations_language ON ai_translations(target_language);
CREATE INDEX idx_news_language ON ai_generated_news(language);
CREATE INDEX idx_negotiations_user_id ON product_negotiations(user_id);
