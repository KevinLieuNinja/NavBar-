import React from 'react';

const Form=({changeHandler}) => {
    return(
        <div>
            <input type='text' onChange={e=> changeHandler(e.target.value)} />
        </div>

    )

}
export default Form;