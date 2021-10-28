import React from 'react'

const Form = (props) =>{

        const callDays = (event) => {
            props.changeDays(event.target.value);
        }

        const callSymbol = (symbol, title) => {
            props.changeSymbol(symbol);
            props.changeTitle(title);
        }

        const callAlgo = (algo) => {
            props.changeAlgo(algo);
        }

        return (
            <div className="bg-white bg-white-bottom">
                <div title="social logos">
                    <button className="btn btn-logo btn-facebook" onClick={() => callSymbol('FBOK34', 'Facebook Inc.')}>
                        <img src='./images/facebook.png' alt="Facebook logo button" title="Facebook Inc. (FBOK34)" />
                    </button>
                    <button className="btn btn-logo btn-google"  onClick={() => callSymbol('GOGL34', 'Alphabet Inc.')}>
                        <img src='./images/google.png'  alt="Google logo button" title="Alphabet Inc. (GOGL34)" />
                    </button>
                    <button className="btn btn-logo btn-pinterest"  onClick={() => callSymbol('P2IN34', 'Pinterest, Inc.')}>
                        <img src='./images/pinterest.png'  alt="Pinterest logo button" title="Pinterest, Inc. (P2IN34)" />
                    </button>
                    <button className="btn btn-logo btn-twitter"  onClick={() => callSymbol('TWTR34', 'Twitter, Inc.')}>
                        <img src='./images/twitter.png'  alt="Twitter logo button" title="Twitter, Inc. (TWTR34)" />
                    </button>
                </div>
                <div className="algo" id="algo">
                    <button className="btn btn-white" title="Filter only All recommendations"
                            onClick={() => callAlgo('all')}>
                        All with charts
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