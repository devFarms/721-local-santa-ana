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
                $('#match').append('<a href="/edit/' + homeData[h].seiu_personal_id + '"><div class="col s12 l4"><div class="card green sm12 m6 xl3">' + 
                '<div class="card-content white-text"><span class="card-title">' + homeData[h].seiu_personal_first_name + ' ' + homeData[h].seiu_personal_last_name + '</span>' +
                '<p>Work Email: ' + cosaData[c].seiu_city_email_email_address + '</p><p>Work Phone: ' + homeData[h].seiu_personal_work_phone + '</p><p>Personal Email: ' + homeData[h].seiu_personal_email_address + '</p><p>Home phone: ' + homeData[h].seiu_personal_home_phone + '<p>Cell Phone: ' + homeData[h].seiu_personal_cell_phone + '</p><p>Home Address: ' + homeData[h].seiu_personal_home_address + '<p>&nbsp;</p><p></p></div></div></div></a>' )
            } else {
                nameCounter++;
                if (nameCounter === 527){
                    $('#no-match').append('<a href="/edit/' + homeData[h].seiu_personal_id + '"><div class="col s12 l4"><div class="card red sm12 m6 xl3">' + 
                    '<div class="card-content white-text"><span class="card-title">' + homeData[h].seiu_personal_first_name + ' ' + homeData[h].seiu_personal_last_name + '</span>' +
                    '<p>Work Phone: ' + homeData[h].seiu_personal_work_phone + '</p><p>Personal Email: ' + homeData[h].seiu_personal_email_address + '</p><p>Home phone: ' + homeData[h].seiu_personal_home_phone + '<p>Cell Phone: ' + homeData[h].seiu_personal_cell_phone + '</p><p>Home Address: ' + homeData[h].seiu_personal_home_address + '<p>&nbsp;</p><p></p></div></div></div></a>');
                } else { };
        };

    };

};