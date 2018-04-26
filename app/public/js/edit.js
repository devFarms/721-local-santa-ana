$(document).ready(function() {

// Gets an optional query string from our url (i.e. ?post_id=23)
var url = window.location.search;
var postId;
// Sets a flag for whether or not we're updating a post to be false initially
var updating = false;

// If we have this section in our url, we pull out the post id from the url
// In localhost:8080/cms?post_id=1, postId is 1
if (url.indexOf("?seiu_personal_id=") !== -1) {
  postId = url.split("=")[1];
  getPersonalInfo(postId);
  console.log(postId);
}

   var firstName = $("#first_name");
   var lastName = $("#last_name");
   var streetAddress = $("#street_address");
   var homeEmail = $("#home_email");
   var homePhone = $("#home_phone");
    
    // Gets post data for a post if we're editing
    function getPersonalInfo(seiu_personal_id) {
      $.get("/api/all/" + seiu_personal_id, function(data) {
        if (data) {
          // If this post exists, prefill our cms forms with its data
          firstName.val(data.seiu_personal_first_name);
          lastName.val(data.seiu_personal_last_name);
          streetAddress.val(data.seiu_personal_home_address);
          homeEmail.val(data.seiu_personal_home_email);
          homePhone.val(data.seiu_personal_home_phone);
          // If we have a post with this id, set a flag for us to know to update the post
          // when we hit submit
          updating = true;
          console.log(data);
         }
      });
    }

});