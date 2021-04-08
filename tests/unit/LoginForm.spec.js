import LoginForm from '@/components/LoginForm'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
  it('emits an event with user data payload', () => {
    const wrapper = mount(LoginForm)

    // 1. Find text input
    const input = wrapper.find('input[type="text"]')
    // the best practice is to find the element, so use specific info

    // 2. Set value for text input
    input.setValue('Adam Jahr')

    // 3. Simulate form submittion
    wrapper.trigger('submit')

    // 4. Assert event has been emitted
    const formSubmittedCalls = wrapper.emitted('formSubmitted') // Array
    expect(formSubmittedCalls).toHaveLength(1) // checking the form submitted event was actually submitted

    // 5. Assert payload is correct
    const expectedPayload = { name: 'Adam Jahr' }
    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(expectedPayload)
  })
})
