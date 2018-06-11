import React, { Component } from "react";

class Dropdow extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
  }

  toggleState() {
    this.setState({ isOpened: !this.state.isOpened });
  }

  render() {
    console.log(this.state.isOpened);
    let dropdownText;
    if (this.state.isOpened) {
      dropdownText = <div>jajdjadsjadfs lgasd; a;lgfj ;dlg ;lfs</div>;
    }
    return (
      <div onClick={this.toggleState.bind(this)}>
        Hello 123123123
        {dropdownText}
      </div>
    );
  }
}

export default Dropdow;
