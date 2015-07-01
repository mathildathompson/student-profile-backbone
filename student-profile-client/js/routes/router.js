directory.Router = Backbone.Router.extend({
  routes: {
    "": "home",
    "students/:id": "studentDetails" 
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
    directory.shellView.selectMenuItem('home-menu');
  },
  studentDetails: function(id){
    var student = new directory.Student({id: id});
    var self = this;
    student.fetch({
      success: function(data){
        self.content.html(new directory.StudentView({model: data}).render().el);
      }
    });
    directory.shellView.selectMenuItem();
  }
})