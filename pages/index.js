import Head from "next/head";
import { Component, Fragment } from 'react';
import { attributes as headerData } from '../content/header.md';
import { attributes as sectionData } from '../content/sections.md';
import { attributes as readsandlinksData } from '../content/readsandlinks.md';
import { react as ContactContent } from '../content/contact.md';
import { react as FooterContent } from '../content/footer.md';

export default class Home extends Component {
  componentDidMount() {    
    let location = new google.maps.LatLng(38.8435508,-77.0922251);
    let mapOptions = {
      center: location,
      zoom: 10,
      draggable: false,
      scrollwheel: false,
      panControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      disableDefaultUI: true
    };
    let googleMap = new google.maps.Map(document.getElementById("map-container"), mapOptions);
    let marker = new google.maps.Marker({
      position: location,
      map: googleMap,
      title:"College Park, MD"
    });

    marker.setMap(googleMap);
  }

  scrollTop = () => {
    window.scrollTo(0,0);
    history.pushState(null, null, ' ');
  }

  render() {
    const { image, title, subtitle } = headerData;

    return (
      <>
        <Head>
          <script src="https://www.googletagmanager.com/gtag/js?id=UA-70846290-1"></script>
          <script
            dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-70846290-1');
            `,
            }}
          />
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          <script src="https://maps.google.com/maps/api/js?key=AIzaSyBjCrItrF-id9sR26B8YTdLiZAiIypku1Y"></script>
          <title>Katie Thigpen | Professional Trombonist</title>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="alternate" href="https://www.katiethigpen.com/" hreflang="x-default" />
          <meta name="description" content="Washington, DC area Performer &amp; Music Educator." />
          <meta name="keywords" content="katie,thigpen,trombone,music,teacher,lessons,washington" />
          <link href="https://fonts.googleapis.com/css?family=Megrim" rel="stylesheet" type="text/css"></link>
        </Head>
        <nav className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
          <div className="container topnav">
            <div className="navbar-header">
              <div className="navbar-brand topnav title" onClick={this.scrollTop}>Katie Thigpen</div>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                {
                  sectionData.sections.map((section, i) => (
                    <li key={i}>
                      <a href={`#${section.slug}`}>{section.title}</a>
                    </li>
                  ))
                }
                <li>
                  <a href="#links">Reads &amp; Links</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="intro-header" style={{ background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${image}) no-repeat center center`, backgroundSize: 'cover' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="intro-message">
                  <h1>{title}</h1>
                  <h3>{subtitle}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          sectionData.sections.map((section, i) => (
            <Fragment key={i}>
              <a name={section.slug} />
              <div className={`content-section-${i % 2 ? 'a' : 'b'}`}>
                <div className="container">
                  <div className="row">
                    <div className={`col-lg-6 col-sm-6 ${i % 2 ? '' : 'col-sm-push-6'}`}>
                      <hr className="section-heading-spacer" />
                      <div className="clearfix"></div>
                      <h2 className="section-heading">{section.title}</h2>
                      <p className="lead">{section.body}</p>
                    </div>
                    <div className={`col-lg-6 col-sm-6 ${i % 2 ? '' : 'col-sm-pull-6'}`}>
                      <img className="img-responsive" src={section.image} alt={section.title} />
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          ))
        }
        <a name="links" />
        <div className="content-section-a">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <hr className="section-heading-spacer" />
                <div className="clearfix" />
                <h2 className="section-heading">Interesting reads</h2>
                <dl className="dl-horizontal links">
                {
                  readsandlinksData.reads.map((read, i) => (
                    <dd key={i}>
                      <a target="_blank" href={read.url}>{read.title}</a>
                    </dd>
                  ))
                }
                </dl>
              </div>
              <div className="col-lg-6 col-sm-6">
                <hr className="section-heading-spacer" />
                <div className="clearfix" />
                <h2 className="section-heading">Useful Links</h2>
                <dl className="dl-horizontal links">
                {
                  readsandlinksData.links.map((link, i) => (
                    <dd key={i}>
                      <a target="_blank" href={link.url}>{link.title}</a>
                    </dd>
                  ))
                }
                </dl>
              </div>
            </div>
          </div>
        </div>
        <a name="contact" />
        <div className="content-section-b last">
          <div className="container">
            <div className="row">
              <div className="col-lg-6  col-sm-6">
                <hr className="section-heading-spacer" />
                <div className="clearfix" />
                <h2 className="section-heading">Contact</h2>
                <p className="lead"><ContactContent /></p>
                <p className="lead">
                  <a target="_blank" href="https://www.facebook.com/katiethigpen"><i className="icon-facebook-squared" /></a>
                  <a target="_blank" href="https://www.linkedin.com/pub/katie-thigpen/81/159/1ba"><i className="icon-linkedin-squared" /></a>
                </p>
              </div>
              <div id="map-container" className="col-lg-6  col-sm-6">
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p className="copyright text-muted small"><FooterContent /></p>
              </div>
            </div>
          </div>
        </footer>

      </>
    )
  }
}