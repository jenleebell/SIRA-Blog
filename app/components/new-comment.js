import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    saveComment() {
      var params = {
        content: this.get('content'),
        name: this.get('name'),
        post: this.get('post')
      };
      debugger;
      this.sendAction('saveComment', params);
    }
  }
});
