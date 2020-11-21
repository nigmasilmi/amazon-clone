export const initialState = {
    cart: [],
    user: null
};

//selector
export const getCartTotalPrice = (cart) => {
    return cart?.reduce((amount, item) => item.price + amount, 0);

};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item]
            }
        case 'REMOVE_FROM_CART':
            const index = state.cart
                .findIndex(cartItem => cartItem.id === action.id);
            let updatedCart = [...state.cart];
            if (index >= 0) {
                updatedCart.splice(index, 1);
            } else {
                console.warn(`Can't remove product (id:${action.id})`)
            }
            return {
                ...state,
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
        case 'EMPTY_THE_CART':
            return {
                ...state,
                cart: []
            }

        default:
            return state;
    }
};