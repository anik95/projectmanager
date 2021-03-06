import React, { Component } from 'react';
import Projects from './Components/Projects';
import ProjectItem from './Components/ProjectItem';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      projects: []
    }
  }

  componentDidMount()
  {
    this.setState({
      projects:[
        {
          title: 'Business Website',
          category: 'Web Design'
        },

        {
            title: 'Social App',
            category: 'Mobile Development'  
        },

        {
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        }
      ]
    })
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({
      projects : projects
    })
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
