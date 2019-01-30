import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h2><span></span></h2>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  {
                    resumeData.testimonials && resumeData.testimonials.map((item)=>{
                      return(
                        <li>
                          <blockquote>
                          <h1>
                            <a href="https://medium.com/@b0bbybaldi" target="_blank" rel="noopener noreferrer">
                            Check Out my Medium Blog !
                            </a>
                          </h1>
                          </blockquote>
                        </li>
                      )
                    })
                  }
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>
        );
  }
}