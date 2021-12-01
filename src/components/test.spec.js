import { mount } from '@vue/test-utils';
import Component from './component.vue';

describe('Test', () => {
  it('works', () => {
    const w = mount(Component, {
      global: {
        stubs: {
          transition: false,
        },
      },
    });

    w.setProps({
      show: true,
    });
  });
});
