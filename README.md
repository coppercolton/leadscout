// Editorial-dark design tokens for LeadScout AI
// Inter + Instrument Serif + JetBrains Mono; warm off-white on near-black
// Single accent, hue is tweakable.

window.LS_TOKENS = {
  // Light mode (warm paper)
  light: {
    bg:        'oklch(0.985 0.003 85)',
    bgElev:    'oklch(0.97 0.004 85)',
    fg:        'oklch(0.18 0.005 85)',
    fgMuted:   'oklch(0.45 0.005 85)',
    fgSubtle:  'oklch(0.62 0.005 85)',
    border:    'oklch(0.9 0.005 85)',
    borderStrong: 'oklch(0.82 0.005 85)',
    hairline:  'oklch(0.94 0.005 85)',
  },
  // Dark mode (editorial near-black, warm)
  dark: {
    bg:        'oklch(0.14 0.006 60)',
    bgElev:    'oklch(0.18 0.006 60)',
    fg:        'oklch(0.97 0.005 85)',
    fgMuted:   'oklch(0.72 0.006 70)',
    fgSubtle:  'oklch(0.52 0.006 70)',
    border:    'oklch(0.26 0.006 60)',
    borderStrong: 'oklch(0.34 0.006 60)',
    hairline:  'oklch(0.22 0.006 60)',
  },
};

// accent hue tweakable — default cool blue from repo's blue-600
window.LS_ACCENT = (hue = 240) => ({
  accent:      `oklch(0.68 0.15 ${hue})`,
  accentSoft:  `oklch(0.68 0.15 ${hue} / 0.12)`,
  accentLine:  `oklch(0.68 0.15 ${hue} / 0.35)`,
  accentText:  `oklch(0.78 0.13 ${hue})`,
  accentDeep:  `oklch(0.45 0.14 ${hue})`,
});

window.LS_SEMANTIC = {
  good:   'oklch(0.75 0.14 150)',
  warn:   'oklch(0.82 0.14 85)',
  bad:    'oklch(0.68 0.2 25)',
  info:   'oklch(0.78 0.1 210)',
};
