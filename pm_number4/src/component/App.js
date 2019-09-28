import React, {Component} from 'react';
import BusinessCard from './BusinessCard';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
        Fname: '',
        Lname: '',
        address:'',
        email:'',
        Pnumber:'',
        register:false,
        
    }
}

handleRegister = (e) => {
    const { Fname,Lname,address,email,Pnumber} = this.state;
      if(Fname === "" || Lname === "" || address === "" || email === "" || Pnumber === ""){
        this.setState({ register: false });
        alert("All field must be requiered");
      }else{
        this.setState({register : true});
      }
  }
render() {
    const {register} = this.state;
    if (!register) {
        return (
            <center><div className = "center">
                <h1>REGISTER FORM</h1>
               First Name : <input type="text" placeholder="First name" onChange = {e => this.setState({Fname : e.target.value})}></input><br></br>
               <br></br>
               Last Name : <input type="text" placeholder="Last name" onChange = {e => this.setState({Lname : e.target.value})}></input><br></br>
               <br></br>
               Address :  <input type="text" placeholder="Address" onChange = {e => this.setState({address : e.target.value})}></input><br></br>
               <br></br>
               Email :  <input type="text" placeholder="Email" onChange = {e => this.setState({email : e.target.value})}></input><br></br>
               <br></br>
               Phone number :  <input type="text" placeholder="Phone Number" onChange = {e => this.setState({Pnumber : e.target.value})}></input><br></br>
               <br></br>
                <button onClick={e => this.handleRegister(e)}>Register</button>
                <br></br>
                <br></br>
            </div></center>
        )
    }
    else {
        return(
            <div>
            <BusinessCard Fname={this.state.Fname} Lname={this.state.Lname} address={this.state.address} email ={ this.state.email} Pnumber={this.state.Pnumber} />
            </div>
        )
    }
}
}

export default App;
