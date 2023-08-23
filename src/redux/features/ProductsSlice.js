const { apiSlice } = require("../api/api");


const productsSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => '/products'
        }),
        getQueryProducts: builder.query({
            query: () => `/products/?${query}`
        })
    })
})

export const {useGetProductsQuery, useGetQueryProductsQuery} = productsSlice