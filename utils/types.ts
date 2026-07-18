/**
 * Core type definitions for the Apple UI clone project.
 * These types define the shape of data used across components.
 */

/** A detail card used in sections like "Why iPhone" and "Consider iPhone" */
export type Detail = {
  eyebrow?: string;
  title: string;
  copy: string;
  image: string;
};

/** A product card used in the store shelves and promo grids */
export type StoreCard = {
  eyebrow?: string;
  title: string;
  copy?: string;
  price?: string;
  image: string;
  dark?: boolean;
  accent?: boolean;
  product?: boolean;
};

/** A group of navigation items within a nav dropdown */
export type NavItemGroup = {
  title: string;
  elevated?: boolean;
  items: string[];
};

/** A top-level navigation item with nested groups */
export type NavItem = {
  key: string;
  label: string;
  groups: NavItemGroup[];
};

/** A group of footer links under a heading */
export type FooterGroup = {
  title: string;
  items: string[];
};

/** A column of footer groups (used in the footer directory layout) */
export type FooterColumn = FooterGroup[];
