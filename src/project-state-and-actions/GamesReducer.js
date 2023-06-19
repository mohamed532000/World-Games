import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export let fetchingDataFromApi = createAsyncThunk(
    "get data",
    async()=> {
        const options = {
            headers: {
                'X-RapidAPI-Key': '40ecb48aaemsh26182288162d00dp13ddbcjsn7f881534ce4d',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let api_url = "https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc";
        let myData = await fetch(api_url , options).then(data => data.json());
        return myData;
    }
)

let GamesReducer = createSlice({
    name : "peoducts",
    initialState : [],
    reducers : {},
    extraReducers : (builder)=>{
        builder.addCase(fetchingDataFromApi.fulfilled , (state , action)=> {
            return state = action.payload;
        });
    }
})

export default GamesReducer.reducer;
