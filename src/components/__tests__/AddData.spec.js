import { mount } from '@vue/test-utils';
import AddView from '../../views/AddView.vue';
import { describe, it, expect } from 'vitest';

describe('AddView',() =>{
    it('renders',() => {
      const wrapper = mount(AddView);
      expect(wrapper.html()).toContain('Add File');
    });

    it('Testing to see if Hospitilization set to "No" disables reason textbox', async()=>{
        const wrapper = mount(AddView);
        const hospDropdown = wrapper.find('select[name="hosp"]');
        await hospDropdown.setValue('0');
        const hospReasonInput = wrapper.find('input[name="hospreason"]');
        expect(hospReasonInput.element.disabled).toBe(true);
    });

    it('Testing to see if HeartAttack set to "No" disables HeartAttackDate', async()=>{
        const wrapper = mount(AddView);
        const attackDropdown = wrapper.find('select[name="attack"]');
        await attackDropdown.setValue('0');
        const attackDate = wrapper.find('input[id="attackdate"]');
        expect(attackDate.element.disabled).toBe(true);
    });

    it('Testing to see if LEDV takes string input', async()=>{
        const wrapper = mount(AddView);
        const ledv = wrapper.find('input[id="ledv"]');
        await ledv.setValue('this is text');
        expect(ledv.text()).toBe("");
    });

});