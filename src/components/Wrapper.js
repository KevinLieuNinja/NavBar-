import React, { useState } from 'react';
import NavBar from './NavBar';
import FormWrapper from './FormWrapper';

const Wrapper = () => {

    const [formState, setFormState] = useState("")

    // const onChangeHandler = (event) => {
    //     setFormState({
    //         ...formState,
    //         [event.target.name]: event.target.value
    //     });
    // }

    return(
        <div>
            <NavBar person={formState} />
            <FormWrapper changeHandler={setFormState}/>

        </div>
    )
}
export default Wrapper;