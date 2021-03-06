import React from "react"
import LayoutEn from "../components/layout.en-US"
import SEO from "../components/seo"
import Clients from "../components/clients.en-US"
import Contacts from "../components/contacts.en-US"
import Roles from "../components/roles.en-US"
import "../styles/index.scss"
import { graphql } from "gatsby"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    //const modules = data.allContentfulModuleTextandCta.edges;
    const heroModule = data.allContentfulHeroModule.edges
    const textModule = data.allContentfulModuleTextOnly.edges[0]
    return (
      <LayoutEn location={this.props.location}>
        <SEO title="Home" image={heroModule[0].node.heroImage.file.url} />
        {heroModule.map(module => {
          const headingParts = module.node.heroHeading.split(/(?<=\.)/)
          return (
            <div
              className={`hero__container`}
              key={`heading_${headingParts[1]}`}
            >
              <img
                className={`hero__image`}
                src={`${module.node.heroImage.file.url}`}
                alt={``}
              />
              <h1 className={`hero__title`}>
                {headingParts[0]}
                <span className="hero__lastLine">{headingParts[1]}</span>
              </h1>
            </div>
          )
        })}
        {
          <div
            className={`simple-text-module`}
            dangerouslySetInnerHTML={{
              __html:
                textModule.node.childContentfulModuleTextOnlyContentRichTextNode
                  .childContentfulRichText.html,
            }}
          ></div>
        }
        <Clients></Clients>
        <Contacts></Contacts>
        {/* <Roles></Roles> */}
      </LayoutEn>
    )
  }
  componentDidMount() {
    const { hash } = window.location
    if (hash !== "") {
      setTimeout(() => {
        const id = decodeURI(hash.replace("#", ""))
        const element = document.getElementById(id)
        if (element) element.scrollIntoView()
      }, 0)
    }
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allContentfulModuleTextandCta(filter: { node_locale: { eq: "en-US" } }) {
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
    allContentfulHeroModule(filter: { node_locale: { eq: "en-US" } }) {
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
    allContentfulModuleTextOnly(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          childContentfulModuleTextOnlyContentRichTextNode {
            childContentfulRichText {
              html
            }
          }
        }
      }
    }
  }
`
