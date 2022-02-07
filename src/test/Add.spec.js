import Add from '../views/Add';
import Vue from 'vue'

describe('Add.vue', () => {
      it('should be see objects and it should be work correctly', () => {
        const container = document.createElement('div');
        const AddComponents = Vue.extend(Add) 
        const viewModel = new AddComponents ();
        viewModel.$mount(container);
        expect(viewModel.linkObj.length).toEqual(1);
        expect(viewModel.$el.querySelectorAll('button').length).toEqual(2);
      });

} )