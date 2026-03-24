-- Fashion Looks table
CREATE TABLE IF NOT EXISTS fashion_looks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  designer TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Fashion interactions table
CREATE TABLE IF NOT EXISTS fashion_interactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  look_id UUID NOT NULL REFERENCES fashion_looks(id) ON DELETE CASCADE,
  user_id UUID,
  interaction_type TEXT NOT NULL CHECK (interaction_type IN ('like', 'comment')),
  comment_text TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Fashion shares table
CREATE TABLE IF NOT EXISTS fashion_shares (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  look_id UUID NOT NULL REFERENCES fashion_looks(id) ON DELETE CASCADE,
  shared_at TIMESTAMP DEFAULT NOW(),
  share_platform TEXT
);

-- Insert sample fashion looks
INSERT INTO fashion_looks (title, description, image_url, designer) VALUES
('The Royal Ensemble', 'A stunning golden outfit representing Kongo heritage', '/fashion/look-1.jpg', 'ISOLELE Design House'),
('Urban Warriors', 'Contemporary meets traditional in this bold collection', '/fashion/look-2.jpg', 'ISOLELE Design House'),
('Celestial Crowns', 'Elegant and majestic runway presentation', '/fashion/look-3.jpg', 'ISOLELE Design House')
ON CONFLICT DO NOTHING;

-- Enable RLS
ALTER TABLE fashion_looks ENABLE ROW LEVEL SECURITY;
ALTER TABLE fashion_interactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE fashion_shares ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Fashion looks visible to all" ON fashion_looks
  FOR SELECT USING (true);

CREATE POLICY "Interactions readable by all" ON fashion_interactions
  FOR SELECT USING (true);

CREATE POLICY "Anyone can create interactions" ON fashion_interactions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Shares readable by all" ON fashion_shares
  FOR SELECT USING (true);

CREATE POLICY "Anyone can create shares" ON fashion_shares
  FOR INSERT WITH CHECK (true);
