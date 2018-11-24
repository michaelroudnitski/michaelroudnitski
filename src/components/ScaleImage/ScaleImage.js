import React from 'react';
import style from './ScaleImage.scss';

export default class ScaleImage extends React.Component {

  constructor(props) {
    super(props);
    if (!props.images) return null;
    this.state = {
      image: props.images[0]
    }
  }

  componentDidMount() {
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
  }
  componentWillUnmount() {
    document.documentElement.style.overflow = 'scroll';
    document.body.scroll = "yes";
  }

  render() {
    return (
      <div>
        <div id="fullscreen">
          <img src={this.state.image} />
        </div>
      </div>
    )
  }
}