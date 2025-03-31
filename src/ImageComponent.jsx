import { Component } from "react";
class ImageComponent extends Component {
  render() {
    return (
      <div>
        <img
          src={this.props.foto}
          alt={this.props.alt}
          className={this.props.className}
        />
        ;
      </div>
    );
  }
}
export default ImageComponent;
