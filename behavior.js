function ExampleBehavior () {
  this.initialize();
}

ExampleBehavior.prototype = {}
  initialize: function () {
    var self = this;
    this.sayHello();

    $("#bands li").click(function() {
  console.log("form was submitted");
      self.removeArtist(this);
    $("#add-band").submit (function() {
      return false;
    });
},
sayHello: function () {
  console.log("Here I am, come find me.");
};
removeArtist: function (li) {
  $(li).hide();
}
  };
  addArtistFromForm: function () {
    var artist = $("#add-band input [name='band']").val();
    console.log("new artist is:" + artist);
  }
  };

$(document).ready(function () {
  new ExampleBehavior();
});
