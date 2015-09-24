import DS from 'ember-data';

export default DS.Model.extend({
  post: DS.belongsTo('post', {async: true}),
  content: DS.attr(),
  name: DS.attr()
});
