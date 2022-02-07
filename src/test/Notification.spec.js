import Notification from '../components/Notification';
import Vue from 'vue'



describe('Notification.vue', () => {


      it('should be see objects and it should be work correctly', () => {

        const container = document.createElement('div');
        const NotificationComponent = Vue.extend(Notification) 

        const viewModel = new NotificationComponent ({
            propsData: {
                title: "title Msg",
                isNotificationActive: true,
                itemName: "foo"
            }
        });
        viewModel.$mount(container);
      });

} )