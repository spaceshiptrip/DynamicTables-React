import React, { Component } from 'react';
import Table from '../Table/DynamicTables';
import './GetOnLinePosts.css'
// get posts from online api
// it's return a json file
class GetOnlinePosts extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            posts : []          
        };
    }

    componentDidMount(){
        // I will use fake api from jsonplaceholder website
        // this return 100 posts 
        // fetch("https://jsonplaceholder.typicode.com/posts")
        fetch('http://192.168.1.56:5000/getSomeDataFromFile')
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
                this.setState({
                    isLoaded : true,
                    posts : result
                });
            },

            // Handle error 
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }

    render() {
        const {error, isLoaded, posts} = this.state;

        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
                <div>
                   <Table data={posts}/>
                </div>
            );
        }
      
    }
  }
  
  export default GetOnlinePosts;
