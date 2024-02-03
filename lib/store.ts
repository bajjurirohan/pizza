import { configureStore } from '@reduxjs/toolkit'
import pizzaReducer from "./features/pizza-slice"
import { TypedUseSelectorHook,useSelector } from 'react-redux'

export const makeStore = () => {
  return configureStore({
    reducer: {
        pizzas: pizzaReducer,
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;