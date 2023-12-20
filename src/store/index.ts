import { configureStore } from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import { authSlice } from "./auth.slice";


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
});

export const dispatch = store.dispatch.bind(store);
export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;


export const useAppDispatch: () => TAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
