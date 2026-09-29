# Mifer Digital v1.8.7

## Scope
Production-stability hotfix based directly on v1.8.6. No approved layout, copy, pricing, colors, sections, navigation, backgrounds, or interaction patterns were redesigned.

## Fix
- Removed the post-load scale pulse from the colored words in the homepage hero headline.
- Preserved the existing hero entrance animation and its timing.
- This prevents the headline from subtly widening/shrinking after it has already settled, eliminating the visible “pıt” effect without changing the static design.

## Release checks
- Astro type/build check
- Existing Node test suite
- Local links/assets/routes validated by existing tests
- Production archive excludes generated dependency/build folders via the repository ignore rules
