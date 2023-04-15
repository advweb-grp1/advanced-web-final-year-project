import { mount } from '@vue/test-utils';
import registerPage from '../../views/RegisterView.vue';
import { describe, it, expect } from 'vitest';

describe('registerPage',() =>{
  it('renders',() => {
    const wrapper = mount(registerPage);
    expect(wrapper.html()).toContain('Register');
  });

  it('Testing to see if phone number is accepted if it isnt in the correct format', async()=>{
    const wrapper = mount(registerPage);
    const phoneInput = wrapper.find('input[name="phoneNumber"]');
    await phoneInput.setValue('mynumberisthis');
    const errorReport = wrapper.find('div[name="regError"]');
    expect(errorReport.exists()).toBe(true);
  });

  it('Testing to see if phone number works in the correct format', async()=>{
    const wrapper = mount(registerPage);
    const phoneInput = wrapper.find('input[name="phoneNumber"]');
    await phoneInput.setValue('+447123456789');
    const errorReport = wrapper.find('.alert.alert-danger[name="regError"]');
    expect(errorReport.exists()).toBe(false);
  });

  it('Shows that the "submit" button appears', async () => {
    const wrapper = mount(registerPage);
    const button = wrapper.find('button');
    expect(button.exists()).toBe(true);
    await button.trigger('click');
  });

  it('Makes sure that an error is given when text boxes are empty', async () => {
    const wrapper = mount(registerPage);
    await wrapper.find('button').trigger('click');
    setTimeout(() =>{
      const errorReport = wrapper.find('div[name="regError"]');
      expect(errorReport.exists()).toBe(true);
    },1000 );
  });

  it('Makes sure that if password and confirm password are not the same an error appears', async()=>{
    const wrapper = mount(registerPage);
    const passwordInput = wrapper.find('input[name="password"]');
    await passwordInput.setValue('passwordnone');
    const confirmpasswordInput = wrapper.find('input[name="confirmPassword"]');
    await confirmpasswordInput.setValue('notthesame');
    const errorReport = wrapper.find('div[name="regError"]');
    expect(errorReport.exists()).toBe(true);
  });
});
