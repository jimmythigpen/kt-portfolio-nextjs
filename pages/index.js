import Head from "next/head"
import { Component } from 'react'
import { attributes as headerData } from '../content/header.md';
import { attributes as sectionData } from '../content/section.md';
import { attributes as readsandlinksData } from '../content/readsandlinks.md';

export default class Home extends Component {
  render() {
    const { image, title, subtitle } = headerData;

    console.log('sectionData:', sectionData);
    console.log('readsandlinksData:', readsandlinksData);

    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          <title>Katie Thigpen | Professional Trombonist</title>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="alternate" href="https://www.katiethigpen.com/" hreflang="x-default" />
          <meta name="description" content="Washington, DC area Performer &amp; Music Educator." />
          <meta name="keywords" content="katie,thigpen,trombone,music,teacher,lessons,washington" />
          {/* <link href="bower_components/bootstrap-sass/assets/stylesheets/main.css" rel="stylesheet" /> */}
          <link href="https://fonts.googleapis.com/css?family=Megrim" rel="stylesheet" type="text/css"></link>
        </Head>
        <nav className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
          <div className="container topnav">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div className="navbar-brand topnav elevator-button">Katie Thigpen</div>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#teaching">Teaching</a>
                </li>
                <li>
                  <a href="#performing">Performing</a>
                </li>
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
        <a name="about" />
        <div className="content-section-b">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-push-6  col-sm-6">
                <hr className="section-heading-spacer" />
                <div className="clearfix" />
                <h2 className="section-heading">About</h2>
                <p className="lead">Katie Thigpen, native of Charleston, SC, is a freelance trombonist and educator in the Washington, DC area. She received her Doctor of Musical Arts and Master of Music degrees from the University of Cincinnati, College-Conservatory of Music where she studied with Tim Anderson. She earned her Bachelor of Music degree in music education from the University of South Carolina where she studied with Brad Edwards and received the Robert Van Doren Award for Most Outstanding Senior in music education. Most recently she has studied with Per Brevig, faculty at The Juilliard School and retired principal trombonist of the Metropolitan Opera Orchestra, and Craig Mulcahy, principal trombonist of the National Symphony Orchestra and faculty at the University of Maryland.</p>
              </div>
              <div className="col-lg-6 col-sm-pull-6  col-sm-6">
                <img className="img-responsive" src="bower_components/bootstrap-sass/assets/img/about.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <a name="teaching" />
        <div className="content-section-a">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <hr className="section-heading-spacer" />
                <div className="clearfix" />
                <h2 className="section-heading">Teaching</h2>
                <p className="lead">As an educator Dr. Thigpen maintains a studio of private students in the metropolitan DC area. She teaches low brass students at DeMatha Catholic High School, Holy Trinity Episcopal Day School, International School of Music, and with the DC Youth Orchestra Program. During the summer Dr. Thigpen is on faculty at Blue Lake Fine Arts Camp in Twin Lake, Michigan. Before joining the faculty at Blue Lake she was the director of their middle school camp, Camp Bernstein, and also worked as a camp counselor. Next summer will be her tenth at Blue Lake.</p>
              </div>
              <div className="col-lg-6 col-sm-6">
                <img className="img-responsive" src="bower_components/bootstrap-sass/assets/img/teaching.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <a name="performing" />
        <div className="content-section-b">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-push-6  col-sm-6">
                <hr className="section-heading-spacer" />
                <div className="clearfix" />
                <h2 className="section-heading">Performing</h2>
                <p className="lead">Dr. Thigpen performs regularly with various chamber groups and orchestras in the DC area. She has performed with the National Philharmonic, Roanoke Symphony Orchestra, Lancaster Symphony Orchestra, Cincinnati Symphony Orchestra, Cincinnati Ballet Orchestra, Dayton Philharmonic Orchestra, West Virginia Symphony, York Symphony Orchestra, Amadeus Orchestra, Great Noise Ensemble, Brass of the Potomac and the Ars Nova Chamber Orchestra. As a fellowship recipient she spent two summers at the Aspen Music Festival and School where she performed under the baton of several notable conductors such as David Robertson, Larry Rachleff, Leonard Slatkin, Nicholas McGegan, and Robert Spano. As a featured soloist with the Blue Lake Fine Arts Camp Staff Band in 2009 and 2010 Dr. Thigpen performed Paul Creston's Fantasy for Trombone and William Goldstein's Colloquy. In 2013 she won the Eastern Trombone Workshop National Solo Competition.</p>
              </div>
              <div className="col-lg-6 col-sm-pull-6  col-sm-6">
                <img className="img-responsive" src="bower_components/bootstrap-sass/assets/img/performing.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <a name="links" />
        <div className="content-section-a">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <hr className="section-heading-spacer" />
                <div className="clearfix" />
                <h2 className="section-heading">Interesting reads</h2>
                <dl className="dl-horizontal links">
                  <dd><a href="http://www.huffingtonpost.com/alan-fletcher/is-this-the-right-time-to_1_b_8576686.html">Is This the Right Time to Study Music?</a></dd>
                  <dd><a href="http://www.tobyoft.com/featured-a-tale-of-two-auditions/">A Tale of Two Auditions</a></dd>
                  <dd><a href="http://arbanmethod.com/wyntons-twelve-ways-to-practice/">Wynton's Twelve Ways to Practice</a></dd>
                  <dd><a href="http://www.tobyoft.com/adam-rainey-audition-sucess">Adam Rainey Audition Success</a></dd>
                  <dd><a href="http://williamjamespercussion.com/2015/03/22/12-thoughts-from-the-other-side-of-the-screen/">12 Thoughts from the Other Side of the Screen</a></dd>
                  <dd><a href="http://www.andrewhitz.com/blog/2012/09/11/practicing-summed-up-in-6-sentences-by-doug-yeo">Practicing Summed Up in 6 Sentences by Doug Yeo</a></dd>
                  <dd><a href="http://www.juilliard.edu/journal/1509/practicehacks">3 Practice Hacks Boost Learning</a></dd>
                </dl>
              </div>
              <div className="col-lg-6 col-sm-6">
                <hr className="section-heading-spacer" />
                <div className="clearfix" />
                <h2 className="section-heading">Useful Links</h2>
                <dl className="dl-horizontal links">
                  <dd><a href="http://www.sc.edu/study/colleges_schools/music/">University of South Carolina School of Music</a></dd>
                  <dd><a href="http://ccm.uc.edu/">University of Cincinnati, College-Conservatory of Music</a></dd>
                  <dd><a href="http://www.bluelake.org/">Blue Lake Fine Arts Camp</a></dd>
                  <dd><a href="http://www.aspenmusicfestival.com/">Aspen Music Festival &amp; School</a></dd>
                  <dd><a href="http://www.trombone.net/">International Trombone Association</a></dd>
                  <dd><a href="http://www.sai-national.org/home/">Sigma Alpha Iota</a></dd>
                  <dd><a href="http://myiwbc.org/">International Women’s Brass Conference</a></dd>
                  <dd><a href="http://www.lastrowmusic.com/">Last Row Music</a></dd>
                  <dd><a href="https://www.musicalchairs.info/">Musical Chairs</a></dd>
                  <dd><a href="http://www.bulletproofmusician.com/">Bullet Proof Musician</a></dd>
                  <dd><a href="http://tromboneforum.org/">The Trombone Forum</a></dd>
                  <dd><a href="http://trombone.org/">Online Trombone Journal</a></dd>
                  <dd><a href="http://tromboneexcerpts.org/">Trombone Excerpts</a></dd>
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
                <p className="lead">For information regarding private lessons, performances, or other engagements please feel free to reach me at <a href="mailto:thigpen.katie@gmail.com">thigpen.katie@gmail.com</a></p>
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
                <p className="copyright text-muted small">Copyright © Katie Thigpen 2017. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </footer>

      </>
    )
  }
}