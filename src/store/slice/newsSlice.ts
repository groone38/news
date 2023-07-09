import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { INews, IResponceNews } from "../../models/News";

interface IInitialState {
  mainNews: INews[];
  newsCategory: INews[];
  news: INews | {};
  loading: boolean;
  message: string | unknown;
}

const initialState: IInitialState = {
  mainNews: [],
  newsCategory: [],
  news: {},
  loading: false,
  message: "",
};

export const fetchMainNews = createAsyncThunk(
  "mainNews/fetch",
  async (thunkAPI) => {
    try {
      const data = await axios
        .get<IResponceNews>(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=e3a7fd1804b549e3b18ad4cfeb4552e7"
        )
        .then((res) => res.data.articles);

      return data;
    } catch (error) {
      return error;
    }
  }
);

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMainNews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMainNews.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.mainNews = action.payload as INews[];
    });
    builder.addCase(fetchMainNews.rejected, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.message = action.payload;
    });
  },
});

export default newsSlice.reducer;
