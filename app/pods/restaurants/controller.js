import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'per_page'],
  page: 1,
  per_page: 30,

  actions: {
    changePage(page) {
      this.set('page', page);
    }
  }
});
