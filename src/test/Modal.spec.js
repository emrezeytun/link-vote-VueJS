import Modal from '../components/Modal';
import {shallowMount} from '@vue/test-utils'
import Vue from 'vue'

describe('Modal.vue', () => {

    
      it('should be see objects and it should be work correctly', () => {

        const container = document.createElement('div');
        const ModalComponent = Vue.extend(Modal) 
        
        const viewModel = new ModalComponent ({
            propsData: {
                linkObj: [
                   {count: 20,
                    date: 1644153449475,
                    id: "someid",
                    linkName: "name of link",
                    linkUrl: "https://foo.com",}
                ],
                modalStatus: true
            }
        });
        viewModel.$mount(container);
        expect(viewModel.linkObj.length).toEqual(1);
        expect(viewModel.$el.querySelectorAll('button').length).toEqual(2);
      });

} )