// The photos the story needs. Save each one in public/photos/ with the
// file name on the left (for example public/photos/mum-in-the-grove.jpg).
// The site picks it up on the next build. See PHOTOS.md for the full brief.

export const photos = {
  'mum-in-the-grove': {
    alt: 'My mother walking between the old olive trees in our grove in Corfu',
    brief: 'Mum among the trees, landscape, the whole tree around her, soft morning or late-afternoon light.',
  },
  'grove-and-islands': {
    alt: 'The grove looking out over the Ionian Sea to the Diapontian islands',
    brief: 'Wide view: the trees in front, the sea and the islands on the horizon.',
  },
  'mum-hands': {
    alt: 'My mother’s hands holding freshly picked olives',
    brief: 'Close-up of hands with olives or on the bark of a tree. Upright.',
  },
  'old-trunk': {
    alt: 'The twisted trunk of one of the oldest trees in the grove',
    brief: 'The oldest trunk you have, close, filling the frame. Upright.',
  },
  'harvest-nets': {
    alt: 'Nets spread under the trees at harvest',
    brief: 'Harvest day: nets on the ground, people working, olives falling.',
  },
  'family-archive': {
    alt: 'An old family photograph taken in the grove',
    brief: 'An old print of the family in the grove, scanned or photographed flat.',
  },
  'at-the-table': {
    alt: 'Our oil poured over bread at the family table',
    brief: 'The family table: bread, oil, a meal. Hands and food, not posed.',
  },
} as const;
