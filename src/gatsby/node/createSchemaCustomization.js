/*
  https://github.com/gatsbyjs/gatsby/issues/19674

  Please note this will be removed once the above
  issue is resolved and gatsby-plugin-schema-snapshot
  can be handle the full extent of the schema generation.
*/

module.exports = ({ actions }) => {
  const typeDefs = `
    type contentfulPostBodyTextNode implements Node
    @childOf(types: ["ContentfulPost"]) {
      id: ID!
    }
    type contentfulPageBodyTextNode implements Node
    @childOf(types: ["ContentfulPage"]) {
      id: ID!
    }
    type MarkdownRemark implements Node
    @childOf(types: [
      "contentfulPostBodyTextNode",
      "contentfulPageBodyTextNode",
    ]) {
      id: ID!
    }
  `
  actions.createTypes(typeDefs)
}
