import React from 'react'
import Link from 'gatsby-link'
import { elastic as Menu } from 'react-burger-menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Me from '../me.jpg'

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const SecondPage = () => (
  <div>
    <Menu className="menu-navigation" styles={ styles }>
          <ul className="menu">
            <li className="menu-item">
              <div className="tile tile-centered">
                <div className="tile-icon"><img className="avatar" src={Me} alt="Fabian Soosaithasan Avatar" /></div>
                <div className="tile-content">Fabian Soosaithasan</div>
              </div>
            </li>
            <li className="divider"></li>
            <li className="menu-item">
              <div className="menu-badge">
                <label className="label label-primary"><FontAwesomeIcon icon="home" /></label>
              </div>
              <Link to="/" activeClassName="active">Homepage</Link>
            </li>
            <li className="menu-item">
              <div className="menu-badge">
              {/* <Link to="/page-2/" activeClassName="active">test</Link> */}
                <label className="label label-primary"><FontAwesomeIcon icon="id-card" /></label>
              </div>
              <Link to="/aboutme" activeClassName="active">About Me</Link>
            </li>
            <li className="menu-item">
              <div className="menu-badge">
                <label className="label label-primary"><FontAwesomeIcon icon="hand-holding-heart" /></label>
              </div>
              <a href="#menus">Volunteering Program</a>
            </li>
            <li className="menu-item">
              <div className="menu-badge">
                <label className="label label-primary"><FontAwesomeIcon icon="globe-americas" /></label>
              </div>
              <a href="#menus">World Horizon</a>
            </li>

            {/* <details className="accordion" closed>
              <summary className="accordion-header">
                <i className="icon icon-arrow-right mr-1"></i>
                Title
              </summary>
              <div className="accordion-body" style={{display: 'flex', flexWrap: 'nowrap'}}>
                <div>Vanakam enthe peeeer Fabi</div>
              </div>
            </details> */}
          </ul>
        </Menu>
        {/* <nav style={{display:'flex', flexDirection:'column'}}>
          <a id="about" className="bm-item" href="/about">About Me</a>
          <a id="contact" className="bm-item" href="/contact">Blog</a>
          <a className="bm-item--small" href="">Contact</a>
          <a id="home" className="bm-item" href="/">World Horizon</a>
        </nav> */}
      <main id="page-wrap">
          <div>
          <h1>Hi from the second page</h1>
          <p>Welcome to page 2</p>
          <Link to="/">Go back to the homepage</Link>
          </div>
      </main>
  </div>
)

export default SecondPage
