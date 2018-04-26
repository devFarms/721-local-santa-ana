var homeData = (function () {
    var homeData = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': '/api/home',
        'dataType': "json",
        'success': function (data) {
            homeData = data;
        }
    });
    return homeData;
})(); 

var cosaData = (function () {
    var cosaData = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': '/api/cosa',
        'dataType': "json",
        'success': function (data) {
            cosaData = data;
        }
    });
    return cosaData;
})();

for ( h = 0; h < homeData.length; h++ ){

    var nameCounter = 0;
    
    for ( c = 0; c < cosaData.length; c++){
        
        // var nameChecker = homeData[h].seiu_personal_last_name+homeData[h].seiu_personal_first_name;
        
        if (homeData[h].seiu_personal_last_name === cosaData[c].seiu_city_email_last_name && homeData[h].seiu_personal_first_name === cosaData[c].seiu_city_email_first_name ){
                $('#match').append(homeData[h].seiu_personal_last_name + ',' + homeData[h].seiu_personal_first_name + ',' + cosaData[c].seiu_city_email_email_address + ',' + homeData[h].seiu_personal_work_phone + ',' + homeData[h].seiu_personal_email_address + ',' + homeData[h].seiu_personal_home_phone + ',' + homeData[h].seiu_personal_cell_phone + ',' + homeData[h].seiu_personal_home_address + ';<br />' )
            } else {
                nameCounter++;
                if (nameCounter === 527){
                    $('#no-match').append(homeData[h].seiu_personal_last_name + ',' + homeData[h].seiu_personal_first_name + ',' + homeData[h].seiu_personal_work_phone + ',' + homeData[h].seiu_personal_email_address + ',' + homeData[h].seiu_personal_home_phone + ',' + homeData[h].seiu_personal_cell_phone + ',' + homeData[h].seiu_personal_home_address + ';<br />');
                } else { };
        };

    };

};

$(document).on("click", "button.edit", handlePostEdit);

  // This function figures out which person we want to edit and takes it to the
  // Appropriate url
  function handlePostEdit() {
    var currentPerson = $(this)
      .parent()
      .parent()
      .data("post");
    // window.location.href = "/edit?post_id=" + currentPost.id;
    window.location.href = "/edit?seiu_personal_id=" + currentPerson.seiu_personal_id;
  }
