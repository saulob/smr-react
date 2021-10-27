import React, { Component } from 'react';
import './index.css';
import Header from './components/Header';
import Form from './components/Form';
import Table from './components/Table';

class App extends Component {

    constructor() {
        super();
        this.state = {
            symbol: '',
            algo: '',
        };
    }

    onChangeSymbol(newSymbol) {
        this.setState({symbol: newSymbol})
    }

    onChangeAlgo(newAlgo) {
        this.setState({algo: newAlgo})
    }

    render() {

        return (
            <div>
                <Header/>
                <Form changeSymbol={this.onChangeSymbol.bind(this)}
                      changeAlgo={this.onChangeAlgo.bind(this)} />
                <Table symbol={this.state.symbol} algo={this.state.algo}/>
            </div>
        );
    }
}

export default App;