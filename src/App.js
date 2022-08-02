import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
//import Data from './Data';
class App extends React.Component {
  constructor(props)
    {
      super(props);
      this.state={
        Email : '',
        Username : '',
        msg : '',
      };
      this.addFormData = this.addFormData.bind(this);
    }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  addFormData(evt)
    {
      evt.preventDefault();
      const fd = new FormData();
      fd.append('myUsername', this.state.Username);
      fd.append('myEmail', this.state.Email);
      if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/i.test(this.state.Email)){
        if(/^[a-zA-Z]+$/i.test(this.state.Username)){
       axios.post('http://localhost/savedata.php',fd )
      // .then(res => res.json())
       .then((result) => {
        this.setState({
          Email : '',
          Username : '',
          msg : result.data.data,
        })
        console.log(result.data.data);
        console.log(result.data);
      })
      
  }
  else{
    this.setState({
      msg :'USERNAME CONTAIO ONLY ALPHABETS '
    })
  }
  }
  else{
    this.setState({
      msg :'WRONG E-mail Address '
    })
  }
  }
    
    render() {
   
    return (
      <div className="maincontainer">
         <h1 className="mr-5 ml-5 mt-5">MYFORM DEMO</h1>
        <div className="container mb-5 mt-5 text-left">
        <p>{this.state.msg}</p>
        <form>
        <div className="form-group">
        <input type="email" className="form-control" id="Email" name="Email" aria-describedby="emailHelp" placeholder="Enter email"  onChange={this.handleChange} value={this.state.Email} />
        </div>
        <div className="form-group">
        <input type="text" className="form-control" id="Username" name="Username" placeholder="Enter Username" onChange={this.handleChange} value={this.state.Username}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.addFormData}>Submit</button>
      </form>
</div>
      </div>
)
};
}
export default App;