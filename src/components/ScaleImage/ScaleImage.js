import React from "react";
import "./ScaleImage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default class ScaleImage extends React.Component {
  constructor(props) {
    super(props);
    if (!props.images) return null;
    this.imageIndex = 0;
    this.state = {
      image: props.images[0],
      imageStatus: "loading"
    };
    this.arrowPress = this.arrowPress.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
  }

  nextImage() {
    this.imageIndex++;
    if (this.imageIndex >= this.props.images.length) this.imageIndex = 0;
    else this.handleImageIncoming();
    this.setState(() => ({
      image: this.props.images[this.imageIndex]
    }));
  }

  previousImage() {
    this.imageIndex--;
    if (this.imageIndex <= -1) this.imageIndex = this.props.images.length - 1;
    else this.handleImageIncoming();
    this.setState(() => ({
      image: this.props.images[this.imageIndex]
    }));
  }

  arrowPress(event) {
    if (event.keyCode === 39) {
      // right arrow
      this.nextImage();
    } else if (event.keyCode === 37) {
      // left arrow
      this.previousImage();
    }
  }

  handleImageLoaded() {
    this.setState({ imageStatus: "loaded" });
  }

  handleImageIncoming() {
    this.setState({ imageStatus: "loading" });
  }

  componentDidMount() {
    document.addEventListener("keydown", this.arrowPress, false);
    document.documentElement.style.overflow = "hidden";
    document.body.scroll = "no";
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.arrowPress, false);
    document.documentElement.style.overflow = "auto";
    document.body.scroll = "yes";
  }

  render() {
    return (
      <div>
        <div id="fullscreen">
          <div className="row image-container">
            <FontAwesomeIcon
              icon={faCaretLeft}
              className="arrow left"
              onClick={this.previousImage}
            />
            {this.state.imageStatus === "loading" && (
              <div className="loader"></div>
            )}
            <img
              src={this.state.image}
              onLoad={this.handleImageLoaded.bind(this)}
            />
            <FontAwesomeIcon
              icon={faCaretRight}
              className="arrow right"
              onClick={this.nextImage}
            />
          </div>
          <div className="row navigation-area">
            <div className="col left" onClick={this.previousImage}></div>
            <div className="col right" onClick={this.nextImage}></div>
          </div>
          <h3 className="image-indexer">
            {this.imageIndex + 1}/{this.props.images.length}
          </h3>
        </div>
      </div>
    );
  }
}
