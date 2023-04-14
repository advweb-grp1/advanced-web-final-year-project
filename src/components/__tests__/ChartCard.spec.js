// src/components/ChartCard.spec.js
import { describe, it, expect,beforeEach } from 'vitest';
import ChartCard from '../ChartCard.vue';
import VueApexCharts from 'vue3-apexcharts';
import {  mount } from '@vue/test-utils';
import ResizeObserver from '../__mocks__/ResizeObserver';
global.ResizeObserver = ResizeObserver;

describe('ChartCard component', () => {
  let wrapper;
  let options;
  let data;
  let type;
  let title;

  beforeEach(() => {
    options = {
      chart: {
        type: 'bar',
        width: '100%',
        height: '400px'
      },
      plotOptions: {},
      series: []
    };

    data = [
      {
        name: 'Sample Data',
        data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
      }
    ];

    type = 'bar';
    title = 'Sample Chart';

    wrapper = mount(ChartCard, {
      global: {
        plugins: [VueApexCharts]
      },
      props: {
        options,
        data,
        type,
        title
      }
    });
  });

  it('renders the chart title correctly', () => {
    expect(wrapper.find('.card-header').text()).toBe(title);
  });

  it('renders apexchart component', () => {
    expect(wrapper.findComponent(VueApexCharts)).toBeTruthy();
  });

  it('applies correct chart type', () => {
    expect(wrapper.vm.props.options.chart.type).toBe(type);
  });

  it('applies correct chart data', () => {
    expect(wrapper.vm.props.data).toEqual(data);
  });

  it('applies correct chart options', () => {
    expect(wrapper.vm.props.options).toEqual(options);
  });
});
