import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'

interface IHeadProps {
  title: string
}
export default function HeadComponent({ title }: IHeadProps) {
  const data = useStaticQuery<Queries.HeadDataQuery>(graphql`
    query HeadData {
      site {
        siteMetadata {
          description
          siteUrl
          title
        }
      }
    }
  `)
  console.log(data)
  return <title>{title} | {data.site?.siteMetadata?.title}</title>
}
