export type Detail = {
  eyebrow?: string;
  title: string;
  copy: string;
  image: string;
};

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

export type NavItemGroup = {
  title: string;
  elevated?: boolean;
  items: string[];
};

export type NavItem = {
  key: string;
  label: string;
  groups: NavItemGroup[];
};

export type FooterGroup = {
  title: string;
  items: string[];
};

export type FooterColumn = FooterGroup[];
