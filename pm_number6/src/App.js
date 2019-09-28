import React,{Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{firstname: 'Juan',lastname:'De La Cruz', age:'21'}, {firstname: 'Mark',lastname:'Paul', age:'22'},{firstname: 'Paul',lastname:'Mark', age:'23'}],
    };
  }
  
  render() {
    return (
      <center><ul>
        {this.state.data.map(d => <li key={d.name}>{d.firstname}{d.lastname},{d.age}</li>)}
      </ul></center>
    );
  }
}
 export default App;