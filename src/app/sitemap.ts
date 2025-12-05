import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import { getSitemapProjects } from '@/actions/getSitemapProjects';
import { getSitemapBlogs } from '@/actions/getSitemapBlogs';

export const revalidate = 86400; // 24 hours

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = SITE_CONFIG.url;

    // Static routes
    const routes = [
        '',
        '/about',
        '/contact',
        '/services',
        '/team',
        '/careers',
        '/projects',
        '/news',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic Project routes
    const projectsData = await getSitemapProjects();
    const projects = projectsData.msg_data.data.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: project.created_at,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    // Dynamic Blog routes
    const blogsData = await getSitemapBlogs();
    const blogs = blogsData.msg_data.flat().map((blog) => ({
        url: `${baseUrl}/news/${blog.slug}`,
        lastModified: blog.created_at,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [...routes, ...projects, ...blogs];
}
