import { shallowMount } from '@vue/test-utils';
import AdvancedSearch from '../query/AdvancedSearch.vue';
import { describe, it, expect } from 'vitest';
import { fields } from '../../firebase/constants';
describe('AdvancedSearch', () => {
  it('renders a select input for search columns with correct options', () => {
    const wrapper = shallowMount(AdvancedSearch);
    const select = wrapper.find('select.form-select');
    const options = select.findAll('option');
    expect(options).toHaveLength(fields.length+1); // replace with actual number of options
    expect(options[0].attributes('value')).toBe('');
    expect(options[0].text()).toBe('Select Column');
    for(let i=0; i< fields.length;i++){
      expect(options[i+1].text()).toBe(fields[i].display);
    }
  });

  it('renders a select input for conditions with correct options', () => {
    const wrapper = shallowMount(AdvancedSearch);
    const select = wrapper.findAll('select.form-select')[1];
    const options = select.findAll('option');
    expect(options).toHaveLength(5); // replace with actual number of options
    expect(options[0].attributes('value')).toBe('');
    expect(options[0].text()).toBe('Select Condition');
    const conditions = ['<', '>', '=', '!='];
    for(let i=0; i< conditions.length;i++){
      expect(options[i+1].text()).toBe(conditions[i]);
    }
  });

  it('emits an "advanced-terms" when the "Advanced Search" button is clicked', async () => {
    const wrapper = shallowMount(AdvancedSearch);
    const searchButton = wrapper.find('button.btn-primary');
    const colSelect = wrapper.find('select.form-select');
    const conditionSelect = wrapper.findAll('select.form-select')[1];
    const searchInput = wrapper.find('input[type="text"]');
    const colValue = 'field1';
    const conditionValue = '>';
    const searchValue = 'test';
    await colSelect.setValue(colValue);
    await conditionSelect.setValue(conditionValue);
    await searchInput.setValue(searchValue);
    await searchButton.trigger('click');
    expect(wrapper.emitted('advanced-terms')).toBeTruthy();
  });
});
