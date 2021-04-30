import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import PageBody from '../components/PageBody'
import SEO from '../components/SEO'

const PageTemplate = ({ data }) => {
  const { title, body } = data.contentfulPage
  return (
    <Layout>
      <SEO
        title={title}
        description={body.childMarkdownRemark.excerpt}
      />
      <Container>
        <PageTitle>{title}</PageTitle>
        <PageBody body={body} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      slug
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default PageTemplate
