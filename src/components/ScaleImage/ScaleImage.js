import React from 'react';
import style from './ScaleImage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

export default class ScaleImage extends React.Component {

  constructor(props) {
    super(props);
    if (!props.images) return null;
    this.imageIndex = 0;
    this.state = {
      image: props.images[0]
    }
    this.arrowPress = this.arrowPress.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
  }

  nextImage() {
    this.imageIndex++;
    if (this.imageIndex >= this.props.images.length) this.imageIndex = 0;
    this.setState(() => ({
      image: this.props.images[this.imageIndex]
    }))
  }

  previousImage() {
    this.imageIndex--;
    if (this.imageIndex <= -1) this.imageIndex = this.props.images.length - 1;
    this.setState(() => ({
      image: this.props.images[this.imageIndex]
    }))
  }

  arrowPress(event) {
    if (event.keyCode === 39) { // right arrow
      this.nextImage();
    } else if (event.keyCode === 37) { // left arrow
      this.previousImage();
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
          <div className="row image-container">
            <FontAwesomeIcon icon={faCaretLeft} id="left-arrow" onClick={this.previousImage} />
            <img src={this.state.image} />
            <FontAwesomeIcon icon={faCaretRight} id="right-arrow" onClick={this.nextImage} />
          </div>
          <h3 className="image-indexer">{this.imageIndex + 1}/{this.props.images.length}</h3>
        </div>
      </div>
    )
  }
}