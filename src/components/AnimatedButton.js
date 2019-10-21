import React from 'react';
import { bounce, bounceInDown, tada, wobble} from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Link from 'gatsby-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = {
  bounce: {
    animationDuration: '4s',
    animationName: Radium.keyframes(wobble, 'wobble')
  }
}

class Button extends React.Component {
  render() {
      return (
        <StyleRoot>
        <div className="test" style={styles.bounce}>
            <div style={{fontSize: '40px', color: 'white'}}>WINDY CITY <FontAwesomeIcon icon="paper-plane" size="1x" /></div>
            {/* <FontAwesomeIcon icon="angle-double-down" size="5x" color="rgb(245, 245, 245, 0.8)"/> */}
        </div>
        </StyleRoot>
      );
  }
}

export default Button