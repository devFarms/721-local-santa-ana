$(document).ready(function() {

// Gets an optional query string from our url (i.e. ?post_id=23)
var url = window.location.search;
var memberId;

// Sets a flag for whether or not we're updating a post to be false initially
var updating = false;

// If we have this section in our url, we pull out the post id from the url
// In localhost:3000/edit?post_id=1, postId is 1
if (url.indexOf("?cosa_seiu_id=") !== -1) {
  memberId = url.split("=")[1];
  getPersonalInfo(memberId);
  console.log("memberId: " + memberId);
}
    var empNumber = $("#employee_number");
    var firstName = $("#first_name");
    var lastName = $("#last_name");
    var workEmail = $("#work_email");
    var workPhone = $("#work_phone");
    var workTitle = $("#work_title");
    var streetAddress = $("#street_address");
    var homeEmail = $("#home_email");
    var homePhone = $("#home_phone");
    var cellPhone = $("#cell_phone");
    // var cmsForm = $("cms_form")

    $("#cms_form").on("submit", function handleFormSubmit(event) {
      event.preventDefault();
      console.log("button worked")

      var updateMember = {
        cosa_seiu_employee_number: empNumber.val().trim()
      }
      
      // console.log("updateMember ID: ", updateMember.cosa_seiu_id);

      function updatePost(updateMember) {
        console.log("updateMember: ", updateMember);
        $.ajax({
          method: "PUT",
          url: "/api/people",
          data: post          
        })
        .done(function() {
          window.location.href = "/edit?cosa_seiu_id=", + updateMember.cosa_seiu_id;
        });
      }
      updatePost();
    });
    
    
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


//     var newMember = {
//       cosa_seiu_employee_number: empNumber.val().trim()
//     };

//     if (updating) {
//       newMember.id = postId;
//       updateMember(newMember);
//     }
//     else {
//       submitMember(newMember);
//     }  
//   });

//   console.log("newMember.id", newMember.id)

  // Update a given post, bring user to the blog page when done
  // function updateMember(post) {
  //   $.ajax({
  //     method: "PUT",
  //     url: "/api/edit",
  //     data: post
  //   })
  //   .done(function() {
  //     window.location.href = "/people";
  //   });
  //   console.log("Post", post)
  // }

 });