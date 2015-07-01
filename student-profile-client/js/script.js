var directory = {};

$(document).ready(function(){
  //Creating a new router instance
  directory.router = new directory.Router();
  Backbone.history.start();
})