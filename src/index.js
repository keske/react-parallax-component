import React, { Component } from 'react';
import throttle from 'lodash.throttle';

// Component styles
import styles from './styles';

export default class ParallaxComponent extends Component {

  static propTypes = {
    children: React.PropTypes.node.isRequired,
    speed: React.PropTypes.number,

    // Style
    style: React.PropTypes.object,
    className: React.PropTypes.string,
    width: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    height: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    top: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    left: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    right: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
  }

  static defaultProps = {
    width: 'auto',
    height: 'auto',
    top: 'inherit',
    left: 'inherit',
    right: 'inherit',
    speed: -0.03,
  }

  constructor(props) {
    super(props);

    this.handleScroll = throttle(this.handleScroll.bind(this), 10);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  getTop() {
    const { top = 0 } = this.props;
    const topString = top + '';

    return topString.indexOf('%') > -1
      ? window.innerHeight * (topString.replace('%', '') / 100)
      : parseInt(top, 10);
  }

  handleScroll() {
    const { speed } = this.props;

    const top = this.getTop();

    // Top positons
    const pageTop = window.pageYOffset;
    const newTop = (top - (pageTop * speed));

    // Set new top position
    this.refs.parallaxElement.style.top = `${newTop}px`;
  }

  render() {
    const { width, height, left, right, top, speed, style, children, className, ...rest } = this.props;
    const ownStyle = {
      width,
      height,
      left,
      right,
    };
    return (
      <div
        className={`${styles} ${className}`}
        ref="parallaxElement"
        style={{ ...style, ...ownStyle }}
        {...rest}
      >
          {children}
      </div>
    );
  }
}
