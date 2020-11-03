import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { Variables } from './components/Variables'
import CreateVariable from './components/CreateVariable'
import { getAllVariables, createVariable, deleteVariable } from './services/VariableService'

class App extends Component {

  state = {
    withDags: {},
    variable: {},
    variables: [],
    numberOfVariables: 0
  }

  createVariable = (e) => {
    createVariable(this.state.variable)
        .then(response => {
          console.log(response);
          let t = { [response['key']] : this.state.variable['dags']}
          if (localStorage.getItem('withDags') !== null) {
            let oldWithDags = JSON.parse(localStorage.getItem('withDags'))
            localStorage.setItem('withDags', JSON.stringify(Object.assign({}, oldWithDags, t)))
          } else {
            localStorage.setItem('withDags', JSON.stringify(t))
          }
          this.setState({
            numberOfVariables: this.state.numberOfVariables + 1,
          })
          window.location.reload(false);
      });
  }

  getAllVariables = () => {
    getAllVariables()
      .then(variables => {
        console.log(variables)
        this.setState({variables: variables, numberOfVariables: variables.total_entries})
      });
  }

  deleteVariable = (variableToDelete) => {
    deleteVariable(variableToDelete)
      .then(response => {
        console.log(response);
        this.setState({numberOfVariables: this.state.numberOfVariables - 1})
        window.location.reload(false);
    });
  }

  onChangeForm = (e) => {
      let variable = this.state.variable
      if (e.target.name === 'key') {
          variable.key = e.target.value;
      } else if (e.target.name === 'value') {
          variable.value = e.target.value;
      } else if (e.target.name === 'dags') {
          variable.dags = e.target.value;
      }
      this.setState({variable})
  }

  componentDidMount() {
    this.getAllVariables()
  }

  render() {

    return (      
      <div className="App">
        <Header></Header>
        <div className="row mrgnbtm">
          <Variables variables={this.state.variables}
          withDags={JSON.parse(localStorage.getItem('withDags'))} 
          deleteVariable={this.deleteVariable}></Variables>
        </div>
        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-8">
                <CreateVariable 
                  variable={this.state.variable}
                  onChangeForm={this.onChangeForm}
                  createVariable={this.createVariable}
                  >
                </CreateVariable>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
