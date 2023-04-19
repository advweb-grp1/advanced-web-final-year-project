import { describe, it, expect } from 'vitest';
import NavBar from '../NavBar.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { RouterLinkStub, mount } from '@vue/test-utils';
import { defineComponent } from 'vue';
import { createPinia } from 'pinia'; // Import createPinia

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

// Create a pinia instance
const pinia = createPinia();

describe('NavBar', () => {
  it('renders the navigation links', async () => {
    const wrapper = mount(NavBar, {
      global: {
        plugins: [router, pinia], // Add pinia to the plugins array
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    });

    await router.isReady();

    expect(wrapper.find('.navbar-brand').text()).toBe('Cardiomyopathy');

    const links = wrapper.findAllComponents(RouterLinkStub);
    expect(links.length).toBe(3);

    expect(links[1].text()).toBe('Login');
    expect(links[1].props().to).toBe('/login');

    expect(links[2].text()).toBe('Register');
    expect(links[2].props().to).toBe('/register');

  });
});
