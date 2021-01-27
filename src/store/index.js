import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart : [],
    memberships : [],
  },
  getters : {
    getCart(state) {
      return state.cart;
    },
    getMembership(state) {
      return state.memberships;
    }
  },

  mutations: {
    ADD_TO_CART(state, item) {
      // if item not in cart
      const existingItem = state.cart.find(el => el.id === item.id);
      if(!existingItem){
        state.cart.push({
          id: item.id,
          qty : 1
        })
      }
    },
    REMOVE_FROM_CART(state, id) {
      state.cart = state.cart.filter(el => el.id !== id)
    },

    INCREASE_ITEM_COUNT(state, id){
      state.cart.forEach(item => {
        if(item.id == id && item.qty < 5) {
          item.qty++;
        }
      })
    },

    DECREASE_ITEM_COUNT(state, id){
      state.cart.forEach(item => {
        if(item.id == id && item.qty > 1) {
          item.qty--;
        }
      })
    },

    ADD_MEMBERSHIP(state,membership) {
      state.memberships = []
      state.memberships.push(membership)
    },
    REMOVE_MEMBERSHIP(state) {
        state.memberships = []
    },
  },


  actions : {
    addToCart({commit}, itemID) {
      commit('ADD_TO_CART', itemID)
    },
    removeFromCart({commit}, itemID) {
      commit('REMOVE_FROM_CART', itemID)
    },
    addMembershipToCart({commit}, memID) {
      commit('ADD_MEMBERSHIP', memID)
    },
    removeMembershipFromCart({commit}) {
      commit('REMOVE_MEMBERSHIP')
    },
    increment({commit}, id) {
      commit("INCREASE_ITEM_COUNT", id)
    },
    decrement({commit}, id) {
      commit("DECREASE_ITEM_COUNT", id)
    },
  }
});
