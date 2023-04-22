import { shallowMount } from '@vue/test-utils';
import SearchForm from '../query/SearchBar.vue';
import { describe, it, expect } from 'vitest';

describe('SearchForm.vue', () => {
  it('renders a search form with a search input and search button', () => {
    const wrapper = shallowMount(SearchForm);
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('button.btn-primary').exists()).toBe(true);
  });

  it('renders a select input for search columns with correct options', () => {
    const wrapper = shallowMount(SearchForm);
    const select = wrapper.find('select.form-select');
    expect(select.exists()).toBe(true);
    const options = select.findAll('option');
    expect(options.length).toBeGreaterThan(1);
    expect(options[0].attributes('value')).toBe('');
    expect(options[0].text()).toBe('Select Column');
    expect(options[1].attributes('value')).toBeTruthy();
    expect(options[1].text()).toBeTruthy();
  });

  it('emits a "search" event with the search term and column when the search button is clicked', async () => {
    const wrapper = shallowMount(SearchForm);
    const searchInput = wrapper.find('input[type="text"]');
    const searchButton = wrapper.find('button.btn-primary');
    const searchTerm = 'test';
    const searchColumn = 'name';
    await searchInput.setValue(searchTerm);
    const select = wrapper.find('select.form-select');
    await select.setValue(searchColumn);
    await searchButton.trigger('click');
    expect(wrapper.emitted('search')).toBeTruthy();
    const emittedPayload = wrapper.emitted('search')[0][0];
    expect(emittedPayload.term).toBe(searchTerm);
  });




  it('renders an "Advanced Search" button', () => {
    const wrapper = shallowMount(SearchForm);
    expect(wrapper.find('button.btn-secondary').exists()).toBe(true);
    expect(wrapper.text()).toContain('Advanced Search');
  });

  it('emits a "show-advanced" event when the "Advanced Search" button is clicked', async () => {
    const wrapper = shallowMount(SearchForm);
    const advancedSearchButton = wrapper.find('button.btn-secondary');
    await advancedSearchButton.trigger('click');
    expect(wrapper.emitted('show-advanced')).toBeTruthy();
    expect(wrapper.emitted('show-advanced')[0][0]).toBe(true);
  });
});
