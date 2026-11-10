/**
 * Entertainment carousel data for the Apple TV+ section.
 * Contains show/movie entries and a looped version for infinite scroll.
 */

export const entertainment = [
  {
    image: "/images/tv-f1.jpg",
    title: "F1 on Apple TV",
    genre: "Live Sports",
    copy: "Every Grand Prix, live and on demand.",
  },
  {
    image: "/images/tv-silo.jpg",
    title: "Silo",
    genre: "Sci-Fi",
    copy: "The truth lies in the past.",
  },
  {
    image: "/images/tv-trying.jpg",
    title: "Trying",
    genre: "Comedy",
    copy: "New season.",
  },
  {
    image: "/images/tv-lucky.jpg",
    title: "Lucky",
    genre: "Action",
    copy: "A high-stakes heist goes sideways.",
  },
  {
    image: "/images/tv-mls.jpg",
    title: "MLS on Apple TV",
    genre: "Live Sports",
    copy: "Every club. Every match. All season long.",
  },
];

/**
 * Creates a looped version of the entertainment array for infinite carousel.
 * Adds clone slides at the beginning and end to enable seamless looping.
 */
export const loopedEntertainment = [
  {
    ...entertainment[entertainment.length - 1],
    logicalIndex: entertainment.length - 1,
    loopKey: "clone-last",
  },
  ...entertainment.map((item, logicalIndex) => ({
    ...item,
    logicalIndex,
    loopKey: `slide-${logicalIndex}`,
  })),
  {
    ...entertainment[0],
    logicalIndex: 0,
    loopKey: "clone-first",
  },
];
