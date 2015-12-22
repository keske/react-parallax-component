import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import R from 'ramda';

// Lib
import ParallaxComponent from '../';

// Component styles
import styles from './styles';

// Images
const images = R.range(1, 3 + 1).map(index => require(`./images/${index}.jpg`));

export default class ExamplePage extends Component {
  render() {

    const wrap = {
      height: window.innerHeight * 77,
    };

    return (
      <div className={`${styles}`}
           style={wrap}>

        <ParallaxComponent speed="0.03"
                           width="40%"
                           top="10%"
                           left="10%">
          <img src={images[0]} />
        </ParallaxComponent>

        <ParallaxComponent speed="0.05"
                           width="40%"
                           top="10%"
                           left="50%">
          <img src={images[1]} />
        </ParallaxComponent>

        <ParallaxComponent speed="-0.08"
                           width="40%"
                           top="55%"
                           left="10%">
          <img src={images[1]} />
        </ParallaxComponent>

        <ParallaxComponent speed="-0.01"
                           width="40%"
                           top="55%"
                           left="50%">
          <img src={images[0]} />
        </ParallaxComponent>

      </div>
    );
  }
}

ReactDOM.render(
  <ExamplePage />,
  document.getElementById('root')
);
