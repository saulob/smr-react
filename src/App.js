import React, { Component } from 'react';
import './index.css';
import Header from './components/Header';
import Form from './components/Form';
import Table from './components/Table';

class App extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Form></Form>
                <Table></Table>
            </div>
        );
    }
}

export default App;