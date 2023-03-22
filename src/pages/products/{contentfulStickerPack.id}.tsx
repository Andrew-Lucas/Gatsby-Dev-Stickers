import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from '../../components/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

'fc526dbc-7dff-519d-bfbc-eb872b9c5423'
export default function StickerPack({ data }: PageProps<Queries.StickerQuery>) {
  return (
    <Layout pageTitle={data.contentfulStickerPack?.name!}>
      <article>
        <h2>Price: ${data.contentfulStickerPack?.price}</h2>
        <GatsbyImage
          alt=""
          image={
            getImage(data.contentfulStickerPack?.preview?.gatsbyImageData!)!
          }
        />
      </article>
    </Layout>
  )
}

export const Query = graphql`
  query Sticker($id: String) {
    contentfulStickerPack(id: { eq: $id }) {
      id
      name
      price
      preview {
        gatsbyImageData
      }
    }
  }
`
