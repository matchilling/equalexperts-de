import React from "react"
import { graphql } from "gatsby"
import LayoutUS from "../components/layout.en-US"
import SEO from "../components/seo"
import "../styles/index.scss"
import ArticleLayout from "../components/article_layout"

const BlogPost = props => {
  const { data } = props
  const blogPost = data.contentfulBlogPost
  const date = new Date(Date.parse(blogPost.blogDate))
  const canonical = blogPost.canonical || ""

  return (
    <LayoutUS>
      <SEO
        title={blogPost.blogTitle}
        image={blogPost.heroImage.file.url}
        description={blogPost.blogPostOverview.blogPostOverview}
        links={[
          {
            rel: "alternate",
            hreflang: "en-US",
            href: `//en-US/${blogPost.slug}`,
          },
          {
            rel: "canonical",
            href: canonical,
          },
        ]}
      />
      <ArticleLayout
        heroImage={blogPost.heroImage}
        blogTitle={blogPost.blogTitle}
        blogAuthor={blogPost.blogAuthor}
        date={date}
        blogPostOverview={blogPost.blogPostOverview}
        blogContent={blogPost.blogContent.json}
      />
    </LayoutUS>
  )
}
export default BlogPost

export const pageQuery = graphql`
  query BlogPostEn($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      blogTitle
      blogDate
      blogAuthor
      slug
      canonical
      node_locale
      heroImage {
        file {
          fileName
          url
        }
      }
      blogPostOverview {
        blogPostOverview
      }
      blogContent {
        json
      }
    }
  }
`
