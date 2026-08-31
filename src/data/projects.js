const placeholderFields = {
  location: 'Dubai, UAE',
  client: 'Confidential',
  size: '—',
  status: 'Completed',
  year: '2024',
  description: 'Project description to be added once details are confirmed.',
};

export const projects = [
  { slug: 'retail-fit-out-01', name: 'Project Name', category: 'Retail Fit-Out', ...placeholderFields },
  { slug: 'office-interior-01', name: 'Project Name', category: 'Office Interior', ...placeholderFields },
  { slug: 'residential-01', name: 'Project Name', category: 'Residential', ...placeholderFields },
  { slug: 'exhibition-stand-01', name: 'Project Name', category: 'Exhibition Stand', ...placeholderFields },
  { slug: 'restaurant-fit-out-01', name: 'Project Name', category: 'Restaurant Fit-Out', ...placeholderFields },
  { slug: 'commercial-01', name: 'Project Name', category: 'Commercial', ...placeholderFields },
];
