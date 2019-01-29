import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions through email or social media.
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h3>
                  <a href="mailto=rcbaldizon@gmail.com">Send Me an Email !</a>
                </h3>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}