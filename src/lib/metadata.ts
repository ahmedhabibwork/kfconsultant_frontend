import { Metadata } from 'next';
import { SITE_CONFIG } from './constants';

interface MetadataParams {
    title?: string;
    description?: string;
    keywords?: readonly string[];
    image?: string;
    url?: string;
    type?: 'website' | 'article';
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string[];
}

/**
 * Generate comprehensive metadata for a page
 */
export function createMetadata({
    title,
    description = SITE_CONFIG.description,
    keywords = SITE_CONFIG.keywords,
    image = "",
    url,
    type = 'website',
    publishedTime,
    modifiedTime,
    authors,
}: MetadataParams = {}): Metadata {
    const pageTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.title;
    const pageUrl = url ? `${SITE_CONFIG.url}${url}` : SITE_CONFIG.url;

    return {
        title: pageTitle,
        description,
        keywords: keywords.join(', '),
        authors: authors?.map(name => ({ name })),
        openGraph: {
            type,
            title: pageTitle,
            description,
            url: pageUrl,
            siteName: SITE_CONFIG.name,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title || SITE_CONFIG.name,
                },
            ],
            ...(type === 'article' && publishedTime && {
                publishedTime,
                modifiedTime,
            }),
        },
        twitter: {
            card: 'summary_large_image',
            title: pageTitle,
            description,
            images: [image],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        alternates: {
            canonical: pageUrl,
        },
    };
}

/**
 * Generate JSON-LD structured data for organization
 */
export function createOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        logo: "",
        description: SITE_CONFIG.description,
    };
}

/**
 * Generate JSON-LD structured data for article/blog post
 */
export function createArticleSchema({
    title,
    description,
    image,
    publishedTime,
    modifiedTime,
    url,
}: {
    title: string;
    description: string;
    image: string;
    publishedTime: string;
    modifiedTime?: string;
    url: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        image,
        datePublished: publishedTime,
        dateModified: modifiedTime || publishedTime,
        author: {
            '@type': 'Organization',
            name: SITE_CONFIG.name,
        },
        publisher: {
            '@type': 'Organization',
            name: SITE_CONFIG.name,
            logo: {
                '@type': 'ImageObject',
                url: "",
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url,
        },
    };
}

/**
 * Generate JSON-LD structured data for project
 */
export function createProjectSchema({
    title,
    description,
    image,
    url,
}: {
    title: string;
    description: string;
    image: string;
    url: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: title,
        description,
        image,
        url,
        creator: {
            '@type': 'Organization',
            name: SITE_CONFIG.name,
        },
    };
}
