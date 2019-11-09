import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/site-title-white.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'
import youtube from '../img/social/youtube.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered" style={{marginBottom: 0}}>
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '8em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter" >
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              {/* <div className="column is-6">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="navbar-item">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div> */}
              <div className="column is-12 social">
                <a title="facebook" href="https://facebook.com/runningtales">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com/running_tales">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="youtube" href="https://www.youtube.com/channel/UCt3hzD0JOxN_jwB02NQH_nw">
                  <img
                    src={youtube}
                    alt="Youtube"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
