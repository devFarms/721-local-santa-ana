$(document).ready(function() {

  var firstName = $("#first_name");
  
    
    // Gets post data for a post if we're editing
    function getPersonalInfo(seiu_personal_id) {
      $.get("/api/all/" + 285, function(data) {
        //if (data) {
          // If this post exists, prefill our cms forms with its data
          //firstName.val(data.first_name);
          // If we have a post with this id, set a flag for us to know to update the post
          // when we hit submit
          //updating = true;
          console.log(data);
        // }
      });
    }

  });