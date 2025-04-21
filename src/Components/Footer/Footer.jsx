import React from 'react';
import './footer.scss';
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin';
import Github from '@iconscout/react-unicons/icons/uil-github';

function Footer() {
  return (
    <>
      <div className="footer">
        <img src={Wave} alt="" style={{width:"100%"}} />
        <div className="f-content">
            <span>nishant.sons123@gmail.com</span>
            <div className="f-icons">
              <a href="https://instagram.com/nishuu.ydv" rel='noreferrer' target='_blank'>
                <Insta color='white' size='3rem'/>
              </a>
                <a href="https://www.linkedin.com/in/nishuuydv" rel='noreferrer' target='_blank'>
                <LinkedIn color='white' size='3rem'/>
                </a>
                <a href="https://www.github.com/nishuuydv" target='_blank' rel='noreferrer'>

                <Github color='white' size='3rem'/>
                </a>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
