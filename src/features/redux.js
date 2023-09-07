import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    amount: 0,
    total: 0,
    visibility: false,
    visibility2: true,
    cartClick: '',
    cartSlide: 'aslide bg-[#222222] h-[100vh] fixed right-[-510px] top-0 z-[999] w-[510px] max-sm:w-full max-sm:right-[-639px]',
    navbarSlide: 'aslide space-x-10 max-lg:space-x-0 max-lg:flex max-lg:flex-col max-lg:fixed max-lg:left max-lg:bg-[#222222] top-0 right-[-300px] max-lg:h-[100vh] max-lg:w-[300px] max-lg:z-[999]',
    navbarClick: '',
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setVisibility: (state) => {
            state.visibility = state.amount === 0 ? false : true;
            state.visibility2 = state.amount === 0 ? true : false;
        },
        addProduct: (state, action) => {
            const item = state.products.find(item => item.id === action.payload.id)
            if (item && item.amount < 20 && state.amount < 99) {
                state.total = state.total + item.price
                item.amount++
                state.amount++
                
            } else if (!item && state.amount < 99) {
                state.products = [...state.products, action.payload];
                state.total = state.total + action.payload.price
                state.amount++
                
            }
        },
        addProduct1: (state, action) => {
            const item = state.products.find(item => item.id === action.payload.id)
            if (item && item.amount + action.payload.amount < 21 && state.amount < 100) {
                state.total += (item.price * action.payload.amount)
                item.amount += action.payload.amount
                state.amount += action.payload.amount
                
            } else if (!item) {
                state.products = [...state.products, action.payload];
                state.total += (action.payload.price * action.payload.amount)
                state.amount += action.payload.amount
                
            } else if (item.amount + action.payload.amount > 20) {
                state.amount = (state.amount - item.amount) + 20
                state.total = ((state.total - (item.price * item.amount)) + (20 * action.payload.price))
                item.amount = 20
                
            }
        },
        decreaseAmount: (state, action) => {
            const item = state.products.find(item => item.id === action.payload)
             if (item.amount > 1) {
                item.amount--
                state.amount = state.amount - 1;
                state.total = state.total - item.price
             }
       },
       removeProduct: (state, action) => {
        const item = state.products.find(item => item.id === action.payload)
        state.amount = state.amount - item.amount
        state.total = state.total - (item.price * item.amount)
            state.products = state.products.filter(item => item.id !== action.payload)
            if (state.products.length === 0) {
                state.visibility = false
                state.visibility2 = true
             }
       },
       setCartClick: (state, action) => {
            if (action.payload === 1) {
                state.cartClick = 'darkerscreen'
                state.cartSlide = 'aslide bg-[#222222] h-[100vh] fixed right-[0] top-0 z-[999] w-[510px] max-sm:w-full'
            } else {
                
                state.cartSlide = 'aslide bg-[#222222] h-[100vh] fixed right-[-510px] top-0 z-[999] w-[510px] max-sm:w-full max-sm:right-[-639px]'
                state.cartClick = ''
            }
       },
       setNavbarClick: (state, action) => {
        if (action.payload === 1) {
            state.navbarClick = 'darkerscreen lg:hidden'
            state.navbarSlide = 'aslide space-x-10 max-lg:space-x-0 max-lg:flex max-lg:flex-col max-lg:fixed max-lg:left max-lg:bg-[#222222] top-0 right-[0] max-lg:h-[100vh] max-lg:w-[300px] max-lg:z-[999]'
        } else {
            state.navbarSlide = 'aslide space-x-10 max-lg:space-x-0 max-lg:flex max-lg:flex-col max-lg:fixed max-lg:left max-lg:bg-[#222222] top-0 right-[-300px] max-lg:h-[100vh] max-lg:w-[300px] max-lg:z-[999]'
            state.navbarClick = ''
        }
       }
    }
})

export const { setVisibility, addProduct, addProduct1, decreaseAmount, removeProduct, setCartClick, setNavbarClick } = cartSlice.actions;
export default cartSlice.reducer;