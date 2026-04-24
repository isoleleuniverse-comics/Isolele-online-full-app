export type CmsBlockV1 = HeroBlockV1 | RichTextBlockV1 | ImageBlockV1 | CtaBlockV1;

export type HeroBlockV1 = {
  type: "hero";
  heading: string;
  subheading?: string;
  backgroundImage?: {
    url: string;
    alt?: string;
  };
};

export type RichTextBlockV1 = {
  type: "richText";
  paragraphs: string[];
};

export type ImageBlockV1 = {
  type: "image";
  url: string;
  alt?: string;
  caption?: string;
};

export type CtaBlockV1 = {
  type: "cta";
  title: string;
  description?: string;
  buttonLabel: string;
  href: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function hasUnsafeHtml(value: string) {
  // v1 intentionally forbids raw HTML to keep rendering safe and predictable.
  return value.includes("<") || value.includes(">");
}

function validateText(field: string, value: unknown, errors: string[], opts?: { max?: number; optional?: boolean }) {
  const optional = opts?.optional ?? false;
  const max = opts?.max ?? 500;

  if (value == null) {
    if (!optional) errors.push(`${field} is required`);
    return;
  }
  if (!isString(value)) {
    errors.push(`${field} must be a string`);
    return;
  }
  if (value.length === 0) {
    errors.push(`${field} must not be empty`);
    return;
  }
  if (value.length > max) {
    errors.push(`${field} must be <= ${max} chars`);
  }
  if (hasUnsafeHtml(value)) {
    errors.push(`${field} must not contain HTML`);
  }
}

function validateUrl(field: string, value: unknown, errors: string[]) {
  validateText(field, value, errors, { max: 2000 });
  if (!isString(value)) return;
  const ok = value.startsWith("/") || value.startsWith("https://") || value.startsWith("http://");
  if (!ok) errors.push(`${field} must start with / or http(s)://`);
}

export function validateBlocksV1(value: unknown):
  | { ok: true; blocks: CmsBlockV1[] }
  | { ok: false; errors: string[] } {
  const errors: string[] = [];

  if (!Array.isArray(value)) {
    return { ok: false, errors: ["blocksJson must be an array"] };
  }

  const blocks: CmsBlockV1[] = [];

  value.forEach((raw, index) => {
    const prefix = `blocks[${index}]`;
    if (!isRecord(raw)) {
      errors.push(`${prefix} must be an object`);
      return;
    }
    const type = raw.type;
    if (!isString(type)) {
      errors.push(`${prefix}.type must be a string`);
      return;
    }

    if (type === "hero") {
      validateText(`${prefix}.heading`, raw.heading, errors, { max: 140 });
      validateText(`${prefix}.subheading`, raw.subheading, errors, { max: 220, optional: true });
      if (raw.backgroundImage != null) {
        if (!isRecord(raw.backgroundImage)) {
          errors.push(`${prefix}.backgroundImage must be an object`);
        } else {
          validateUrl(`${prefix}.backgroundImage.url`, raw.backgroundImage.url, errors);
          validateText(`${prefix}.backgroundImage.alt`, raw.backgroundImage.alt, errors, {
            max: 140,
            optional: true,
          });
        }
      }
      blocks.push(raw as HeroBlockV1);
      return;
    }

    if (type === "richText") {
      if (!Array.isArray(raw.paragraphs)) {
        errors.push(`${prefix}.paragraphs must be an array of strings`);
      } else {
        raw.paragraphs.forEach((p, pIndex) => {
          validateText(`${prefix}.paragraphs[${pIndex}]`, p, errors, { max: 1200 });
        });
      }
      blocks.push(raw as RichTextBlockV1);
      return;
    }

    if (type === "image") {
      validateUrl(`${prefix}.url`, raw.url, errors);
      validateText(`${prefix}.alt`, raw.alt, errors, { max: 140, optional: true });
      validateText(`${prefix}.caption`, raw.caption, errors, { max: 180, optional: true });
      blocks.push(raw as ImageBlockV1);
      return;
    }

    if (type === "cta") {
      validateText(`${prefix}.title`, raw.title, errors, { max: 120 });
      validateText(`${prefix}.description`, raw.description, errors, { max: 280, optional: true });
      validateText(`${prefix}.buttonLabel`, raw.buttonLabel, errors, { max: 40 });
      validateUrl(`${prefix}.href`, raw.href, errors);
      blocks.push(raw as CtaBlockV1);
      return;
    }

    errors.push(`${prefix}.type is unsupported: ${type}`);
  });

  if (errors.length) return { ok: false, errors };
  return { ok: true, blocks };
}

