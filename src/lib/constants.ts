// Site-wide constants and configuration
export const SITE_CONFIG = {
    name: 'KFconsultant',
    title: 'KFconsultant - Design and Engineering Consultants',
    description: 'Leading design and engineering consultancy firm with over 30 years of experience in architectural design, master planning, and infrastructure development.',
    url: process.env.API_SITE_URL,
    // ogImage: '',
    keywords: [
        'architecture',
        'engineering',
        'design consultancy',
        'master planning',
        'infrastructure',
        'construction',
        'Egypt',
        'Middle East',
    ],
} as const;

// API Configuration
export const API_CONFIG = {
    baseUrl: process.env.NEXT_PUBLIC_API_ENDPOINT,
    endpoints: {
        home: '/home',
        about: '/about-us',
        contact: '/contactinfo',
        submitContact: '/submit/contact-us',
        submitJobApplication: '/submit/job-application',
        categories: '/categories',
        projects: '/projects',
        projectDetails: (slug: string) => `/projects/${slug}`,
        blogs: '/blogs',
        blogDetails: (slug: string) => `/blogs/${slug}`,
    },
} as const;


// Pagination
export const PAGINATION = {
    defaultPageSize: 12,
    maxPageSize: 50,
} as const;
