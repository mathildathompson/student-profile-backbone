directory.StudentListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'nav nav-list',
  initialize: function(){

  },
  render: function(){
    this.$el.empty();
    _.each(this.collection.models, function(student){
      this.$el.append(new directory.StudentListItemView({model: student}).render().el)
    }, this)
    return this;
  }
})