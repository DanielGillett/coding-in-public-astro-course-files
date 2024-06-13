import { baseData } from '@/data/siteData';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    console.log("🚀 ~ GET ~ context:", context)
    const blog = await getCollection('posts');

    return rss({
        // `<title>` field in output xml
        title: baseData.title,
        // `<description>` field in output xml
        description: baseData.description,
        // Pull in your project "site" from the endpoint context
        // https://docs.astro.build/en/reference/api-reference/#contextsite
        site: context.site,
        trailingSlash: false,
        stylesheet: '/rss/styles.xsl',
        // Array of `<item>`s in output xml
        // See "Generating items" section for examples using content collections and glob imports
        items: blog.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            // customData: post.data.customData,
            // Compute RSS link from post `slug`
            // This example assumes all posts are rendered as `/blog/[slug]` routes
            link: `/blog/${post.slug}/`,
        })),
        // (optional) inject custom xml
        customData: `<language>en-us</language>`,
    });
}