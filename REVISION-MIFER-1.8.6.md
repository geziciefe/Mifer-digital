# Mifer Digital v1.8.6

Focused visual bug-fix release based on v1.8.5.

- Rebuilt the homepage Mifer Notes carousel as a single-active-card component instead of a horizontal auto-column grid. This prevents the wide-screen slice/collapse bug and keeps the section intentionally compact.
- Added previous/next, keyboard arrow and touch-swipe navigation while keeping normal blog links intact.
- Restored/stabilized the approved desktop header geometry, preventing transient wrapping/centering and disabling startup transitions until the header runtime is initialized. Navigation labels/order from the current approved build are preserved.
- Header section navigation and homepage-return links now use clean URLs: the requested section is carried through navigation without exposing `#process`, `#packages`, `#contact` or `#approach-start` in the address bar.
- Removed the decorative green arrow beside the 15,000 TL setup price.
- No pricing values, package contents, page copy, portfolio content, brand colors, or unrelated section layouts were changed.
