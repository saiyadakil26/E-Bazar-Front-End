import React, { Component} from 'react';
//import eye from './image/visible--v2.gif';
class Captch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      pasword:''
    };
    this.toggleShow = this.toggleShow.bind(this);
  }
  handleChange = () => {
        this.props.onChange(this.state);
  }
    toggleShow() {
      let captcha = new Array();
      var theCaptcha= '';
        for (let q = 0; q < 6; q++) {
          if (q % 2 == 0) {
            captcha[q] = String.fromCharCode(Math.floor(Math.random() * 26 + 65));
            
          } else {
            captcha[q] = Math.floor(Math.random() * 10 + 0);
          }
        }
          theCaptcha = captcha.join("");
          this.setState(
            {
              pasword:theCaptcha
            })
           // this.handleChange();
          return <>{`${theCaptcha}`} </>;
      }
      componentDidMount(){
        this.toggleShow();
      }
      componentDidUpdate(){
        this.handleChange();
      }
    render() {
    var a = this.state.pasword;
    if(1){
   // this.handleChange();
  }
     return (
      <div>
       <div id="captcha" className="captcha"  >{`${this.state.pasword}`}
       <button className="blog"  onClick={this.toggleShow}>change</button></div>
      </div>
    );
  }
}

export default Captch;