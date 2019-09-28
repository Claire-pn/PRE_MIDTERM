import React, {Component} from 'react';

class App extends Component {
 constructor(props) {
   super(props);
   this.state = {
    FirstNum : 0,
    SecondNum : 0,
    tot : 0,
    op : ''
   }
 }

 handleRes = (e) => {
     const {op, FirstNum, SecondNum} = this.state;
   if (op === "+") {
       this.setState({tot : FirstNum + SecondNum})
   }
   if (op === "-") {
       this.setState({tot : FirstNum - SecondNum})
   }
   if (op === "*") {
    this.setState({tot : FirstNum - SecondNum})
    }
    if (op === "/") {
        this.setState({tot : FirstNum - SecondNum})
    }
 }
 render() {
   const {tot, FirstNum, SecondNum, op} = this.state;
   return(
<center><div><h1>SIMPLE MATH</h1>
       <input type = "number" onChange = {e => this.setState({FirstNum : e.target.value})}></input>
       <input type = "number" onChange = {e => this.setState({SecondNum : e.target.value})}></input>
       <div>
           <select onClick ={e => this.setState({op : e.target.value})}>
               <option>+</option>
               <option>-</option>
               <option>*</option>
               <option>/</option>
           </select>
       <div><button onClick = {e => this.handleRes(e)}>CALCULATE</button></div>
       <div>{FirstNum} {op} {SecondNum} = {tot}</div>
     </div> </div></center>
   )
 }
}

export default App;