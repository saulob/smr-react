import React from 'react'

const Header = () => {

    function fetchData(company) {
        alert(`hello, ${company}`);
    }

    return (
        <div>
            <button onClick={() => fetchData('Facebook')}>
                Facebook
            </button>
            <button onClick={() => fetchData('Google')}>
                Google
            </button>
        </div>
    )
}

export default Header