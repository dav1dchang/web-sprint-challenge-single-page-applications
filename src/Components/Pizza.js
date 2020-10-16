import React from 'react'

export default function Pizzas(props){
    const { name, size, toppings, instructions } = props
    return (
        <div className='pizza'>
            <h4>Name: {name}</h4>
            <p>Size: {size}</p>
            <p>Toppings:
                <ul>
                    {toppings.map((like, idx) => <li key={idx}>{like}</li>)}
                </ul>
            </p>
            <p>Special Instructions: {instructions}</p>
        </div>
    )
}