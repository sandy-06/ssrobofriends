import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import { robots } from '../robots';
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({robots: users}));
    }

    onsearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
        }
    

    render() {

        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <Searchbox searchChange={this.onsearchChange} />
                <Scroll>
                    <Cardlist robots={filteredRobots} />
                </Scroll>
            </div>
        );
    }
}


export default App;