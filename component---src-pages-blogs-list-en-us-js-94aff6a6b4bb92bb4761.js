(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+A0O":function(e,t,a){"use strict";var o=a("Wa8Z"),n=a("Wbzz"),i=a("q1tI"),s=a.n(i),r=a("x0lo"),l=a("gD8t");t.a=function(){var e=o.data,t="undefined"!=typeof window?window.location.pathname:"",a=e.site.siteMetadata.languages,i=a.langs,c=a.defaultLangKey,d=Object(r.getCurrentLangKey)(i,c,t),h="/"+d+"/",u=Object(r.getLangs)(i,d,Object(r.getUrlForLang)(h,t)),m=[s.a.createElement(n.Link,{to:"/en-US/customers/",key:"blogNavItem1",className:"header__navigation-link"},"Customers"),s.a.createElement(n.Link,{to:"/en-US/career/",key:"blogNavItem2",className:"header__navigation-link"},"Career"),s.a.createElement(n.Link,{to:"/en-US/blogs-list/",key:"blogNavItem3",className:"header__navigation-link"},e.allContentfulHeaderMenu.edges[0].node.blogLink),s.a.createElement(n.Link,{to:"/en-US/contact/",key:"blogNavItem4",className:"header__navigation-link"},e.allContentfulHeaderMenu.edges[0].node.contactLink)];return s.a.createElement(l.a,{navLinks:m,switcherLinks:u})}},B92p:function(e,t,a){"use strict";a.r(t);var o=a("DTWE"),n=a("q1tI"),i=a.n(n),s=a("Wbzz"),r=a("+A0O"),l=a("Uatp");t.default=function(e){var t=e.children,a=(e.location,o.data),n=a.allContentfulBlogPost.edges,c=a.allContentfulBlogList.edges[0].node;return i.a.createElement("div",{className:"main-container"},i.a.createElement(r.a,null),i.a.createElement("article",{className:"content"},i.a.createElement("main",null,t),i.a.createElement("h1",{className:"blog-list__heading"},c.blogListTitle),i.a.createElement("div",{className:"blog-list__title",dangerouslySetInnerHTML:{__html:c.childContentfulBlogListBlogListContentRichTextNode.childContentfulRichText.html}}),i.a.createElement("ul",{className:"blogs__list"},n.map((function(e){var t=new Date(Date.parse(e.node.blogDate));return i.a.createElement("li",null,i.a.createElement("span",null,t.getMonth()+1,"/",t.getFullYear()),i.a.createElement(s.Link,{to:"en-US/"+e.node.slug},e.node.blogTitle),i.a.createElement("span",null," Author - ",e.node.blogAuthor),i.a.createElement("p",{className:"blog-list__content",dangerouslySetInnerHTML:{__html:e.node.blogContent.childContentfulRichText.html}}))})))),i.a.createElement(l.a,null))}},DTWE:function(e){e.exports=JSON.parse('{"data":{"allContentfulBlogPost":{"edges":[{"node":{"slug":"blogpost2","blogTitle":"R-ee-mote Working Playbook","blogAuthor":"  Dave Hewett","blogDate":"2019-12-02T00:00+05:30","blogContent":{"childContentfulRichText":{"html":"<p><b>This </b><a href=\\"https://remote-working.playbook.ee/\\"><b>remote working playbook</b></a><b> takes learnings from a variety of EE consultants who have spent time working remotely with a view to help our network collaborate more effectively and provide ways to improve the distributed work experience.</b></p><h3>How it can help you</h3><p>At Equal Experts, we are passionate that teams are empowered to succeed and <b>deliver value</b> no matter where they are located. Over the years our teams have covered the full spectrum from fully co-located, teams with work-from-home-Fridays, teams with multiple locations spread across geographies and different timezones to fully distributed teams.</p><p>As the friction created by remote working rapidly dissipates and as the generation of workers who have grown-up playing on-line enter the workforce, remote working will become an increasingly important part of our working life. With the right tools, practices and mindset, the once significant advantages provided by co-located working can be reduced to a point where remote teams should be a strong consideration when forming your next team.</p><p>Effective distributed working requires more than huddling around a big screen once a day or communicating via Jira ticket.  We want this playbook to be practical and help teams establish useful tools, process and working patterns for remote working. We have included a healthy dose of practical tips and learnings as well as some recommendations for technical tools.</p><p>Technology is changing very fast, and while we have focussed on giving practical advice, we have also shared some of the underlying principles that allow remote teams to be successful.</p><h3>How to use it</h3><p>Feel free to skip through some of the more theoretical sections as it is more musing about why, rather than practical advice on how. The Team Charter section provides a tool to help team alignment and set expectations. In this section, we give hints on working day etiquette, working across timezones, some important considerations when running video calls and thoughts that extend Slack beyond /giphy for communicating in a remote-working setting. Some of these suggestions may appear obvious, but applying them consistently makes a big difference when working in a remote setting. </p><h3>Contact us! </h3><p>We hope you find this and our other <a href=\\"https://www.playbook.ee/\\">playbooks</a> useful. If you’ve used it to help your remote team work more effectively or have feedback of any flavour, we’d love to hear from you. We offer a range of services, and of course, we’re pretty good at delivering software. </p><p>‌Share thoughts, find updates, templates and other information at <a href=\\"http://www.equalexperts.com/\\">www.equalexperts.com</a>, or get in <a href=\\"https://www.equalexperts.com/contact-us/\\">touch</a> if you are interested in working with us.</p>"}}}},{"node":{"slug":"blogpost1","blogTitle":"How we helped a long-term client cut its AWS costs by 66%","blogAuthor":"Matt Ralph","blogDate":"2020-01-15T00:00+05:30","blogContent":{"childContentfulRichText":{"html":"<p><b>We’re often asked to help our clients build out their capability in the cloud or to help them reduce infrastructure costs. Being able to do both at the same time is the icing on the cake!</b></p><p>Our work with one of our clients enabled it to reduce its monthly AWS spend by 66%, within 8 months. More satisfying still, we were able to do so while improving its cloud capability, steadily increasing availability and ramping up deployments fivefold, from an average of 3 to 15 per month.</p><p>Equal Experts was initially engaged by the client to add features to its previous AWS-based customer rewards platform. However, given the ambitious scope of the work, it became clear that its previous infrastructure would not scale to meet its increasing performance requirements. Soon the engagement grew to include a complete rewrite, both of the client’s platform and of its companion Business Analytics reporting platform.</p><h3>Put through its paces</h3><p>The new platform has already been substantially road-tested by ticket sales for performances by major artists, and didn’t break a sweat as we registered and enrolled 230% more new customers per second. As well as being much cheaper to run, it has also proved itself to be much simpler to manage and better performing due to all parts of the new platform being fully automated and simple to rebuild completely from scratch.</p><h3>New environments</h3><p>The client’s cost reduction was achieved by performing a managed cutover to a set of completely new environments. The new environments leverage Docker in Swarm clusters and refactor the old code into microservices. These microservices can be scaled up and down independently of each-other; an nginx ingress tier and standard service-discovery-based load-balancing ensures that customer traffic is balanced across all available copies of a microservice. This also means that a container can be removed from the pool with no impact, making our deployments zero-downtime. The net result is much more efficient use of memory and compute in AWS. As both back-end and front-end microservices for the platform were moved to Docker across web, iOS and Android, this also made the platform more consistent and significantly reduced the complexity around change.</p><h3>Decommissioning</h3><p>Another serious source of cost-saving was the decommissioning of an extensive Hadoop cluster used for business analytics and daily reports. The reports being run were fairly small and did not really require the overhead of MapReduce processing. Our Tech Lead produced a radically simplified solution using a single microservice to do the data processing and the platform’s mongodb replica-set for storage.</p><p>In addition to huge cost savings (we decommissioned 10 extra-large Hadoop data nodes and 2 name nodes as well as about 25 other instances), the migration moved the client onto open-source, widely-used service-discovery and load-balancing solutions, away from proprietary end-of-life software packages. The Business Analytics solution, which used to have a feed failure on average twice a week, has had no transfer failures since it went live in November last year.</p><h3>Trusted team</h3><p>The client asked us to use this platform to roadshow a couple of other improvements it was working on internally; it’s using us to test their new architecture patterns initiative and has designated us their only ‘trusted team’ currently, meaning that we don’t need to give 24 hours’ notice in order to make production changes. This is based on our high availability and very low mean time to fix, as well as the success rate of our deployments. This won’t be the last client team to enjoy huge cost reduction with improved stability and agility.</p><p>Overall this is a great example of how we can add value to our clients in a short time, whilst in parallel laying the groundwork for better infrastructure in the future that’s consistent to manage, simple to maintain and can easily adapt to business opportunities.</p><p></p><p></p>"}}}}]},"allContentfulBlogList":{"edges":[{"node":{"blogListTitle":"Blog","childContentfulBlogListBlogListContentRichTextNode":{"childContentfulRichText":{"html":"<h2>Industry and tech insight from our leading team of experts</h2><h2></h2><p></p>"}}}}]}}}')},Wa8Z:function(e){e.exports=JSON.parse('{"data":{"allContentfulHeaderMenu":{"edges":[{"node":{"contactLink":"Contact","blogLink":"Blog"}}]},"site":{"siteMetadata":{"title":"Equal Experts","description":"Making software better","languages":{"defaultLangKey":"de","langs":["de","en-US"]}}}}}')}}]);
//# sourceMappingURL=component---src-pages-blogs-list-en-us-js-94aff6a6b4bb92bb4761.js.map