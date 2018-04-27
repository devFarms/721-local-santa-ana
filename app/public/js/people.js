var peopleData = (function () {
    var peopleData = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': '/api/people',
        'dataType': "json",
        'success': function (data) {
            peopleData = data;
        }
    });
    return peopleData;
})(); 


for ( i = 0; i < peopleData.length; i++ ){
    // console.log(peopleData[i].cosa_seiu_first_name);
    $('#people').append('<div class="col s12 l4"><div class="card green sm12 m6 xl3">' + 
    '<div class="card-content white-text"><span class="card-title">' + peopleData[i].cosa_seiu_first_name + ' ' + peopleData[i].cosa_seiu_last_name + '</span><p>' + peopleData[i].cosa_seiu_work_email + '<br />' + peopleData[i].cosa_seiu_work_phone + '<br />' + peopleData[i].cosa_seiu_work_title + ' <br />' + peopleData[i].cosa_seiu_work_unit + '<br />' + peopleData[i].cosa_seiu_work_location + '</p><p>' + peopleData[i].cosa_seiu_home_email + '<br />' + peopleData[i].cosa_seiu_home_phone +'<br />' + peopleData[i].cosa_seiu_cell_phone + '<br />' + peopleData[i].cosa_seiu_home_address + '<br />' + peopleData[i].cosa_seiu_home_city + ', ' + peopleData[i].cosa_seiu_home_zip + '</p></div></div></div>')
};

// $(document).on("click", "button.edit", handlePostEdit);

//   // This function figures out which person we want to edit and takes it to the
//   // Appropriate url
//   function handlePostEdit() {
//     var currentPerson = $(this)
//       .parent()
//       .parent()
//       .data("post");
//     // window.location.href = "/edit?post_id=" + currentPost.id;
//     window.location.href = "/edit?seiu_personal_id=" + currentPerson.seiu_personal_id;
//   }
