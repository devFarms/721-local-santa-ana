$.get("/api/cosa", function(data) {
    for (i = 0; i <data.length; i++){
        console.log(data[i].seiu_city_email_first_name + ' ' + data[i].seiu_city_email_last_name);
        console.log(data[i].seiu_city_email_email_address);
        console.log('\n');
        $('#employee-name').append('<div class="col s12 l4"><div class="card blue-grey darken-1 sm12 m6 xl3">' + 
                                    '<div class="card-content white-text"><span class="card-title">' + data[i].seiu_city_email_first_name + ' ' + data[i].seiu_city_email_last_name + '</span>' +
                                    '<p>' + data[i].seiu_city_email_email_address + '</p></div></div></div>');
    }
});