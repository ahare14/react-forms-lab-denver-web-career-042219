import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" onChange={event => this.handleChange(event)} value={this.state.message} id="message" />
        {this.props.maxChars - this.state.message.length}

      </div>
    );
  }
}

export default TwitterMessage;
