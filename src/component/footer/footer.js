import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <span>
        inshorts Clone made by - Ritesh Rana
        </span>        
      </div>
      <hr style={{width:'90%'}}/>
      <div className='logo'>
      <a href=''>
      <i class="fa-brands fa-instagram fa-2x"></i>
      </a>
      <a href='https://www.linkedin.com/in/ritesh-rana-30a18b292/'>
      <i class="fa-brands fa-linkedin fa-2x"></i>
      </a>
      <a>
      <i class="fas fa-link fa-2x"></i>
      </a>
      </div>
    </div>
  )
}

export default Footer