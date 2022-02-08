import Notification from '../../src/components/Notification';
import Vue from 'vue'

describe('Modal.vue', () => {
    const container = document.createElement('div');
    const NotificationComponent = Vue.extend(Notification) 
    const viewModel = new NotificationComponent ({
        propsData: {
          notificationObj: {item: 'foo'}
        }
    });

      it('should be render and work', () => {
        viewModel.$mount(container);
        expect(viewModel.notificationObj.item).toEqual('foo');
      });

})