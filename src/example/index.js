import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Lib
import ParallaxComponent from '../';

// Component styles
import styles from './styles';

const WORD = 'AWESOME REACT';

export default class ExamplePage extends Component {
  render() {

    const wrap = {
      height: window.innerHeight * 10,
    };

    return (
      <div className={styles}
           style={wrap}>

      {
        WORD.split('').map((letter, index) =>
          <ParallaxComponent speed={Math.floor(Math.random() * (2 - 0) + 0) === 1 ? '-' : '' + Math.random() * (0.1 - 0) + 0}
                             top="40%"
                             left={(index + 1) * 80}
                             key={index}>
            <span className="letter">
              {letter}
            </span>
          </ParallaxComponent>
        )
      }

      </div>
    );
  }
}

ReactDOM.render(
  <ExamplePage />,
  document.getElementById('react-parallax-component-example')
);
