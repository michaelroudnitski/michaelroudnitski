import React from 'react';
import style from './ScaleImage.scss';

export default class ScaleImage extends React.Component {

  constructor(props) {
    super(props);
    if (!props.images) return null;
    this.imageIndex = 0;
    this.state = {
      image: props.images[0]
    }
    this.arrowPress = this.arrowPress.bind(this);
  }

  arrowPress(event) {
    if (event.keyCode === 39) { // right arrow
      this.imageIndex++;
      if (this.imageIndex >= this.props.images.length) this.imageIndex = 0;
      this.setState(() => ({
        image: this.props.images[this.imageIndex]
      }))
    } else if (event.keyCode === 37) { // left arrow
      this.imageIndex--;
      if (this.imageIndex <= -1) this.imageIndex = this.props.images.length - 1;
      this.setState(() => ({
        image: this.props.images[this.imageIndex]
      }))
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.arrowPress, false);
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.arrowPress, false);
    document.documentElement.style.overflow = 'scroll';
    document.body.scroll = "yes";
  }

  render() {
    return (
      <div>
        <div id="fullscreen">
          <img src={this.state.image} />
          <h3 className="image-indexer">{this.imageIndex+1}/{this.props.images.length}</h3>
        </div>
      </div>
    )
  }
}