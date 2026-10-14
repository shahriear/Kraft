const navItems = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Portfolio Layouts',
    links: [
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Grid', path: '/portfoliogrid' },
    ],
  },
  {
    label: 'Portfolio Single',
    links: [{ name: 'Service 2', path: '/portfoliosingle' }],
  },
  {
    label: 'Blog',
    links: [{ name: 'Blog Service', path: '/blog' }],
  },
];
export default navItems;
