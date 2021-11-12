import React, { Component } from 'react';
import Table from '../Table/DynamicTables';
import './GetOnLinePosts.css'
import CONFIG from '../../config.json';

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


        var headers = {}
        let url = CONFIG.server + '/' + CONFIG.api;

        fetch(url, {
          method: 'GET',
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: headers
        })
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
