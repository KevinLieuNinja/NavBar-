import React from 'react';
import Form from './Form';

const FormWrapper =({changeHandler}) => {
    return(
        <div>
            <Form changeHandler={changeHandler}/>
        </div>
    )
}

export default FormWrapper;