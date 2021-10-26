import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Form from './components/Form';
import Table from './components/Table';

ReactDOM.render(
    <div>
        <Header></Header>
        <Form></Form>
        <Table></Table>
    </div>,
    document.getElementById('root')
);
