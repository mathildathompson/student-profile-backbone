directory.Router = Backbone.Router.extend({
  routes: {
    "": "home",
    "student/id": "studentDetails" 
  },
  initialize: function(){
    directory.shellView = new directory.ShellView();
    $('body').html(directory.shellView.render().el);
    this.content = $('#content');
  },
  home: function(){
    //render the home page
  }
})