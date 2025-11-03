import { TYPES } from "./shoppingCartActions";

export function shoppingReducer(state, action){
    switch(action.type){
        case TYPES.READ_STATE: {
            const { products, cart } = action.payload;

            return {
                ...state,
                products,
                cart,
            };
        }

        case TYPES.ADD_TO_CART: {
            
            const newItem = state.products.find(
                (producto) => producto.id === action.payload
            );

            const itemInCart = state.cart.find(
                (item) => item.id === newItem.id
            );

            return itemInCart
                ? {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.id === newItem.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                }
                : {
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: 1 }],
                };
        }

        case TYPES.REMOVE_ONE_ITEM: {

            let itemToDelete = state.cart.find(item => item.id === action.payload);

            return itemToDelete.quantity > 1
                ? {
                    ...state,
                    cart: state.cart.map(item => 
                        item.id === itemToDelete.id
                            ? { ...item, quantity: item.quantity - 1}
                            : item
                    )
                }
                : {
                    ...state,
                    cart: state.cart.filter(item => item.id !== itemToDelete.id)
                }

                };


    case TYPES.REMOVE_ALL_ITEMS: {
        return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload)
        };
    }

    case TYPES.CLEAR_CART: {
        return { 
            ...state, 
            cart: []
        };
    }
    
    default:
        return state;
    }
}
