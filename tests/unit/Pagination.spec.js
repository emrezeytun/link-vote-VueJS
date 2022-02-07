import Pagination from '../../src/components/Pagination';
import Vue from 'vue'

describe('Modal.vue', () => {
    const container = document.createElement('div');
    const PaginationComponent = Vue.extend(Pagination) 
    const viewModel = new PaginationComponent ({
        propsData: {
            pagination: [{splitSize: 5, currentPage: 1, arrLength: 8, pageSize: 2 }]
        }
    });
     it('should be see objects and it should be work correctly', () => {
        viewModel.$mount(container);
        expect(viewModel.pagination.length).toEqual(1);
      });

      it('should be correct page size', () => {
        viewModel.$mount(container);
        expect(viewModel.$el.querySelectorAll('.paginationItem').length).toEqual(2);
      });

})