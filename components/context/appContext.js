import React, { useState } from 'react';
import cartListItem from '../../data/cartListItem';

export const MyContext = React.createContext();
export function MyProviderConText(props) {
    const [ cart, changeCart ] = useState(cartListItem);
    function addToCart(product) {
        if (cart.length <= 0) {
            changeCart([...cart, {...product, quantity: 1 }]);
        }else {
            if (cart.some((item)=> item.id === product.id)){
                cart.find((item)=> item.id === product.id).quantity += 1;
                changeCart([...cart])
            }else{
                changeCart([...cart, {...product, quantity: 1 }]);
            }
        }
    }
    function removeToCart(product) {
        if (cart.find((item)=> item.id === product.id).quantity <= 1) {
            cart.splice(cart.findIndex((item)=> item.id === product.id), 1);
            changeCart([...cart]);
        }else {
            cart.find((item)=> item.id === product.id).quantity -= 1;
            changeCart([...cart]);
        }
    }
    return (
        <MyContext.Provider value={{
            cart,
            addToCart,
            removeToCart,
        }}>
            {props.children}
        </MyContext.Provider>
    );
}