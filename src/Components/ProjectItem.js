import React, { Component } from 'react';



class ProjectItem extends React.Component{
    render(){
        return(
            <div>
                <br />
                <li className="Project">
                    <strong>{this.props.project.title}</strong> : {this.props.project.category}
                </li>
            </div>
        )
    }
}
export default ProjectItem;
