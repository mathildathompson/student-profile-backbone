directory.StudentView = Backbone.View.extend({
  initialize: function(){
    this.template = _.template($('#student-view').html());
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
})