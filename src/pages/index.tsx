import { graphql, Link, PageProps } from 'gatsby'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import HeadComponent from '../components/HeadComponent'
import Layout from '../components/Layout'

export default function IndexPage({
  data,
}: PageProps<Queries.StickerPacksQuery>) {
  return (
    <Layout pageTitle="Welcome to Dev Stickers">
      <section className="grid">
        {data?.allContentfulStickerPack.nodes.map((sticker, index) => (
          <article key={index}>
            <hr />
            <Link to={`/products/${sticker.id}`}>
              <h2>{sticker.name}</h2>
            </Link>
            <GatsbyImage alt="" image={getImage(sticker.preview!)!} />
            <h3>${sticker.price}</h3>
            <hr />
          </article>
        ))}
      </section>
    </Layout>
  )
}

export const Head = () => <HeadComponent title="Home" />

export const Query = graphql`
  query StickerPacks {
    allContentfulStickerPack {
      nodes {
        id
        name
        price
        preview {
          gatsbyImageData(placeholder: BLURRED, height: 250)
        }
      }
    }
  }
`
