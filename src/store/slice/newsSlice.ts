import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { INews, IResponceNews } from "../../models/News";

interface ISearch {
  category: string | undefined;
  news: string | undefined;
}

interface IInitialState {
  mainNews: INews[];
  newsCategory: INews[];
  news: INews;
  loading: boolean;
  message: string | unknown;
}

const initialState: IInitialState = {
  mainNews: [],
  newsCategory: [],
  news: {
    author: "",
    content: "",
    description: "",
    publishedAt: "",
    source: {
      id: "",
      name: "",
    },
    title: "",
    url: "",
    urlToImage: "",
  },
  loading: false,
  message: "",
};

export const fetchMainNews = createAsyncThunk(
  "mainNews/fetch",
  async (thunkAPI) => {
    try {
      const data = await axios
        .get<IResponceNews>(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_APIKEY}`
        )
        .then((res) => res.data.articles);

      return data;
    } catch (error) {
      return error;
    }
  }
);

export const fetchNews = createAsyncThunk(
  "news/fetch",
  async (title: string | undefined, thunkApi) => {
    try {
      const data = await axios
        .get<IResponceNews>(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_APIKEY}`
        )
        .then((res) => res.data.articles.find((item) => item.title === title));
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const fetchCategory = createAsyncThunk(
  "category/fetch",
  async (category: string, thunkApi) => {
    try {
      const data = await axios
        .get<IResponceNews>(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.REACT_APP_APIKEY}`
        )
        .then((res) => res.data.articles);
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const fetchNewsCategory = createAsyncThunk(
  "newsCategory/fetch",
  async (search: ISearch, thunkApi) => {
    try {
      const data = await axios
        .get<IResponceNews>(
          `https://newsapi.org/v2/top-headlines?country=us&category=${search.category}&apiKey=${process.env.REACT_APP_APIKEY}`
        )
        .then((res) =>
          res.data.articles.find((item) => item.title === search.news)
        );
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
      state.loading = false;
      state.mainNews = action.payload as INews[];
    });
    builder.addCase(fetchMainNews.rejected, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    });
    builder.addCase(fetchNewsCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchNewsCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload as INews;
    });
    builder.addCase(fetchNews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload as INews;
    });
    builder.addCase(fetchCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.newsCategory = action.payload as INews[];
    });
  },
});

export default newsSlice.reducer;
