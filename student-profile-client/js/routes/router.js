directory.Router = Backbone.Router.extend({
  routes: {
    "": "home",
    "student/id": "studentDetails" 
  },
  initialize: function(){
    directory.shellView = new directory.ShellView();
    $('body').html(directory.shellView.render().el);
    $('body').click(function(){
      console.log('body clicked')
      $('.dropdown').removeClass('open');
    })
    this.content = $('#content');
  },
  home: function(){
    directory.homelView = new directory.HomeView();
    this.content.html(directory.homelView.render().el);
  }
})