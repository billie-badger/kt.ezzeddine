import React, { Component } from 'react'
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import gmail from '../assets/gmail.png';

export default class Contact extends Component {
  render() {
    return (
      <div className='contact'>
        <div className='contact-inner'>
          <a href='https://www.instagram.com/kt.ezzeddine/?hl=en' target='_blank' rel="noopener noreferrer">
            <div>
              <img src={instagram} alt='instagram' />
              <p>KT.EZZEDDINE</p>
            </div>
          </a>
          <a href='https://www.facebook.com/kt.ezzeddine' target='_blank' rel="noopener noreferrer">
            <div>
              <img src={facebook} alt='facebook' />
              <p>KT.EZZEDDINE</p>
            </div>
          </a>
          <a href='mailto:kt.ezzeddine@gmail.com' target='_blank' rel="noopener noreferrer">
            <div>
              <img src={gmail} alt='gmail' />
              <p>KT.EZZEDDINE@GMAIL.COM</p>
            </div>
          </a>
        </div>
      </div>
    )
  }
}
