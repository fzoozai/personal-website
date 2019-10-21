import React, { Component } from 'react'
import Parallax from 'react-springy-parallax'
import Background from '../timeline-bg.png'

class ParallaxView extends Component {
    render() {
        const styles = {
            fontFamily: 'Menlo-Regular, Menlo, monospace',
            fontSize: 14,
            lineHeight: '10px',
            color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }
        return (
            <Parallax ref="parallax" pages={3}>
                <Parallax.Layer offset={0} speed={1} style={{ backgroundImage: `url(${Background})`, backgroundRepeat: "repeat center center fixed" }} />
                <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: "#87BCDE" }} />
                <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

                <Parallax.Layer
                    offset={0}
                    speed={0.5}
                    onClick={() => this.refs.parallax.scrollTo(1)}
                    style={styles}
                >
                     Click me.
                </Parallax.Layer>
                <Parallax.Layer
                    offset={1}
                    speed={-0.1}
                    style={styles}
                    onClick={() => this.refs.parallax.scrollTo(2)}>
                    Another page ...
                </Parallax.Layer>

                <Parallax.Layer
                    offset={2}
                    speed={0.5}
                    style={styles}
                    onClick={() => this.refs.parallax.scrollTo(0)}>
                    The end.
                </Parallax.Layer>
            </Parallax>
        )
    }
}

export default ParallaxView
