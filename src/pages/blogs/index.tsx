import { graphql, Link, PageProps } from 'gatsby'
import * as React from 'react'
import HeadComponent from '../../components/HeadComponent'
import Layout from '../../components/Layout'

export default function Blog({ data }: PageProps<Queries.BlogPagesQuery>) {
  console.log(data)
  return (
    <Layout pageTitle="Blogs">
      <section>
        {data?.allContentfulBlogPosts.nodes.map((blogPost, index) => (
          <article key={index}>
            <hr />
            <Link to={`/blogs/${blogPost.slug}`}>
              <h2>{blogPost.title}</h2>
            </Link>
            <h3>Written in: {blogPost.date}</h3>
            <h4>Category: {blogPost.category}</h4>
            <p>{blogPost.blogContents?.blogContents}</p>
            <hr />
          </article>
        ))}

        {data?.allMdx.nodes.map((file, index) => (
          <article key={index}>
            <hr />
            <Link to={`/blogs/${file.frontmatter?.slug}`}>
              <h2>{file.frontmatter?.title}</h2>
            </Link>
            <h3>Written in: {file.frontmatter?.date}</h3>
            <h4>Category: {file?.frontmatter?.category}</h4>
            <p>{file.excerpt}</p>
            <hr />
          </article>
        ))}
      </section>
    </Layout>
  )
}

export const Head = () => <HeadComponent title="Blogs" />

export const query = () => graphql`
  query BlogPages {
    allMdx {
      nodes {
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
          category
          slug
        }
        excerpt(pruneLength: 65)
      }
    }
    allContentfulBlogPosts {
      nodes {
        id
        title
        category
        date(formatString: "YYYY-MM-DD")
        slug
        blogImage {
          gatsbyImageData
        }
        blogHeading
        blogContents {
          blogContents
        }
      }
    }
  }
`
