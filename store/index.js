import axios from 'axios'

export const state = () => ({
    productsList: [],
    filter: {},
    isLoading: true
})

export const mutations = {
    setProductsList(state, productsList) {
        state.productsList = [...productsList];
        state.isLoading = false
    },
    //For Chips
    setFilter(state, filter) {
        state.filter = { ...filter }
    }
}

export const actions = {
    // async nuxtServerInit({ commit }, context) {
        // Use nuxtServerInit if you need to fill the store with specific data from the very beginning, no matter which page was accessed first
        // such as userinfo, section
    // },
    getProducts({ commit }, filter) {
        console.log(filter)
        //For Chips
        commit('setFilter', filter)
        //Get Data
        axios
            .get('https://5e5b7f0f2faeae0014f92b43.mockapi.io/api/boo-products', {
                filter
                // This is object filter:
                //  -catelogy: this.$route.params.name,
                //  -fromIndex: 0,
                //  -pageSize: 24,
            })
            .then(response => commit('setProductsList', response.data))
    },
}

export const getters = {
    productsList(state) {
        return state.productsList
    },
    filter(state) {
        return state.filter
    },
    isLoading(state) {
        return state.isLoading
    }
}
