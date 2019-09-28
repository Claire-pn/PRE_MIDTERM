import React ,{Component} from 'react';
import Dashboard from './Dashboard';



class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            user:false,
            name:'claire',
            password : "claire123",
            userN : "",
            userP : ""
        }
    }
    loginHandler(e){
        e.preventDefault();
        if(this.state.name === this.state.userN && this.state.password === this.state.userP) {
            this.setState({user : true});
        }else {
            this.setState({user : false});
        }
    }

    render(){
        if(!this.state.user){
            return(
                <center><div>
                    <form><h1>LOG IN</h1>
                        <input type="text" placeholder="Username" onChange={(e)=> this.setState({userN : e.target.value})}/>
                        <input type="password" placeholder="Password" onChange = {e => this.setState({userP : e.target.value})}/>
                        <></>
                        <button onClick={(e)=>this.loginHandler(e)}>Login</button>
                    </form>
                </div>
                </center>
            );
        }
        return(
                <Dashboard name={this.state.name}/>
            );
         
        
        }
        }
    


export default Login;

