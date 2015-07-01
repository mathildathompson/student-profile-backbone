directory.StudentListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'nav nav-list',
  initialize: function(){
    var self = this;
    this.collection.on('reset', this.render, this);
    // this.model.on('')
  },
  render: function(){
    this.$el.empty();
    _.each(this.collection.models, function(student){
      this.$el.append(new directory.StudentListItemView({model: student}).render().el)
    }, this)
    return this;
  }
})