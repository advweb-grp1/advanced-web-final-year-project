// src/components/__tests__/ComputedIntegerCard.spec.js
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ComputedIntegerCard from '../ComputedIntegerCard.vue';

describe('ComputedIntegerCard', () => {
  it('renders the label and value correctly', () => {
    const wrapper = mount(ComputedIntegerCard, {
      props: {
        label: 'Sample Label',
        value: '12345'
      }
    });

    const labelElement = wrapper.find('.computed-integer-label');
    const valueElement = wrapper.find('.computed-integer-value');

    expect(labelElement.text()).toBe('Sample Label');
    expect(valueElement.text()).toBe('12345');
  });
});
