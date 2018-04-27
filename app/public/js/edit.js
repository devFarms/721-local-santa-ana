$(document).ready(function() {

// Gets an optional query string from our url (i.e. ?post_id=23)
var url = window.location.search;
var postId;
// Sets a flag for whether or not we're updating a post to be false initially
var updating = false;

// If we have this section in our url, we pull out the post id from the url
// In localhost:8080/cms?post_id=1, postId is 1
if (url.indexOf("?cosa_seiu_id=") !== -1) {
  postId = url.split("=")[1];
  getPersonalInfo(postId);
  console.log("postID: " + postId);
}

   var firstName = $("#first_name");
   var lastName = $("#last_name");
   var workEmail = $("#work_email");
   var workPhone = $("#work_phone");
   var workTitle = $("#work_title");
   var streetAddress = $("#street_address");
   var homeEmail = $("#home_email");
   var homePhone = $("#home_phone");
   var cellPhone = $("#cell_phone");
    
    // Gets post data for a post if we're editing
    function getPersonalInfo(cosa_seiu_id) {
      $.get("/api/people/" + cosa_seiu_id, function(data) {
        if (data) {
          // If this post exists, prefill our cms forms with its data
          firstName.val(data.cosa_seiu_first_name);
          lastName.val(data.cosa_seiu_last_name);
          workEmail.val(data.cosa_seiu_work_email);
          workPhone.val(data.cosa_seiu_work_phone);
          workTitle.val(data.cosa_seiu_work_title);
          streetAddress.val(data.cosa_seiu_home_address);
          homeEmail.val(data.cosa_seiu_home_email);
          homePhone.val(data.cosa_seiu_home_phone);
          cellPhone.val(data.cosa_seiu_cell_phone);
          // If we have a post with this id, set a flag for us to know to update the post
          // when we hit submit
          updating = true;
          console.log("Data: ", data);
         }
      });
    }

});