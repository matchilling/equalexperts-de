import React from "react"
import LayoutEn from "../components/layout.en-US"
import SEO from "../components/seo"
import "../styles/index.scss"
import {graphql} from "gatsby"


class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const modules = data.allContentfulModuleTextandCta.edges;
    const heroModule = data.allContentfulHeroModule.edges;
    return (
      <LayoutEn location={this.props.location}>
        <SEO title="Home" />
        {heroModule.map((module) => {
          return (
            <div className={`hero__container`}>
              <img className={`hero__image`} src={`${module.node.heroImage.file.url}`} alt={``} />
              <h1 className={`hero__title`}>{module.node.heroHeading}</h1>
            </div>
          )
        })}

        {
          modules.map((module) => {
            return (
              <div className={`module`}>
                <div className={`module__title`}>{module.node.moduleTitle}</div>
                <div className={`module__content`} dangerouslySetInnerHTML={{ __html: module.node.moduleContent.childContentfulRichText.html }} />
                {module.node.moduleCtAlink.childContentfulRichText.html ?
                  <div className={`module__link`}
                    dangerouslySetInnerHTML={{ __html: module.node.moduleCtAlink.childContentfulRichText.html }} /> : ''
                }
              </div>

            )
          })
        }
      </LayoutEn>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
query {
  allContentfulModuleTextandCta(filter: {node_locale: {eq: "en-US"}}) {
    edges {
      node {
        moduleTitle
        moduleContent {
          childContentfulRichText {
           html
          }
        }
        moduleCtAlink {
          childContentfulRichText {
            html
          }
        }
      }
    }
  }
  allContentfulHeroModule(filter: {node_locale: {eq: "en-US"}}) {
    edges {
      node {
        heroHeading
        heroImage {
          file {
            url
          }
        }
      }
    }
  }
}
`