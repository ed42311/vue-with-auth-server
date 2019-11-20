import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import Register from '@/views/Register.vue'
import RegisterForm from '@/components/RegisterForm.vue'

describe('Register.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Register)
  })
  it('renders a vue instance', () => {
    expect(wrapper.isVueInstance()).to.equal(true)
  })
  it('contains a register form', () => {
    expect(wrapper.contains(RegisterForm)).to.equal(true)
  })
})
