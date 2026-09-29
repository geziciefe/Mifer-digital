# Mifer Digital v1.8.9 Hotfix — Brand search-name strengthening

This patch keeps the v1.8.9 hotfix site intact and changes only the structured brand-search signals.

- Kept the canonical brand name as `Mifer Digital`.
- Added conservative structured-data alternate names: `Mifer`, `Mifer Dijital`, `MiferDigital`, and `miferdigital.com`.
- Applied those aliases consistently to both the `WebSite` and `Organization` JSON-LD entities.
- Added `WebPage` linkage to the same website/organization graph without changing canonical or hreflang URLs.
- Kept the existing Open Graph metadata, visible page copy, styles, and v1.8.9 hotfix features unchanged. Indexing/canonical behavior is superseded by the v1.8.10 SEO fix.
- Did not add typo spam, hidden keywords, or visible keyword stuffing.
- Added a regression test so these brand-name signals are not accidentally removed later.
