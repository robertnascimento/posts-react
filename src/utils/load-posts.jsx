export const loadPosts = async() => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');

    const [posts] = await Promise.all([postsResponse]);

    const postsJson = await posts.json();

    const postsAndPhotos = postsJson.map((post, index) => {
        // return { ...post, cover: photosJson[index].url }
        return { ...post, cover: 'https://placehold.co/600x400' }
    });

    return postsAndPhotos;
}