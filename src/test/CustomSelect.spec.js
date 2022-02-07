import CustomSelect from '../components/CustomSelect';
import {shallowMount} from '@vue/test-utils'
import Vue from 'vue'

describe('CustomSelect.vue', () => {
    const wrapper = shallowMount(CustomSelect)

    it('should be render a div', () => {
        expect(wrapper.contains('div')).toBe(true)
      });

      it('should be see options and it should be work correctly', () => {

        const container = document.createElement('div');
        const CustomSelectComponent = Vue.extend(CustomSelect) 
        const viewModel = new CustomSelectComponent ({
            propsData: {
                options: [
                    {value: 'val1', text: 'val1text'},
                    {value: 'val2', text: 'val2text'},
                    {value: 'val3', text: 'val3text'},
                    {value: 'val4', text: 'val4text'}
                ]
            }
        });
        viewModel.$mount(container);
        expect(viewModel.options.length).toEqual(4);
        expect(viewModel.$el.querySelectorAll('option').length).toEqual(5);
      });

    it('should be custom-select class', () => {
        expect(wrapper.classes()).toContain('custom-select');
    });


} )

