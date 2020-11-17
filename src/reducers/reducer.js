export const initialState = {
    cart: [],
    price: 0
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                price: state.price + Number(action.item.price),
                cart: [...state.cart, action.item]
            }

        default:
            return state;
    }
};