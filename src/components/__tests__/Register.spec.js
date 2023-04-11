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
    await phoneInput.setValue('07514088240');
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

  it('Shows that the "submit" button works', async () => {
    const wrapper = mount(registerPage);
    const button = wrapper.find('button');
    expect(button.exists()).toBe(true);
    await button.trigger('click');
  });

  it('Makes sure that email shows an error message when it is empty and button is clicked', async () => {
    const wrapper = mount(registerPage);
    const button = wrapper.find('button');
    expect(button.exists()).toBe(true);
    await button.trigger('click');
    const userInput = wrapper.find('input[name="email"]');
    await userInput.setValue('');
    expect(userInput.attributes('requried')).toBeDefined;
    expect(wrapper.find('.invalid-feedback').exists()).toBe(true);
  });

  it('Makes sure that password shows an error message when it is empty and button is clicked', async () => {
    const wrapper = mount(registerPage);
    const button = wrapper.find('button');
    expect(button.exists()).toBe(true);
    await button.trigger('click');
    const userInput = wrapper.find('input[name="password"]');
    await userInput.setValue('');
    expect(userInput.attributes('requried')).toBeDefined;
    expect(wrapper.find('.invalid-feedback').exists()).toBe(true);
  });

  it('Makes sure that name shows an error message when it is empty and button is clicked', async () => {
    const wrapper = mount(registerPage);
    const button = wrapper.find('button');
    expect(button.exists()).toBe(true);
    await button.trigger('click');
    const userInput = wrapper.find('input[name="name"]');
    await userInput.setValue('');
    expect(userInput.attributes('requried')).toBeDefined;
    expect(wrapper.find('.invalid-feedback').exists()).toBe(true);
  });

  it('Makes sure that address shows an error message when it is empty and button is clicked', async () => {
    const wrapper = mount(registerPage);
    const button = wrapper.find('button');
    expect(button.exists()).toBe(true);
    await button.trigger('click');
    const userInput = wrapper.find('input[name="address"]');
    await userInput.setValue('');
    expect(userInput.attributes('requried')).toBeDefined;
    expect(wrapper.find('.invalid-feedback').exists()).toBe(true);
  });

  it('Makes sure that phone number shows an error message when it is empty and button is clicked', async () => {
    const wrapper = mount(registerPage);
    const button = wrapper.find('button');
    expect(button.exists()).toBe(true);
    await button.trigger('click');
    const userInput = wrapper.find('input[name="phoneNumber"]');
    await userInput.setValue('');
    expect(userInput.attributes('requried')).toBeDefined;
    expect(wrapper.find('.invalid-feedback').exists()).toBe(true);
  });

  it('Makes sure that affilation shows an error message when it is empty and button is clicked', async () => {
    const wrapper = mount(registerPage);
    const userInput = wrapper.find('input[name="affiliation"]');
    await userInput.setValue('');
    const button = wrapper.find('button');
    expect(button.exists()).toBe(true);
    await button.trigger('click');
    expect(userInput.attributes('requried')).toBeDefined;
    expect(wrapper.find('.invalid-feedback').exists()).toBe(true);
  });

});
