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

for ( c = 0; c < cosaData.length; c++){
    
    for ( h = 0; h < homeData.length; h++ ){

        if (homeData[h].seiu_personal_last_name === cosaData[c].seiu_city_email_last_name && homeData[h].seiu_personal_first_name === cosaData[c].seiu_city_email_first_name ){
                $('#all-people').append('<div class="col s12 l4"><div class="card blue-grey darken-1 sm12 m6 xl3">' + 
                '<div class="card-content white-text"><span class="card-title">' + homeData[h].seiu_personal_first_name + ' ' + homeData[h].seiu_personal_last_name + '</span>' +
                '<p>' + homeData[h].seiu_personal_email_address + '</p><p>' + cosaData[c].seiu_city_email_email_address + '</p></div></div></div>' )
            } else {
                console.log("No match.")
        };

    };
};