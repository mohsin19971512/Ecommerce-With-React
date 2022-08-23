import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    items : [],
    productDetails : [],
    isLoading: false,
    error : null,
    status : null,

}

export const productFetch = createAsyncThunk(
    "products/productFetch",
    async(_,thunkAPI)=>{

        const {rejectWithValue} = thunkAPI;

        try {
        const response = await fetch("http://127.0.0.1:8000/api/products");
        const data = await response.clone().json();
        return data;
        }catch(error) {
            return rejectWithValue(error.message);
        }



    }
)


export const productDetailFetch = createAsyncThunk(
    "products/productDetailFetch",
    async(id,thunkAPI)=>{

        const {rejectWithValue} = thunkAPI;

        try {
        const response = await fetch(`http://127.0.0.1:8000/api/products/products/${id}`);
        const data = await response.clone().json();
        return data;
        }catch(error) {
            return rejectWithValue(error.message);
        }

    }
)

export const checkLogin = createAsyncThunk(
    "products/checkLogin",
    async(accountData,thunkAPI)=>{

        const {rejectWithValue} = thunkAPI;


        try {
            const res = await fetch('http://127.0.0.1:8000/api/auth/signin', {
              method: 'POST',
              body: JSON.stringify(accountData),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            });
            const data = await res.json();
            let token = data.token.access;
            localStorage.setItem("token", JSON.stringify(token))

            return data;
          } catch (error) {
            return rejectWithValue(error.message);
          }






/*         axios.post('http://127.0.0.1:8000/api/auth/signin',
        {
            email:data.email,
            password:data.password
        }
        )
        .then((response)=>{
            console.log(response)
            //let token = response.data.token.access_token;
            let token = response.data.token.access;
            let data = response.data;
            localStorage.setItem("TOKEN_KEY", JSON.stringify(token))
            //navigate('/dashboard')
            const token2 = localStorage.getItem("TOKEN_KEY")
            console.log(token2)
        })
        .catch((err)=>{
            return rejectWithValue(error.message);
        }) */


    }
)



/* export const createAddToCart = createAsyncThunk(
    "products/createAddToCart",
    async(accountData,thunkAPI)=>{

        const {rejectWithValue} = thunkAPI;


        try {
            const res = await fetch('http://127.0.0.1:8000/api/auth/signin', {
              method: 'POST',
              body: JSON.stringify(accountData),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            });
            const data = await res.json();
            let token = data.token.access;
            localStorage.setItem("token", JSON.stringify(token))

            return data;
          } catch (error) {
            return rejectWithValue(error.message);
          }
        }
) */


const productSlice = createSlice({
    name : "products",
    initialState,
    reducers :{},
    extraReducers: { 
        [productFetch.pending] : (state,action) => {
            state.isLoading = true;
            state.error = null;
        },

        [productFetch.fulfilled] : (state,action) => {
            state.isLoading = false;;
            state.error = null
            state.items = action.payload;

        },
        [productFetch.rejected] : (state,action) => {
            state.isLoading = false;
            state.error = action.payload

        },

        [productDetailFetch.pending] : (state,action) => {
            state.isLoading = true;
            state.error = null;
        },

        [productDetailFetch.fulfilled] : (state,action) => {
            state.isLoading = false;;
            state.error = null
            state.productDetails = action.payload;
            console.log(action.payload)

        },
        [productDetailFetch.rejected] : (state,action) => {
            state.isLoading = false;
            state.error = action.payload

        },


        // Login 
        [checkLogin.pending] : (state,action) => {
            state.isLoading = true;
            state.error = null;
        },

        [checkLogin.fulfilled] : (state,action) => {
            state.isLoading = false;;
            state.error = null
            console.log(action.payload)

        },
        [checkLogin.rejected] : (state,action) => {
            state.isLoading = false;
            state.error = action.payload

        }
    }
})

export default productSlice.reducer;
