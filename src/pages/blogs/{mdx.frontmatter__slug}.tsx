import { graphql, PageProps } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import HeadComponent from '../../components/HeadComponent'
import Layout from '../../components/Layout'

export default function FullBlogPostMdx({
  data,
  children,
}: PageProps<Queries.FullBlogMdxQuery>) {
  return (
    <Layout pageTitle={data.mdx?.frontmatter?.title!}>
      {data.mdx && (
        <>
          <GatsbyImage
            alt=""
            image={
              getImage(
                data.mdx.frontmatter?.blogImage?.childImageSharp
                  ?.gatsbyImageData!
              )!
            }
          />
          <article>{children}</article>
        </>
      )}
    </Layout>
  )
}

export const Head = ({ data }: PageProps<Queries.FullBlogMdxQuery>) => (
  <HeadComponent title={data.mdx?.frontmatter?.title!} />
)

export const query = graphql`
  query FullBlogMdx($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      body
      frontmatter {
        title
        blogImage {
          childImageSharp {
            gatsbyImageData(height: 450, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
