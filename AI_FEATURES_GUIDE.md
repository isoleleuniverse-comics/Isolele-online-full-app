# ISOLELE AI Features Quick Reference

## 🌍 Language Translation
**Endpoint:** `POST /api/translate`

```bash
curl -X POST http://localhost:3000/api/translate \
  -H "Content-Type: application/json" \
  -d '{
    "text": "Hello World",
    "targetLanguage": "fr",
    "sourceLanguage": "en"
  }'
```

**Supported Languages:** en, fr, pt, es, zu, xh, sw, ln

## 📰 AI-Generated News
**Endpoint:** `POST /api/news/generate`

```bash
curl -X POST http://localhost:3000/api/news/generate \
  -H "Content-Type: application/json" \
  -d '{
    "category": "viral",
    "language": "en",
    "count": 5
  }'
```

**Categories:** viral, fashion, store, channels, shows

## 💰 Product Negotiation
**Endpoint:** `POST /api/shop/negotiate`

```bash
curl -X POST http://localhost:3000/api/shop/negotiate \
  -H "Content-Type: application/json" \
  -d '{
    "productName": "ZAIIRE Perfume Royal",
    "productId": "zaire-perfume-001",
    "originalPrice": 129.99,
    "userQuery": "What is your best price for bulk orders?",
    "customRequests": "Need 100 units"
  }'
```

## 📊 Database Operations Logging
**All operations automatically logged to Supabase with:**
- Timestamp
- Operation type
- Page name
- Action details (JSON)
- User ID (if available)

**Query operations from database:**
```typescript
import { logOperation, getGeneratedNews } from '@/lib/database-operations'

// Log an operation
await logOperation({
  operation_type: 'purchase',
  page_name: 'shop',
  description: 'User completed purchase',
  action_details: { orderId: '12345', total: 299.99 }
})

// Retrieve cached news
const news = await getGeneratedNews('en', 10)
```

## 🎨 Icon System
**Location:** `/components/icons/elegant-icons.tsx`

**Available Icons:**
- HomeIcon - Elegant house with refined lines
- ComicsIcon - Book (opens on hover)
- ShopIcon - Shopping cart
- GameIcon - Auto-cycling game-related symbols
- StoryNewsIcon - Stylized newspaper
- SettingsIcon - Fine gear icon
- NotificationIcon - Bell icon
- AccountIcon - User profile icon
- PrivacyIcon - Shield icon
- LanguageIcon - Globe icon
- ThemeIcon - Moon/sun toggle
- HelpIcon - Question mark icon
- AboutIcon - Information icon
- LogoutIcon - Exit door icon

**Usage:**
```tsx
import { HomeIcon, ComicsIcon, ShopIcon } from '@/components/icons/elegant-icons'

<HomeIcon className="w-6 h-6" />
<ComicsIcon isOpen={false} className="w-6 h-6" />
<ShopIcon className="w-6 h-6" />
```

## 🚀 Product Negotiation Widget
**Located in:** `/components/product-negotiation-widget.tsx`

**Usage in Product Cards:**
```tsx
<ProductNegotiationWidget
  productName="ZAIIRE Perfume Royal"
  productId="zaire-perfume-001"
  originalPrice={129.99}
/>
```

**Features:**
- Floating button on Shop page
- Real-time AI responses
- Price negotiation with discounts
- Conversation history tracking
- Theme-aware design

## 📚 Database Tables Summary

| Table | Purpose | Key Fields |
|-------|---------|-----------|
| operations_log | User activity tracking | user_id, operation_type, page_name, created_at |
| ai_translations | Cached translations | original_text, source_language, target_language, translated_text |
| ai_generated_news | AI news articles | title, content, category, language, published_at |
| product_negotiations | Price negotiations | product_id, original_price, negotiated_price, status |

## 🔐 Security Notes
- All database operations use parameterized queries (Supabase handles this)
- API keys stored in environment variables
- Product negotiation prices calculated by AI with reasonable bounds
- User operations logged for audit trail
- Consider enabling RLS (Row Level Security) on tables

## 📈 Performance Tips
- Translation results are cached in database
- Batch translation endpoint for multiple texts
- News cached for language-specific queries
- Indexes created on frequently queried columns

## 🐛 Troubleshooting

**Translation API returns error:**
- Check GOOGLE_GEMINI_API_KEY is set
- Verify language code is supported (en, fr, pt, es, zu, xh, sw, ln)
- Check Supabase connection

**News generation fails:**
- Ensure Gemini API key is valid
- Check NEXT_PUBLIC_SUPABASE_URL is correct
- Verify database tables exist

**Product negotiation not working:**
- Check Shop page has at least one product
- Verify ProductNegotiationWidget is imported
- Check API endpoint response in browser console

## 📞 Support
For issues, check:
1. Browser console for errors
2. Supabase logs for database issues
3. Environment variables are set correctly
4. API route handlers in `/app/api/`
