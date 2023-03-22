import { graphql, PageProps } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import HeadComponent from '../../components/HeadComponent'
import Layout from '../../components/Layout'

export default function FullBlogPostContentfull({
  data,
}: PageProps<Queries.FullBlogContentfulQuery>) {
  console.log(data)
  return (
    <Layout pageTitle={data.contentfulBlogPosts?.title!}>
      {data?.contentfulBlogPosts && (
        <>
          <GatsbyImage
            alt=""
            image={getImage(data.contentfulBlogPosts.blogImage)!}
          />
          <h2>{data.contentfulBlogPosts.blogHeading}</h2>
          <p>{data.contentfulBlogPosts.blogContents?.blogContents}</p>
        </>
      )}
    </Layout>
  )
}

export const Head = ({ data }: PageProps<Queries.FullBlogContentfulQuery>) => (
  <HeadComponent title={data.contentfulBlogPosts?.title!} />
)

export const query = graphql`
  query FullBlogContentful($slug: String) {
    contentfulBlogPosts(slug: { eq: $slug }) {
      title
      category
      author
      date(formatString: "YYY-MM-DD")
      blogImage {
        gatsbyImageData
      }
      blogHeading
      blogContents {
        blogContents
      }
    }
  }
`
