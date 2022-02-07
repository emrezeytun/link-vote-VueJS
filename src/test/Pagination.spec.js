import Pagination from '../components/Pagination';
import {shallowMount} from '@vue/test-utils'
import Vue from 'vue'

describe('Pagination.vue', () => {
    const wrapper = shallowMount(Pagination)
      it('should be see options and it should be work correctly', () => {
        const container = document.createElement('div');
        const PaginationComponent = Vue.extend(Pagination) 
        const viewModel = new PaginationComponent ({
            propsData: {
                pagination: {splitSize: 5, currentPage: 1, arrLength: 18, pageSize: 4 }
            }
        });
        viewModel.$mount(container);
        expect(viewModel.pagination.length).toEqual(1);
        expect(viewModel.$el.querySelectorAll('.disabled').length).toEqual(1);
        expect(viewModel.$el.querySelectorAll('.paginationItem').length).toEqual(20);
      });

    it('should be custom-select class', () => {
        expect(wrapper.classes()).toContain('pagination');
    });
} )