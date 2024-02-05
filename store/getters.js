export default {
    getListCategory: state => {
        return state.categories
    },
    getListProduct: state => {
        return state.products
    },
    getListCart: state => {
        return state.cart
    },
    getListHeader: state => {
        return state.listHeader
    }
}