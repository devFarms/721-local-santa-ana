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
                $('#match').append('<div class="col s12 l4"><div class="card green sm12 m6 xl3">' + 
                '<div class="card-content white-text"><span class="card-title">' + homeData[h].seiu_personal_first_name + ' ' + homeData[h].seiu_personal_last_name + '</span>' +
                '<p>' + homeData[h].seiu_personal_email_address + '</p><p>' + cosaData[c].seiu_city_email_email_address + '</p><p>&nbsp;</p><p><a class="btn green darken-4">button</a></p></div></div></div>' )
            } else {
                nameCounter++;
                if (nameCounter === 527){
                    $('#no-match').append('<div class="col s12 l4"><div class="card red sm12 m6 xl3">' + 
                    '<div class="card-content white-text"><span class="card-title">' + homeData[h].seiu_personal_first_name + ' ' + homeData[h].seiu_personal_last_name + '</span>' +
                    '<p><a class="btn red darken-4">button</a></p></div></div></div>');
                } else { };
        };

    };

};