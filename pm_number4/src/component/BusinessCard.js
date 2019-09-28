import React,{Component} from 'react';

 class BusinessCard extends Component{
     constructor(props){
         super(props)
     }
     render(){
         return(
            <center><div>
                 <h1>WELCOME</h1>
                 <h3>FIRST NAME :{this.props.Fname}</h3>
                 <h3>LAST NAME :{this.props.Lname}</h3>
                 <h3>ADDRESS :{this.props.address}</h3>
                 <h3>EMAIL :{this.props.email}</h3>
                 <h3>PHONE NUMBER :{this.props.Pnumber}</h3>
            </div></center>
         )
     }
 }
 export default BusinessCard;



