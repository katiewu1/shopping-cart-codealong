import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Products } from 'components/Products'
import { Cart } from 'components/Cart'

import { cart } from './reducers/cart'
import { products } from './reducers/products'

const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer,
})

// instead of writing reducer: reducer, shorthand - reducer
const store = configureStore({ reducer })

export const App = () => (
  <Provider store={store}>
    <Cart />
    <Products />
  </Provider>
)
