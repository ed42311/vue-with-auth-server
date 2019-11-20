import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import NavBar from '@/components/NavBar.vue'

describe('NavBar.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(NavBar)
  })
  it('renders a vue instance', () => {
    expect(wrapper.isVueInstance()).to.equal(true)
  })
})

// import sinon from 'sinon'
// import sinonChai from 'sinon-chai'
// import chai, { expect } from 'chai'

// import { mount } from '@vue/test-utils'
// import NavBar from '@/components/NavBar.vue'
// import Vue from 'vue'
// import Vuex from 'vuex'
// import Vuetify from 'vuetify'

// chai.use(sinonChai)
// Vue.use(Vuex)
// Vue.use(Vuetify)

// describe('NavBar.vue', () => {
//   let actions
//   let store
//   let wrapper

//   beforeEach(() => {
//     actions = {
//       toggleDrawer: sinon.stub()
//     }
//     store = new Vuex.Store({
//       actions
//     })
//     wrapper = mount(NavBar, { store })
//   })

//   it('calls store action "toggleDrawer" when button is clicked', () => {
//     console.log(wrapper)
//     // wrapper.find('b).trigger('click')
//     // expect(actions.toggleDrawer.calledOnce).to.eql(true)
//     expect(true).to.equal(true)
//   })

//   afterEach(() => {
//     actions.toggleDrawer.reset()
//   })
// })
