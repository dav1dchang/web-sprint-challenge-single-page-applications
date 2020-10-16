import React from 'react';

function Form(props){
    const { values, errors, change, submit, disabled } = props

    const onSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked: value
        change(name, valueToUse)
    }

    // const disabled = () => {
    //     return !values.name.trim() || !values.size || !values.toppings || !values.instructions
    // }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form inputs'>
                <label>
                    Name:
                    <input 
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                        placeholder='John Doe'
                    />
                </label>
                <label>
                    Size
                    <select onChange={onChange} value={values.size} name='size'>
                        <option value=''>- Select a size -</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>
                <h4>Toppings</h4>
                <label>
                    <input
                        type='checkbox'
                        name='pepperoni'
                        checked={values.pepperoni}
                        onChange={onChange}
                    />
                    Pepperoni
                </label>
                <label>
                    <input
                        type='checkbox'
                        name='bellpepper'
                        checked={values.bellpepper}
                        onChange={onChange}
                    />
                    Bellpepper
                </label>
                <label>
                    <input
                        type='checkbox'
                        name='sausage'
                        checked={values.sausage}
                        onChange={onChange}
                    />
                    Sausage
                </label>
                <label>
                    <input
                        type='checkbox'
                        name='mushroom'
                        checked={values.mushroom}
                        onChange={onChange}
                    />
                    Mushroom
                </label>
                <label>
                    <input
                        type='checkbox'
                        name='onion'
                        checked={values.onion}
                        onChange={onChange}
                    />
                    Onion
                </label>
                <br></br>
                <br></br>
                <label>
                    Special Instructions:
                    <input 
                        value={values.instructions}
                        onChange={onChange}
                        name='instructions'
                        type='text'
                        placeholder='Write your instructions here'
                    />
                </label>
            </div>
            <br></br>
            <button id='submit' disabled={disabled}>Submit</button>

            <div className='errors'>
                <div>{errors.name}</div>
            </div>
        </form>
    )
}

export default Form