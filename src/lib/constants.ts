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
    baseUrl: process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://72.62.16.29/api/v1',
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

// Social Media Links
export const SOCIAL_LINKS = {
    facebook: 'https://www.facebook.com/DMADesignConsultancy',
    instagram: 'https://www.instagram.com/dma.design.consultancy',
    linkedin: 'https://www.linkedin.com/company/dma-egypt/',
} as const;

// Default Images
export const DEFAULT_IMAGES = {
    og: '',
    placeholder: '/newsCard.webp',
    headerBg: '/contactBg.webp',
} as const;

// Pagination
export const PAGINATION = {
    defaultPageSize: 12,
    maxPageSize: 50,
} as const;
