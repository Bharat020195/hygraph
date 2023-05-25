exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

 
  const result = await graphql(`
    query {
      cms {
        posts {
          id
          slug
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // Create individual blog post pages
  const posts = result.data.cms.posts;
  posts.forEach(post => {
    createPage({
      path: `/posts/${post.slug}`,
      component: require.resolve("./src/templates/post-template.js"),
      context: {
        id: post.id,
      },
    });
  });
};