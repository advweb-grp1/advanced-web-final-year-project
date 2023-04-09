import { describe, it, expect } from 'vitest';
import NavBar from '../NavBar.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { RouterLinkStub, mount } from '@vue/test-utils';
import { defineComponent } from 'vue';

// Dummy component for the router to use
const Dummy = defineComponent({ template: '<div>dummy</div>' });

// Create a router instance for testing
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Dummy },
    { path: '/login', component: Dummy },
    { path: '/dashboard', component: Dummy },
    { path: '/query', component: Dummy },
    { path: '/register', component: Dummy }
  ]
});

describe('NavBar', () => {
  it('renders the navigation links', async () => {
    const wrapper = mount(NavBar, {
      global: {
        plugins: [router],
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    });

    await router.isReady();

    expect(wrapper.find('.navbar-brand').text()).toBe('Cardiomyopathy');

    const links = wrapper.findAllComponents(RouterLinkStub);
    expect(links.length).toBe(5);

    expect(links[1].text()).toBe('Login');
    expect(links[1].props().to).toBe('/login');

    expect(links[2].text()).toBe('Dashboard');
    expect(links[2].props().to).toBe('/dashboard');

    expect(links[3].text()).toBe('Query');
    expect(links[3].props().to).toBe('/query');

    expect(links[4].text()).toBe('Register');
    expect(links[4].props().to).toBe('/register');
  });
});