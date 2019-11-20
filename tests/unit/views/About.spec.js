import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import About from '@/views/About.vue'

describe('About.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(About)
  })
  it('renders a vue instance', () => {
    expect(wrapper.isVueInstance()).to.equal(true)
  })
})
