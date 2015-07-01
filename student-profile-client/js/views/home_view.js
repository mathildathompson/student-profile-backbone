directory.HomeView = Backbone.View.extend({
  initialize: function(){
    this.template = _.template($('#home-view').html());
  },
  events: {

  },
  render: function(){
    this.$el.html(this.template());
    return this;
  }
})