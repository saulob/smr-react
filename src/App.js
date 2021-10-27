import React, {useState} from 'react';
import './index.css';
import Header from './components/Header';
import Form from './components/Form';
import Table from './components/Table';

const App = () => {

    const [days, setDays] = useState('10');
    const [symbol, setSymbol] = useState('');
    const [algo, setAlgo] = useState('all');

        return (
            <div>
                <Header />
                <Form   changeSymbol={setSymbol.bind(this)}
                        changeAlgo={setAlgo.bind(this)}
                        changeDays={setDays.bind(this)} />
                <Table symbol={symbol} algo={algo} days={days} />
            </div>
        )
}

export default App;