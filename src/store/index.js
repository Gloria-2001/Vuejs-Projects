import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: { //data properties
    products: [],
    bag: []
  },
  mutations: {
    loadProduct(state, products){
      //console.log(products)
      state.products = products
    },
    loadBag(state, products){
      state.bag = products
    }, 
    addToBag(state, product){
      state.bag.push(product)
      localStorage.setItem('bag', JSON.stringify(state.bag))
    }, 
    removeFromBag(state, productId){
      var updatedBag = state.bag.filter(item => productId != item.id)
      state.bag = updatedBag
      localStorage.setItem('bag', JSON.stringify(state.bag))
    }
  },
  actions: {
    loadProduct({commit}){
      axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        commit('loadProduct', response.data)
      })
    },

    loadBag({commit}){
      if(localStorage.getItem("bag")){
        commit('loadBag', JSON.parse(localStorage.getItem("bag")))
      }
    },

    addToBag({commit}, product){
      commit('addToBag', product)
    }, 

    removeFromBag({commit}, productId){
      if(confirm('Are you sure you want to remove the item from bag?')){
        commit('removeFromBag', productId)
      }
    }
  },
  modules: {
  }
})
