import React, { Component } from 'react';
import eye from './image/visible--v2.gif';
class SH extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      pasword:''
    };
    this.toggleShow = this.toggleShow.bind(this);
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
    })
  }
    toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }
    render() {
   //var a = this.state.pasword;
    //console.log(this.props.children);
    return (
      <div>
        <input type={this.state.hidden ? 'password' : 'text'} size="23"placeholder="ENTER YOUR PASSWORD HERE" onChange={this.handleChange} name="pasword" id="pasword" pasword={this.state.pasword}/>
        <button onClick={this.toggleShow} className="blog"><img src={eye} alt="loading..." width="20px"/></button>
        <input type="hidden" value={this.state.pasword}></input>
      </div>
    );
  }
}

export default SH;