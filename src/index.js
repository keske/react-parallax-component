import React, { Component } from 'react';

// Component styles
import styles from './styles';

export default class ParallaxComponent extends Component {

  static propTypes = {
    children: React.PropTypes.object,
    speed: React.PropTypes.number,

    // Style
    width: React.PropTypes.string,
    height: React.PropTypes.string,
    top: React.PropTypes.string,
    left: React.PropTypes.number,
    right: React.PropTypes.string,
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
    return (
      <div
        className={styles}
        ref="parallaxElement"
        style={{...this.props}}
      >
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
