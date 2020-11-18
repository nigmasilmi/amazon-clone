export const initialState = {
    cart: [],
    price: 0,
    user: null
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                price: state.price + Number(action.item.price),
                cart: [...state.cart, action.item]
            }
        case 'REMOVE_FROM_CART':
            const index = state.cart
                .findIndex(cartItem => cartItem.id === action.id);
            console.log('index es', index);
            console.log('actionid es', action.id);
            let updatedCart = [...state.cart];
            let updatedPrice = state.price;
            if (index >= 0) {
                let itemPrice = updatedCart[index].price;
                updatedPrice = state.price - itemPrice;
                if (updatedPrice < 0) {
                    updatedPrice = 0;
                }
                updatedCart.splice(index, 1);
            } else {
                console.warn(`Can't remove product (id:${action.id})`)
            }
            return {
                ...state,
                price: updatedPrice,
                cart: updatedCart
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user

            }
        case 'LOG_OUT':
            return {
                ...state,
                user: null
            }

        default:
            return state;
    }
};