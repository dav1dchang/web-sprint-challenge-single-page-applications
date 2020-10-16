import React, { useEffect, useState } from "react";
import Form from './Form';
import axios from 'axios';
import * as yup from 'yup';
import Schema from '../Schema';
import Pizzas from './Pizza';

const initialOrders = []
const initialDisabled = true
const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  bellpepper: false,
  sausage: false,
  mushroom: false,
  onion: false,
  instructions: '',
}

const initialFormErrors = {
  name: '',
  size: '',
  instructions: '',
}

function Application(){
    const [orders, setOrders] = useState(initialOrders)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const postNewOrder = (newOrder) => {
        axios.post('https://reqres.in/api/users', newOrder)
            .then(res => {
                console.log(res.data)
                setOrders([...orders, res.data])
                setFormValues(initialFormValues)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const inputChange = (name, value) => {
        yup
            .reach(Schema, name)
            .validate(value)
            .then(() => {
                setFormErrors({
                    ...formErrors,
                    [name]: '',
                })
            })
            .catch((err) => {
                setFormErrors({
                    ...formErrors,
                    [name]: err.errors[0],
                })
            })
            setFormValues({
                ...formValues,
                [name]: value,
            })
    }

    const formSubmit = () => {
        const newOrder = {
            name: formValues.name.trim(),
            size: formValues.size.trim(),
            toppings: ['pepperoni', 'bellpepper', 'sausage', 'mushroom', 'onion'].filter((top) => formValues[top])
            // pepperoni: formValues.pepperoni,
            // bellpepper: formValues.bellpepper,
            // sausage: formValues.sausage,
            // mushroom: formValues.mushroom,
            // onion: formValues.onion,
            // instructions: formValues.instructions,
        }
        postNewOrder(newOrder)
    }

    useEffect(() => {
        Schema.isValid(formValues).then(valid => {
            setDisabled(!valid)
        })
    }, [formValues])

    return (
        <div className='Application'>
            <h1>Lambda Eats</h1>
                <Form
                    values={formValues}
                    errors={formErrors}
                    change={inputChange}
                    submit={formSubmit}
                    disabled={disabled}
                />     
                <div className='user-wrapper'>
                    {orders.map((order) => {
                        return <Pizzas 
                            key={order.id}
                            name={order.name}
                            size={order.size}
                            toppings={order.toppings}
                            pepperoni={order.pepperoni}
                            bellpepper={order.bellpepper}
                            sausage={order.sausage}
                            mushroom={order.mushroom}
                            onion={order.onion}
                            instructions={order.instructions}
                        />
                    })}
                </div>           
        </div>
    )
}//Application

export default Application;
