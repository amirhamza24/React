import React from 'react';
import { add } from '../../Utilities/Calculate';
// import add from '../../Utilities/Calculate';


const Cosmetics = () => {
    const first = 55;
    const second = 66;
    const total = add(first, second);
    return (
        <div>
            <h1>Welcome to my Cosmetics Store..</h1>
            <p>Total: {total}</p>
        </div>
    );
};

export default Cosmetics;