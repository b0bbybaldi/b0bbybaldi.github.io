import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    return (
      <React.Fragment>
      var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <section id="cta" className="grey-section">
          <div className="row cta-content">
            <div className="col-twelve section-ads">  
              <h2 className="h01"><a href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT">Styleshout Recommends Dreamhost.</a></h2>
              <p className="lead">
                Looking for an awesome and reliable webhosting? Try <a href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT"><span>DreamHost</span></a>.
                Get <span>$50 off</span> when you sign up with the promocode <span>styleshout</span>. 
                {/* Simply type the promocode in the box labeled “Promo Code” when placing your order. */}  
              </p>
              <div className="action">
                <a className="button button-primary large" href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT">Sign Up Now</a>
              </div>          
            </div>
          </div> {/* /cta-content */}
        </section> {/* /cta */} 
        {/* services Section
   ================================================== */}
        <section id="services">
          <div className="overlay" />
          <div className="row section-intro">
            <div className="col-twelve">
              <h5>Services</h5>
              <h1>What Can I Do For You?</h1>
              <p className="lead">Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.</p>
            </div>      
          </div> {/* /section-intro */}
          <div className="row services-content">
            <div id="owl-slider" className="owl-carousel services-list">
              <div className="service"> 
                <span className="icon"><i className="icon-earth" /></span>            
                <div className="service-content"> 
                  <h3>Webdesign</h3>
                  <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                  </p>
                </div>             
              </div> {/* /service */}
              <div className="service"> 
                <span className="icon"><i className="icon-window" /></span>                          
                <div className="service-content"> 
                  <h3>Web Development</h3>  
                  <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                  </p>
                </div>                            
              </div> {/* /service */}
              <div className="service">
                <span className="icon"><i className="icon-paint-brush" /></span>                
                <div className="service-content">
                  <h3>Branding</h3>
                  <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                  </p> 
                </div>                               
              </div> {/* /service */}
              <div className="service">
                <span className="icon"><i className="icon-toggles" /></span>                
                <div className="service-content">
                  <h3>UI/UX Design</h3>
                  <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                  </p> 
                </div>                
              </div> {/* /service */}
              <div className="service">
                <span className="icon"><i className="icon-image" /></span>              
                <div className="service-content">
                  <h3>Graphics Design</h3>
                  <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                  </p> 
                </div>                 
              </div> {/* /service */}
              <div className="service">
                <span className="icon"><i className="icon-chat" /></span>                
                <div className="service-content">
                  <h3>Consultancy</h3>
                  <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                  </p> 
                </div>                 
              </div> {/* /service */}
            </div> {/* /services-list */}
          </div> {/* /services-content */}
        </section> {/* /services */}  
        {/* stats Section
   ================================================== */}
        <section id="stats" className="count-up">
          <div className="row">
            <div className="col-twelve">
              <div className="block-1-6 block-s-1-3 block-tab-1-2 block-mob-full stats-list">
                <div className="bgrid stat">
                  <div className="icon-part">
                    <i className="icon-pencil-ruler" />
                  </div>
                  <h3 className="stat-count">
                    1500
                  </h3>
                  <h5 className="stat-title">
                    Projects Completed
                  </h5>
                </div> {/* /stat */}          
                <div className="bgrid stat">
                  <div className="icon-part">
                    <i className="icon-users" />
                  </div>
                  <h3 className="stat-count">
                    900
                  </h3>
                  <h5 className="stat-title">
                    Happy Clients
                  </h5>
                </div> {/* /stat */}
                <div className="bgrid stat">
                  <div className="icon-part">
                    <i className="icon-badge" />
                  </div>
                  <h3 className="stat-count">
                    200
                  </h3>
                  <h5 className="stat-title">
                    Awards Received
                  </h5>
                </div> {/* /stat */}                  
                <div className="bgrid stat">
                  <div className="icon-part">
                    <i className="icon-light-bulb" />
                  </div>
                  <h3 className="stat-count">
                    120
                  </h3>
                  <h5 className="stat-title">
                    Crazy Ideas
                  </h5>
                </div> {/* /stat */}
                <div className="bgrid stat">
                  <div className="icon-part">
                    <i className="icon-cup" />
                  </div>
                  <h3 className="stat-count">
                    1500
                  </h3>
                  <h5 className="stat-title">
                    Coffee Cups
                  </h5>
                </div> {/* /stat */}
                <div className="bgrid stat">
                  <div className="icon-part">
                    <i className="icon-clock" />
                  </div>
                  <h3 className="stat-count">
                    7200
                  </h3>
                  <h5 className="stat-title">
                    Hours
                  </h5>
                </div> {/* /stat */}
              </div> {/* /stats-list */}
            </div> {/* /twelve */}
          </div> {/* /row */}
        </section> {/* /stats */}
      </div>
    );
  }
});
      
      </React.Fragment>
    );
  }
}