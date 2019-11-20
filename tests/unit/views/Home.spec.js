import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Home)
  })
  it('renders a vue instance', () => {
    expect(wrapper.isVueInstance()).to.equal(true)
  })
})
