// Approvals shown in the homepage "Recent Approvals" section, grouped by year (newest first).
// status: 'approved' (completed) or 'in-progress' (advance paid, approval underway).
// `project` (a public name), `location` and `duration` (e.g. '3 weeks') are optional.
// `project` is the shop/business name; private individuals' names are left out.
export const approvals = [
  // 2026
  { year: '2026', month: 'Oct', status: 'in-progress', project: 'Heera Bannu Pulao Restaurant', type: 'Restaurant', location: 'International City', authorities: ['DM Food Control'] },
  { year: '2026', month: 'Oct', status: 'in-progress', project: 'Daneen Beauty Salon', type: 'Beauty Salon', location: 'Mirdif', authorities: ['DM Health & Safety NOC'] },
  { year: '2026', month: 'Sep', status: 'in-progress', project: 'The Wellbite Restaurant', type: 'Restaurant', location: 'International City', authorities: ['Dubai Holding', 'Civil Defense', 'Trakhees'] },
  { year: '2026', month: 'Sep', status: 'in-progress', type: 'Villa Modification', location: 'Falcon City of Wonders', authorities: ['Civil Defense', 'DDA'] },
  { year: '2026', month: 'Sep', status: 'in-progress', project: 'QIDI Premium Auto Repairing', type: 'Warehouse & Mezzanine Works', location: 'Ras Al Khor Industrial', authorities: ['Dubai Municipality', 'Civil Defense'] },
  { year: '2026', month: 'Sep', status: 'approved', project: 'Kacchi King Restaurant', type: 'Restaurant', authorities: ['DM Food Control'] },
  { year: '2026', month: 'Sep', status: 'approved', project: 'Albostan Alahmar Restaurant', type: 'Restaurant', location: 'International City', authorities: ['DM Food Control'] },
  { year: '2026', month: 'Sep', status: 'approved', project: 'Lutong Pinoy Restaurant', type: 'Restaurant', location: 'International City', authorities: ['DM Food Control'] },
  { year: '2026', month: 'Sep', status: 'in-progress', project: 'Baba Dola Restaurant', type: 'Restaurant', location: 'International City', authorities: ['DM Food Control', 'Trakhees', 'Civil Defense'] },
  { year: '2026', month: 'Sep', status: 'in-progress', project: 'Sarhad Punjab Restaurant', type: 'Restaurant', location: 'International City', authorities: ['DM Food Control'] },
  { year: '2026', month: 'Aug', status: 'in-progress', project: 'Kattappa Chai Restaurant & Catering', type: 'Restaurant & Catering', authorities: ['DM Food Control', 'Dubai Municipality', 'Civil Defense'] },
  { year: '2026', month: 'Aug', status: 'approved', project: 'Desi Chaskka Restaurant', type: 'Restaurant', location: 'International City', authorities: ['DM Food Control'] },
  { year: '2026', month: 'Aug', status: 'in-progress', project: 'Zener Marine Services (DMC Branch)', type: 'Marine Services Office', location: 'Dubai Maritime City', authorities: ['DMC', 'Civil Defense', 'Trakhees'] },
  { year: '2026', month: 'Aug', status: 'approved', project: 'Mr. Mart', type: 'Retail Kiosk', authorities: ['Trakhees Temporary Kiosk Permit'] },
  { year: '2026', month: 'Aug', status: 'in-progress', project: 'Zener Marine Services', type: 'Office Fit-Out', authorities: ['Dubai Holding', 'Civil Defense', 'Trakhees'] },
  { year: '2026', month: 'Aug', status: 'approved', project: 'Mommy & Me Readymade Garments', type: 'Shop Front Replacement', location: 'International City', authorities: ['Dubai Holding'] },
  { year: '2026', month: 'Jul', status: 'approved', project: 'Schematic Engineering Consultants', type: 'Engineering Consultancy Office', location: 'Dubai Silicon Oasis', authorities: ['Civil Defense', 'DSO'] },
  { year: '2026', month: 'Jul', status: 'approved', project: 'Marabin Aduppadi Restaurant', type: 'Restaurant', authorities: ['DM Food Control', 'DM Checked'] },
  { year: '2026', month: 'Jul', status: 'approved', project: 'Saqer Albarsha Grocery', type: 'Grocery', authorities: ['Civil Defense', 'Trakhees'] },
  { year: '2026', month: 'Jul', status: 'approved', project: 'Manish Medi Innovation Drug Store', type: 'Drug Store', authorities: ['Civil Defense', 'Trakhees', 'Dubai Holding'] },
  { year: '2026', month: 'Jun', status: 'approved', project: 'Quick Med Pharmacy', type: 'Pharmacy', authorities: ['Civil Defense'] },
  { year: '2026', month: 'Jun', status: 'approved', project: 'Ras Cafe', type: 'Cafe', authorities: ['DM Food Control'] },
  { year: '2026', month: 'Jun', status: 'approved', project: 'GDL IT Infrastructure', type: 'IT Office', location: 'Dubai Silicon Oasis', authorities: ['Civil Defense', 'DSO'] },
  { year: '2026', month: 'May', status: 'approved', project: 'Fresh Cuts Meat Trading', type: 'Butchery', authorities: ['DM Food Control', 'Civil Defense', 'Trakhees'] },
  { year: '2026', month: 'May', status: 'approved', project: 'Jeera Junction Restaurant', type: 'Restaurant', authorities: ['DM Food Control'] },
  { year: '2026', month: 'May', status: 'approved', project: 'Mohamed Ali Moideen Drug Store', type: 'Drug Store', authorities: ['Civil Defense'] },
  { year: '2026', month: 'Apr', status: 'approved', project: 'Tahabeesh Cafeteria', type: 'Cafeteria', authorities: ['Civil Defense', 'Trakhees'] },
  { year: '2026', month: 'Apr', status: 'approved', type: 'Commercial Unit', authorities: ['DEWA'] },
  { year: '2026', month: 'Mar', status: 'approved', project: 'Ilocano Brewers Cafe', type: 'Cafe', authorities: ['DM Food Control', 'Foodwatch Registration'] },
  { year: '2026', month: 'Mar', status: 'approved', project: 'JBROS Restaurant', type: 'Food Truck', location: 'JVC', authorities: ['Temporary Food Truck Approval'] },
  {
    year: '2026', status: 'approved', project: 'Rayhaan Perfumes', type: 'Warehouse & Office Fit-Out', location: 'Al Qusais',
    authorities: ['Dubai Municipality', 'Civil Defense'],
  },

  // 2025
  {
    year: '2025', status: 'approved', project: 'Amber Grounds Cafe', type: 'Restaurant Fit-Out', location: 'Dubai Silicon Oasis',
    authorities: ['Dubai Silicon Oasis', 'Civil Defense'],
  },
  {
    year: '2025', status: 'approved', project: '2 Bedroom Apartment', type: 'Residential', location: 'Murjan 1, Marina',
    authorities: ['DDA', 'Civil Defense'],
  },
];
