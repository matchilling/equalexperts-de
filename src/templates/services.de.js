import React from "react"
import {graphql} from "gatsby"
import LayoutDe from "../components/layout.de-DE"
import SEO from "../components/seo"
import "../styles/index.scss"
import ServiceLayout from "../components/service_layout"

const Services = (props) => {

    const {data} = props;
    const services = data.contentfulServices;

    return (
      <LayoutDe location={props.location}>
        <SEO 
          title={services.topicTitle}
          image={services.heroImage.file.url}
          description={services.shortExplanation.shortExplanation}
          links={[
            {
              rel : "alternate",
              hreflang : "en-US",
              href : `//en-US/services/${services.slug}`
            }
          ]}
        />
        <ServiceLayout
          heroImage={services.heroImage}
          topicTitle={services.topicTitle}
          shortExplanation={services.shortExplanation.shortExplanation}
        />
      </LayoutDe>
    )
}
export default Services

export const pageQuery = graphql`
    query ServiceDe($slug: String!){
      contentfulServices(slug: {eq: $slug}, node_locale: {eq: "de"}) {
          topicTitle
          slug
          heroImage {
            file {
              fileName
              url
            }
          }
          shortExplanation {
            shortExplanation
          }
          whyNow {
            json
          }
          whatYouGetHeading
          whatYouGetIcon {
            file {
              fileName
              url
            }
          }
          whatYouGet
          whyEeHeading
          ourUsps {
            usp
            uspDescription {
              uspDescription
            }
          }
          formularForSuccess {
            formulaTitle
            formulaExplanation {
              formulaExplanation
            }
          }
          whatSuccessLooksLike {
            json
          }
          similarServices {
            serviceTitle
            serviceDescription {
              serviceDescription
            }
          }
      }
    }
`