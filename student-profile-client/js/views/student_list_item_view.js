directory.StudentListItemView = Backbone.View.extend({
  tagName: 'li',
  initialize: function(){
    this.template = _.template($('#student-list-item-view').html());
  },
  render: function(){
    this.$el.html(this.template(this.model));
    return this;
  }
})