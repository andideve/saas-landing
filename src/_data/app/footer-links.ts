import { Link, LinkSection } from '../../types/defaults';

export const footerLinks: LinkSection[] = [
  {
    title: 'Product',
    links: [
      { label: 'Digital Invoice', to: '#digital-invoice' },
      { label: 'Insights', to: '#insights' },
      { label: 'Reimbursements', to: '#reimbursements' },
      { label: 'Virtual Assistant', to: '#virtual-assistant' },
      { label: 'Artificial Intelligence', to: '#artificial-intelligence' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '#about-us' },
      { label: 'Newsletters', to: '#newsletters' },
      { label: 'Our Partners', to: '#our-partners' },
      { label: 'Career', to: '#career' },
      { label: 'Contact Us', to: '#contact-us' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', to: '#blog' },
      { label: 'Pricing', to: '#pricing' },
      { label: 'FAQ', to: '#faq' },
      { label: 'Events', to: '#events' },
      { label: 'Ebook & Guide', to: '#ebook-guide' },
    ],
  },
  {
    title: 'Follow Us',
    links: [
      { label: 'LinkedIn', to: '#linkedin' },
      { label: 'Twitter', to: '#twitter' },
      { label: 'Instagram', to: '#instagram' },
      { label: 'Facebook', to: '#facebook' },
      { label: 'YouTube', to: '#youTube' },
    ],
  },
];

export const generalLinks: Link[] = [
  { label: 'Privacy Policy', to: '#privacy-policy' },
  { label: 'Terms & Conditions', to: '#terms-conditions' },
  { label: 'Cookie Policy', to: '#cookie-policy' },
];
