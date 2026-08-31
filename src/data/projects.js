const placeholderFields = {
  location: 'Dubai, UAE',
  authorities: ['To be confirmed'],
  scopeOfWork: ['To be confirmed'],
  size: '—',
  status: 'Completed',
  year: '2024',
  tags: ['To be confirmed'],
  images: [],
};

export const projects = [
  {
    slug: 'amber-grounds-cafe',
    name: 'Amber Grounds Cafe',
    category: 'Restaurant Fit-Out',
    ...placeholderFields,
    images: [
      '/assets/projects/amber-grounds-cafe/hero.jpg',
      '/assets/projects/amber-grounds-cafe/01.jpg',
      '/assets/projects/amber-grounds-cafe/03.jpg',
      '/assets/projects/amber-grounds-cafe/04.jpg',
      '/assets/projects/amber-grounds-cafe/05.jpg',
      '/assets/projects/amber-grounds-cafe/06.jpg',
      '/assets/projects/amber-grounds-cafe/07.jpg',
    ],
  },
  { slug: 'rayhaan-perfumes', name: 'Rayhaan Perfumes', category: 'Retail Fit-Out', ...placeholderFields },
  { slug: 'residential-01', name: 'Project Name', category: 'Residential', ...placeholderFields },
  { slug: 'exhibition-stand-01', name: 'Project Name', category: 'Exhibition Stand', ...placeholderFields },
  { slug: 'restaurant-fit-out-01', name: 'Project Name', category: 'Restaurant Fit-Out', ...placeholderFields },
  { slug: 'commercial-01', name: 'Project Name', category: 'Commercial', ...placeholderFields },
];
