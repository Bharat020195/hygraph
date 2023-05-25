import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"

export default function BlogPost({ data }) {
  const image = getImage(data.cms.post.coverImage)
  return (
    <Layout>
      <div>
        <h1>{data.cms.post.title}</h1>
        <GatsbyImage image={image} alt="A dinosaur" />
        <div dangerouslySetInnerHTML={{ __html: data.cms.post.content.html }} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostQuery($id: ID!) {
    cms {
      post(where: { id: $id }) {
        content {
          html
        }
        slug
        tags
        title
        coverImage {
          url
          id
          size
        }
      }
    }
  }
`;
