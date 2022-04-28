import React from 'react';
import axios from 'axios';

function WelcomeTitleDiv() {
  axios({
    method:'get',
    url:'https://kls-hospital-college-project.herokuapp.com/StartServer',
    data: {
            }
    })
    .then((response)=> {
    }, (error) => {
    });
  return <div className="WelcomeTitleDiv">
      <div className='WelcomeTitleDivContent'>KLS HOSPITAL MANAGEMENT SYSTEM</div>
  </div>;
}

export default WelcomeTitleDiv;
