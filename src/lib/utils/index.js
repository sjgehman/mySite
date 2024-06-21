export const fetchMarkdownPosts = async () => {
    try {
        const allPostFiles = import.meta.glob('/src/routes/blog/*/+page.md');
        const iterablePostFiles = Object.entries(allPostFiles);

        const allPosts = await Promise.all(
            iterablePostFiles.map(async ([path, resolver]) => {
                try {
                    const { metadata } = await resolver();
                    // Adjust path slicing to match the new path format
                    const postPath = path.replace('/src/routes', '').replace('/+page.md', '');

                    console.log(`Full path: ${path}, Sliced path: ${postPath}, Metadata:`, metadata);

                    return {
                        meta: metadata,
                        path: postPath
                    };
                } catch (err) {
                    console.error(`Error resolving path ${path}:`, err);
                    throw err;
                }
            })
        );

        return allPosts;
    } catch (err) {
        console.error('Error fetching markdown posts:', err);
        throw err;
    }
};
