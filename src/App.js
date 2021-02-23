import React, { Component } from "react";
import Calendar from 'react-calendar';
import MyApp from './Components/Selectcalender';
//import MyComponent from './Components/daterange'


class App extends Component {
  state = {
    api_data: [],
  };

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let temp_data = data.map((t) => {
          return { value: t.id, display: t.title };
        });
        this.setState({ api_data: temp_data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (<div className="container"><div className="row"><div className ="col-sm-6">
      <div className="row">
      <div className="col-sm-3"><h4>From:</h4>
      <select>
        {this.state.api_data.map((k) => (
          <option key={k.id} value={k.id}>
            {k.display}
          </option>
        ))}
      </select></div>
      <div className="col-sm-3"><h4><br/><br/>To:</h4>
      <select>
        {this.state.api_data.map((k) => (
          <option key={k.id} value={k.id}>
            {k.display}
          </option>
        ))}
      </select></div></div></div>
      <div ><MyApp/></div></div>
       </div>
      
    );
  }
}

export default App;