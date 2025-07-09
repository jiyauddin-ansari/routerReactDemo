import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
const Footer = ({company}) => {
  return (
    <>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<footer className="section footer-classNameic context-dark bg-image" style={{background: '#2d3246'}}>
        <div className="container">
          <div className="row row-30">
            <div className="col-md-4 col-xl-5">
              <div className="pr-xl-4"><Link to='/' className="brand"><img className="brand-logo-light" src="/tata.jpg" alt="Tata logo" width="140" height="50"/></Link>
                <p>We are devloping steel, iron ore, coal, automobiles and many more business consulting, and marketing.</p>

                <p className="rights"><span>©  </span><span className="copyright-year">2025</span><span> </span><span>{company}</span><span>. </span><span>All Rights Reserved.</span></p>
              </div>
            </div>
            <div className="col-md-4">
              <h5>Contacts</h5>
              <dl className="contact-list">
                <dt>Address:</dt>
                <dd>Main gate Sakchi, Jamshedpur</dd>
              </dl>
              <dl className="contact-list">
                <dt>email:</dt>
                <dd><a href="mailto:#">tatasteel@gmail.com</a></dd>
              </dl>
              <dl className="contact-list">
                <dt>phones:</dt>
                <dd><Link to='https://www.tatasteel.com'>Tata Steel</Link></dd>
              </dl>
            </div>
            <div className="col-md-4 col-xl-3">
              <h5>Links</h5>
              <ul className="nav-list">
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">Pricing</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row no-gutters social-container">
          <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-facebook"></span><span>Facebook</span></a></div>
          <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-instagram"></span><span>instagram</span></a></div>
          <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-twitter"></span><span>twitter</span></a></div>
          <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-youtube-play"></span><span>google</span></a></div>
        </div>
      </footer>
    </>
  )
}

export default Footer
