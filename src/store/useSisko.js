import { create } from "zustand";
const siskoUrl = "https://sistemtoko.com/public/demo";

export const useSisko = create((set) => ({
  // bagian akhir cart di taruh di awal saja
  cartItems: JSON.parse(localStorage.getItem("siskoCartItems")) || [],
  setCartItems(data) {
    let cartItems;
    set((state) => {
      let match = state.cartItems.find((c) => c.id === data.id);
      if (match) {
        let others = state.cartItems.filter((c) => c.id !== data.id);
        let newMatch = { ...match, qty: match.qty + 1 };
        cartItems = [...others, newMatch];
        return { cartItems: [...others, newMatch] };
      } else {
        cartItems = [...state.cartItems, data];
        return { cartItems: [...state.cartItems, data] };
      }
    });
    localStorage.setItem("siskoCartItems", JSON.stringify(cartItems));
    // cartItems = [...cartItems, data];
    // console.log(data);
    // console.log(cartItems);

    // set(state => {

    // })
    // const match = state.cartItems.find((item) => item?.id === action.payload.id);
    // if (state.cartItems.length === 0) state.cartItems = [...state.cartItems, action.payload];
    // else {
    //   if (!match?.id) state.cartItems = [...state.cartItems, action.payload];
    //   else {
    //     let otherCartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
    //     let currentCartItem = { ...match, qty: match.qty + 1 };
    //     state.cartItems = [...otherCartItems, currentCartItem];
    //   }
    // setCartData(state);
    // saveLocal(state);
  },
  products: null,
  loadPage: false,
  errPage: false,
  singleProduct: null,
  search: "",
  sort: "",
  query: {},
  setSearch: (search) => set({ search }),
  setSort: (sort) => set({ sort }),
  setQuery: (data) => set((state) => ({ query: { ...state.query, ...data } })),
  getProducts: async (queryObj) => {
    set({ loadPage: true });
    const queryString = Object.entries(queryObj)
      .map((item) => item.join("="))
      .join("&");
    const response = await fetch(`${siskoUrl}/product?${queryString}`);
    const result = await response.json();
    set({ loadPage: false, products: result.aaData });
    // console.log(response);
  },
  getProductById: async (id) => {
    set({ loadPage: true });
    const response = await fetch(`${siskoUrl}/single/${id}`);
    const result = await response.json();
    console.log(result);
    set({ loadPage: false, singleProduct: result });
  },
}));

// export const getSiskoProducts = createAsyncThunk("sisko/getSiskoProducts", async (queryObj, { rejectWithValue }) => {
//   try {
//     const queryString = Object.entries(queryObj)
//       .map((item) => item.join("="))
//       .join("&");
//     const res = await axios.get(`${url}/product?${queryString}`);
//     return res?.data?.aaData;
//   } catch (error) {
//     return rejectWithValue(error?.response?.data?.message || error?.message || error);
//   }
// });

// export const getSiskoProductSingle = createAsyncThunk("products/getSiskoProductSingle", async (id, { rejectWithValue }) => {
//   try {
//     const response = await axios.get(`${url}/single/${id}`);
//     return response.data;
//   } catch (error) {
//     return rejectWithValue(error?.response?.data?.message || error?.message);
//   }
// });

// const setCartData = (state) => {
//   state.weight = state.cartItems.reduce((acc, curr) => acc + curr.weight * curr.qty, 0);
//   state.count = state.cartItems.reduce((acc, curr) => acc + curr.qty, 0);
//   state.cartItems = state.cartItems.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
//   state.totalPrice = state.cartItems.reduce((acc, curr) => acc + curr.price.split(".").join("") * curr?.qty, 0);
// };

// const saveLocal = (state) => {
//   localStorage.setItem("siskoCart", JSON.stringify(state.cartItems));
//   localStorage.setItem("siskoCount", JSON.stringify(state.count));
//   localStorage.setItem("siskoTotalPrice", JSON.stringify(state.totalPrice));
//   localStorage.setItem("siskoWeight", JSON.stringify(state.weight));
// };

// const siskoSlice = createSlice({
//   name: "sisko",
//   initialState: {
//     data: [],
//     status: "idle",
//     error: null,
//     dataId: null,
//     statusId: "idle",
//     errorId: null,
//     query: {},
//     search: "",
//     sort: "",
//     cartItems: JSON.parse(localStorage.getItem("siskoCart")) || [],
//     count: JSON.parse(localStorage.getItem("siskoCount")) || 0,
//     totalPrice: JSON.parse(localStorage.getItem("siskoTotalPrice")) || 0,
//     weight: JSON.parse(localStorage.getItem("siskoWeight")) || 0,
//     validOngkir: null,
//   },
//   reducers: {
//     setQuery(state, action) {
//       state.query = { ...state.query, ...action.payload };
//     },
//     setSearch(state, action) {
//       state.search = action.payload;
//     },
//     setSort(state, action) {
//       state.sort = action.payload;
//     },
//     setCartItems(state, action) {
//       const match = state.cartItems.find((item) => item?.id === action.payload.id);
//       if (state.cartItems.length === 0) state.cartItems = [...state.cartItems, action.payload];
//       else {
//         if (!match?.id) state.cartItems = [...state.cartItems, action.payload];
//         else {
//           let otherCartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
//           let currentCartItem = { ...match, qty: match.qty + 1 };
//           state.cartItems = [...otherCartItems, currentCartItem];
//         }
//       }
//       setCartData(state);
//       saveLocal(state);
//     },
//     setCartPlus(state, action) {
//       const match = state.cartItems.find((item) => item?.id === action.payload.id);
//       let otherCartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
//       let currentCartItem = { ...match, qty: match.qty + 1 };
//       state.cartItems = [...otherCartItems, currentCartItem];
//       setCartData(state);
//       saveLocal(state);
//     },
//     setCartMinus(state, action) {
//       const match = state.cartItems.find((item) => item?.id === action.payload.id);
//       let otherCartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
//       let currentCartItem = { ...match, qty: match.qty - 1 };
//       state.cartItems = [...otherCartItems, currentCartItem];
//       if (currentCartItem.qty === 0) state.cartItems = [...otherCartItems];
//       setCartData(state);
//       saveLocal(state);
//     },
//     setValidOngkir(state, action) {
//       state.validOngkir = action.payload;
//     },
//     clearAll(state) {
//       (state.cartItems = []), (state.count = 0), (state.totalPrice = 0), (state.weight = 0);
//     },
//   },
//   extraReducers(builder) {
//     builder
//       .addCase(getSiskoProducts.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(getSiskoProducts.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.data = action.payload;
//       })
//       .addCase(getSiskoProducts.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       })
//       .addCase(getSiskoProductSingle.pending, (state) => {
//         state.statusId = "loading";
//       })
//       .addCase(getSiskoProductSingle.fulfilled, (state, action) => {
//         state.statusId = "succeeded";
//         state.dataId = action.payload;
//       })
//       .addCase(getSiskoProductSingle.rejected, (state, action) => {
//         state.statusId = "failed";
//         state.errorId = action.payload;
//       });
//   },
// });

// export const { setQuery, setSearch, setSort, setCartItems, setCartPlus, setCartMinus, clearAll } = siskoSlice.actions;
// export default siskoSlice.reducer;
