export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  email: string;
  domain: string;
  fromName: string;
  address?: string;
  phone?: string;
  rating?: number;
  review_count?: number;
  navLinks: { label: string; href: string }[];
  footer: { text: string };
}

export const siteConfig: SiteConfig = {
  name: 'Chu The Phat',
  tagline: "Asian street food from Hong Kong, Korea and Taiwan in Fish Lane",
  description: "Chu The Phat menu, hours, phone, address and booking details based on public restaurant data.",
  email: 'contact@chu-the-phat.com',
  domain: 'chu-the-phat.webjuice.fengtalk.ai',
  fromName: 'Chu The Phat',
  address: '111 Melbourne St, South Brisbane QLD 4101, Australia',
  phone: '(07) 3255 2075',
  rating: 4.5,
  review_count: 3253,
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'Contact', href: '/contact' },
  ],
  footer: {
    text: 'Chu The Phat - 111 Melbourne St',
  },
};
