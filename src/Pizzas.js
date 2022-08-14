import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {addTopping} from "./pizzaSlice"

function Pizzas() {
    
        const pizza = useSelector(state => state.pizza);
        const dispatch = useDispatch();

        return (
            <>
            <h2>Your pizza has: </h2>
            <p>{pizza.toppings.map(topping => (
                <div key={topping}>{topping}</div>
            ))}</p>

            <button onClick={() => dispatch(addTopping('pineapple'))}>Add Pineapple</button><br />
            <button onClick={() => dispatch(addTopping('tomatoes'))}>Add Tomatoes</button><br />
            <button onClick={() => dispatch(addTopping('mushroom'))}>Add Mushrooms</button><br />
            </>
        )
}
export default Pizzas