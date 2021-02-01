import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src="./images/kiran1.jpg" alt="kiran" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>Computer Science Undergrad at School Of Engineering, CUSAT. I'm from Kerala,India. I'm a student developer and an organiser for different tech events.</p>
            <div className="row">
               
               <div className="columns download">
                  <p>
                     <a href="./resume/Kiran_PK_Resume.pdf" className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;