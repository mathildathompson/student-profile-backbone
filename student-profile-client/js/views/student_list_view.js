directory.StudentListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'nav nav-list',
  initialize: function(){

  },
  render: function(){
    this.$el.empty();
    var _this = this
    this.collection.fetch({
      success: function(collection, response, options) {
        _.each(response, function(student){
          _this.$el.append(new directory.StudentListItemView({model: student}).render().el);
        }, _this);
        return this;
      },
      error: function(error, response, options) {
        console.log(error);
      }
    })
    
  }
})