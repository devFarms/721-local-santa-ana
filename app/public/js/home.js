$.get("/api/home", function(data) {
    for (i = 0; i <data.length; i++){
        // console.log(data[i].seiu_personal_first_name + ' ' + data[i].seiu_personal_last_name);
        // console.log(data[i].seiu_personal_email_address);
        // console.log('\n');
        $('#home-info').append('<a href="/api/home/' + data[i].seiu_personal_id + '"><div class="col s12 l4"><div class="card blue-grey darken-1 sm12 m6 xl3">' + 
                                    '<div class="card-content white-text"><span class="card-title">' + data[i].seiu_personal_first_name + ' ' + data[i].seiu_personal_last_name + '</span>' +
                                    '<p>' + data[i].seiu_personal_email_address + '</p></div></div></div></a>');
    }
      // This function grabs posts from the database and updates the view
});