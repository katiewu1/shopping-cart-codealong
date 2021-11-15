import { createSlice } from '@reduxjs/toolkit'

export const cart = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //   console.log(action)
      //   state.items.push(action.payload)

      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (existingProduct) {
        // increment quantity
        existingProduct.quantity += 1
      } else {
        // create a new object and spread in the action payload
        // can add a new key
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeItem: (state, action) => {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (existingProduct && existingProduct.quantity === 1) {
        // remove it
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        )
      } else if (existingProduct) {
        existingProduct.quantity -= 1
      }
    },
  },
})
