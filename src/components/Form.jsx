import React from 'react'

const Form = (props) =>{

        const callDays = (event) => {
            props.changeDays(event.target.value);
        }

        const callSymbol = (symbol) => {
            props.changeSymbol(symbol);
        }

        const callAlgo = (algo) => {
            props.changeAlgo(algo);
        }

        return (
            <div>
                <div>
                    <button className="btn btn-logo" onClick={() => callSymbol('FBOK34')}>
                        <img src='./images/facebook.png' alt="Facebook logo" title="Facebook Inc. (FBOK34)" />
                    </button>
                    <button className="btn btn-logo"  onClick={() => callSymbol('GOGL34')}>
                        <img src='./images/google.png'  alt="Google logo" title="Alphabet Inc. (GOGL34)" />
                    </button>
                    <button className="btn btn-logo"  onClick={() => callSymbol('P2IN34')}>
                        <img src='./images/pinterest.png'  alt="Pinterest logo" title="Pinterest, Inc. (P2IN34)" />
                    </button>
                    <button className="btn btn-logo"  onClick={() => callSymbol('TWTR34')}>
                        <img src='./images/twitter.png'  alt="Twitter logo" title="Twitter, Inc. (TWTR34)" />
                    </button>
                </div>
                <div className="algo" id="algo">
                    <button className="btn btn-white" title="Filter only All recommendations"
                            onClick={() => callAlgo('all')}>
                        All
                    </button>
                    <button className="btn btn-yellow" title="Filter only Buy recommendations"
                            onClick={() => callAlgo('buy')}>
                        Buy
                    </button>
                    <button className="btn btn-red" title="Filter only Hold recommendations"
                            onClick={() => callAlgo('hold')}>
                        Hold
                    </button>
                    <button className="btn btn-green" title="Filter only Sell recommendations"
                            onClick={() => callAlgo('sell')}>
                        Sell
                    </button>
                </div>
                <div className="days" id="days">
                    Days:
                    <select name="time_window" aria-label="Days" aria-required="true"
                            defaultValue={'10'}
                            onChange={(event) => callDays(event)} >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                        <option value="30">30</option>
                    </select>
                </div>
            </div>
        )
}

export default Form;