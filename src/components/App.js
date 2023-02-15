import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Home';


class App extends Component {
    render(){
        return (
            <Router>
                <Routes>
                    <Route path='/' exact element={<HomePage />}/>
                </Routes>
            </Router>
        );
    }
}

export default App;