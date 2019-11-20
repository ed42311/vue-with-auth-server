import { createLocalVue, shallowMount } from '@vue/test-utils'
import chai, { expect } from 'chai'
import Vuex from 'vuex'
import sinon from 'sinon'
import RegisterForm from '@/components/RegisterForm.vue'
import { VBtn, VTextField } from 'vuetify/lib'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

const localVue = createLocalVue()

localVue.use(Vuex)

describe('RegisterForm.vue', () => {
  let wrapper, register, reset, store

  describe('Basics', () => {
    beforeEach(() => {
      wrapper = shallowMount(RegisterForm)
    })
    it('renders a vue instance', () => {
      expect(wrapper.isVueInstance()).to.equal(true)
    })

    it('should contain 3 VBtns with appropriate labels', () => {
      const allBtns = wrapper.findAll(VBtn).wrappers
      const btnLabelsArray = ['Submit', 'Clear', 'Reset Validation']
      expect(allBtns.length).to.equal(3)
      const btnLabels = allBtns.map(wrapper => wrapper.text())
      expect(btnLabels).to.eql(btnLabelsArray)
    })

    it('should contain 5 VTextFields with appropriate labels', () => {
      const textFields = wrapper.findAll(VTextField).wrappers
      const textLabelsArray = [
        'First Name',
        'Last Name',
        'E-mail',
        'Password',
        'Password Confirmation'
      ]
      expect(textFields.length).to.equal(5)
      const textFieldLabels = textFields.map(wrapper => wrapper.vm.label)
      expect(textFieldLabels).to.eql(textLabelsArray)
    })
  })

  describe('Interaction', () => {
    beforeEach(() => {
      store = new Vuex.Store({
        getters: {},
        actions: {
          register: () => {},
          reset: () => {}
        }
      })
      register = sinon.spy()
      reset = sinon.spy()
      wrapper = shallowMount(RegisterForm, {
        store,
        localVue
      })
    })
    describe('Register Button', () => {
      it('should trigger register method on click', () => {
        const registerBtn = wrapper.find('[data-test="register-btn"]')
        wrapper.setMethods({ register })
        registerBtn.vm.$emit('click')
        expect(register.called).to.equal(true)
      })
    })

    describe('Reset Button', () => {
      it('should trigger reset method on click', () => {
        const resetBtn = wrapper.find('[data-test="reset-btn"]')
        wrapper.setMethods({ reset })
        resetBtn.vm.$emit('click')
        expect(reset.called).to.equal(true)
      })
    })
  })
})
