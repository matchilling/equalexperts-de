import React from "react"
import {graphql} from "gatsby"
import LayoutUS from "../components/layout.en-US"
import SEO from "../components/seo"
import "../styles/index.scss"
import ServiceLayout from "../components/service_layout"

const Services = (props) => {

  const {data} = props;
  const services = data.contentfulServices;

    return (
      <LayoutUS location={props.location}>
      <SEO 
        title={services.topicTitle}
        image={services.heroImage.file.url}
        description={services.shortExplanation.shortExplanation}
        links={[
          {
            rel : "alternate",
            hreflang : "en-US",
            href : `//services/${services.slug}`
          }
        ]}
      />
      <ServiceLayout
        heroImage={services.heroImage}
        topicTitle={services.topicTitle}
        shortExplanation={services.shortExplanation.shortExplanation}
        whyNow={services.whyNow.json}
        whatYouGetHeading={services.whatYouGetHeading}
        whatYouGetIcon={services.whatYouGetIcon}
        whatYouGet={services.whatYouGet}
        whyEEHeading={services.whyEeHeading}
        ourUsps={services.ourUsps}
      />
    </LayoutUS>
    )
}
export default Services

export const pageQuery = graphql`
    query ServiceEn($slug: String!){
      contentfulServices(slug:{eq: $slug}){
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