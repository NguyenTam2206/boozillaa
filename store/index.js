import axios from 'axios'

export const state = () => ({
    productsList : [],
    filter : {}
})

export const mutations = {
    setProductsList(state, productsList) {
        state.productsList = [...productsList]
    },
    //For Chips
    setFilter(state, filter) {
        state.filter = {...filter}
    }
}

export const actions = {
    getProducts({ commit }, filter) {
        console.log(filter)
        //For Chips
        commit('setFilter', filter )
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
    }
}

export const getters = {
    productsList(state) {
        return state.productsList
    },
    filter(state) {
        return state.filter
    }
}
