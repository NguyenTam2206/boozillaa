import axios from 'axios'

export const state = () => ({
    productsList : []
})

export const mutations = {
    setProductsList(state, productsList) {
        state.productsList = [...productsList]
    }
}

export const actions = {
    getProducts({ commit }, filter) {
        axios
            .get('https://5e5b7f0f2faeae0014f92b43.mockapi.io/api/boo-products', {
                filter
                // This is object filter:
                //  -catelogy: this.$route.params.name,
                //  -fromIndex: 0,
                //  -pageSize: 24,
                //  -filter default = all
            })
            .then(response => commit('setProductsList', response.data))
    }
}

export const getters = {
    productsList(state) {
        return state.productsList
    }
}
