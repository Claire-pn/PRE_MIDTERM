import React,{Component} from 'react';

 class Dashboard extends Component{
     constructor(props){
         super(props)
     }
     render(){
         return(
            <center><div>
                 <h1>HELLO
                 <div>ANYEONG , {this.props.name}</div></h1>
            </div></center>
         )
     }
 }
 export default Dashboard;



