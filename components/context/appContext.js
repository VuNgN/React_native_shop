import React, { useState } from 'react';
import cartListItem from '../../data/cartListItem';
import { Alert } from 'react-native';

export const MyContext = React.createContext();
export function MyProviderConText(props) {
    const [ cart, changeCart ] = useState(cartListItem);
    const [ isDarkMode, setIsDarkMode ] = useState(false);
    const toggleSwitch = () => setIsDarkMode(previousState => !previousState);
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
        Alert.alert(
            'Thông báo',
            'Bạn đã thêm vào giỏ hàng thành công !!',
            [
                {
                    text: 'OK',
                }
            ],
            {
                cancelable: true,
            }
        );
    }
    function addQuanityCart(product) {
        cart.find((item)=> item.id === product.id).quantity += 1;
        changeCart([...cart])
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
            addQuanityCart,
            isDarkMode,
            toggleSwitch,
        }}>
            {props.children}
        </MyContext.Provider>
    );
}