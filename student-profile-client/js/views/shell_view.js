directory.ShellView = Backbone.View.extend({
  events: {
    "keyup .search-query": "search",
    "keypress .search-query": "onkeypress"
  },
  initialize: function(){
    this.template = _.template($('#shell-template').html());
    //Adding a collection to the shell_view
    this.searchResults = new directory.StudentCollection();
    //Adding a search ResultsView into the shell view
    this.searchResultsView = new directory.StudentListView({collection: this.searchResults, className: 'dropdown-menu'});
    this.searchResults.on('change', this.render(), this);
  },
  render: function(){
    console.log('render called')
    this.$el.html(this.template());
    $('.navbar-search', this.el).append(this.searchResultsView.render().el)
    return this;
  },
  search: function(event){
    var key = $('#searchText').val();
    var _this = this;
    this.searchResults.fetch({
      reset: true,
      data: {name: key}
    });
    setTimeout(function(){
      $('.dropdown').addClass('open');
    })
  },
  onkeypress: function(event){
    console.log(event);
  }
})