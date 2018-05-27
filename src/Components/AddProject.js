import React, {Component} from 'react';


class AddProject extends React.Component{
    constructor(props){
        super(props);
        this.state={
            newProject:{}
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static defaultProps = 
        {
            categories: ['Web Design', 'Web Development', 'Mobile Development']
        }
    
     
    handleSubmit(e)
    {
        if(this.refs.title.value === ''){
            alert('Title is required');
        }
        else{
            this.setState({
                newProject:{
                    title: this.refs.title.value,
                    category: this.refs.category.value
                }
            }, function(){
                this.props.addProject(this.state.newProject)
            })
        }
        console.log(this.refs.title.value);
        e.preventDefault();
    }
    
    
    
    render()
    {
        let categoryOptions = this.props.categories.map(category=>{
            return( <option  key={category} value={category}> {category}</option> )
        })
        return(
            <div>
                <h3>Add project</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title</label>
                        <input type="text" ref="title" />
                    </div>
                    <br/>
                    <div>
                        <label>Category</label> 
                        <select ref="category">
                            {categoryOptions}
                        </select>
                        <br/>
                    </div>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

    
}

export default AddProject;