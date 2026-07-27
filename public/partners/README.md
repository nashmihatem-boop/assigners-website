Drop the official current badge assets from each program's own partner badge portal into this folder, using these exact filenames (referenced from `lib/constants.ts` → `marketingPartners`):

- `google-partner-premier.svg` — from your Google Partners badge center (partners.google.com)
- `microsoft-advertising-accredited.svg` — from your Microsoft Advertising partner dashboard
- `taboola.svg` — from your Taboola partner resources
- `outbrain-partner.svg` — from your Outbrain partner resources
- `meta-business-partners.svg` — from your Meta Business Partner directory listing

Use the standard (full-color or black) version of each logo, not a pre-made white/reversed one — the footer applies a CSS filter that auto-converts them to white/monochrome to match your reference screenshot, so a colored source logo on a transparent background works best. PNG works too if that's the only format a program provides; just update the `src` extension in `lib/constants.ts` to match.

Do not hand-recreate or approximate these logos — each program controls the exact artwork for its badge, and only the file distributed through your verified partner account should be used.
