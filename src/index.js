import React, { Component } from 'react';

// Component styles
import styles from './styles';

const DEFAULT_SPEED = '-0.03';

export default class ParallaxComponent extends Component {

  static propTypes = {
    children: React.PropTypes.object,
    speed: React.PropTypes.string,

    // Style
    width: React.PropTypes.string,
    height: React.PropTypes.string,
    top: React.PropTypes.string,
    left: React.PropTypes.string,
  }

  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  getTop() {
    const { top = 0 } = this.props;

    return top.indexOf('%') > -1
      ? window.innerHeight * (top.replace('%', '') / 100)
      : +top;
  }

  handleScroll() {
    const {
      speed = DEFAULT_SPEED,
    } = this.props;

    const top = this.getTop();

    // Top positons
    const pageTop = window.pageYOffset;
    const elemTop = this._parallaxElement.offsetTop;
    const newTop = (((pageTop - elemTop) * (+speed * -1)) + top).toFixed(0);

    // Set new top position
    this._parallaxElement.style.top = `${newTop}px`;
  }

  render() {
    const {
      width = 'auto',
      height = 'auto',
      top = '0',
      left = '0',
    } = this.props;

    return (
      <div className={`${styles}`}
           ref={(c) => this._parallaxElement = c}
           style={{
             width,
             height,
             top,
             left,
           }}>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
