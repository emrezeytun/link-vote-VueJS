import CustomSelect from '../../src/components/CustomSelect';
import Vue from 'vue'

describe('CustomSelect.vue', () => {
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
      it('should be see objects and it should be work correctly', () => {
        viewModel.$mount(container);
        expect(viewModel.options.length).toEqual(4);
      });

      it('should be see all option element with extra 1 default option', () => {
        viewModel.$mount(container);
        expect(viewModel.$el.querySelectorAll('option').length).toEqual(5);
      });

})