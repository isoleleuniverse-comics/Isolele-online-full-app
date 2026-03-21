# ISOLELE Multi-Language Content Management System

## System Overview

This comprehensive CMS enables admins to manage all homepage content, translations, and media across 4 languages (English, French, Spanish, Portuguese) with real-time synchronization to the public site.

## Architecture

### Database Tables (Supabase)

1. **page_content** — All homepage text/copy for each section and language
   - Fields: section, key, en, fr, es, pt, created_at, updated_at, updated_by
   - RLS: Public read, admin-only write/update

2. **media** — Image and media asset management
   - Fields: name, url, section, field, mime_type, size_bytes, is_active
   - RLS: Public read, admin-only write/update
   - Storage: Supabase Storage bucket `media`

3. **admin_users** — Admin authentication and permissions
   - Fields: user_id, role, permissions[], is_active, created_at, last_login
   - RLS: Admin-only read/write

4. **translations** — Backup translations and localization strings
   - Fields: language_code, key, value, context, created_at, updated_at
   - RLS: Public read, admin-only write

### API Routes

- `POST/GET/PUT/DELETE /api/admin/content` — Manage page content
- `POST/GET/DELETE /api/admin/media` — Upload and manage media files
- `GET /api/admin/check-auth` — Verify admin authentication status

### Admin Dashboard (`/admin`)

1. **Login Page** (`/admin/login`) — Supabase auth with admin verification
2. **Dashboard** (`/admin/dashboard`) — Three-tab interface:
   - **Content Editor** — CRUD for all page sections across 4 languages
   - **Media Manager** — Drag-drop upload, organize by section/field
   - **Translation Manager** — Language switcher and translation oversight

## Key Features

✅ **Multi-Language Support** — All content stored for en, fr, es, pt
✅ **Real-Time Updates** — Admin changes sync to public site instantly via cache revalidation
✅ **Media Management** — Click-to-upload images with live preview
✅ **Supabase Auth** — Secure admin access with role-based permissions
✅ **Dynamic Content** — Homepage fetches content server-side per user language
✅ **RLS Policies** — Database-level security isolating public/admin access

## Admin Access

### Setup

1. Create admin user in Supabase Auth (or use existing user)
2. Add user to `admin_users` table:
   ```sql
   INSERT INTO admin_users (user_id, role, permissions, is_active)
   VALUES ('user-uuid', 'admin', ARRAY['manage_content', 'upload_media', 'manage_admins'], true);
   ```

3. Admin can now login at `/admin/login`

### Workflows

**Adding Content:**
1. Go to Admin > Content Editor
2. Click "Add Content" or edit existing section
3. Fill in text for all 4 languages
4. Save — auto-revalidates homepage

**Uploading Media:**
1. Go to Admin > Media Manager
2. Select section (e.g., "hero") and field (e.g., "background_image")
3. Drag-drop or click to upload
4. Image URL auto-copied to clipboard

**Managing Translations:**
1. Go to Admin > Translations
2. Switch languages via buttons
3. Content Editor shows selected language column highlighted

## File Structure

```
/app
  /admin
    /login          — Admin login page (Supabase auth)
    /dashboard      — Main dashboard with tabs
    layout.tsx      — Admin layout
    page.tsx        — Redirect to login
  /api/admin
    /content        — Content CRUD API
    /media          — Media upload/delete API
    /check-auth     — Auth verification

/components/admin
  content-editor.tsx      — Multi-language content editor
  media-manager.tsx       — Image upload & management
  translation-manager.tsx — Language switcher

/lib
  content-manager.ts  — Content read/write utilities
  media-manager.ts    — Media upload/fetch utilities
  admin-auth.ts       — Admin permission checking
```

## Cache Revalidation

All admin mutations trigger instant cache revalidation:
- `revalidatePath("/")` — Refresh homepage
- `revalidatePath("/[lang]")` — Refresh all language routes

Users see updates without manual refresh.

## Security

- Row-level security (RLS) on all tables
- Admin users isolated in `admin_users` table
- Public routes read-only via RLS policies
- Admin routes verify auth before allowing mutations
- Media stored in private Supabase Storage bucket

## Next Steps

1. Populate `page_content` table with existing homepage text
2. Upload media assets via Media Manager
3. Create additional admin users as needed
4. Export translations via Translation Manager download button

## Environment Variables Required

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

All three are auto-configured if Supabase integration is active in v0 settings.
