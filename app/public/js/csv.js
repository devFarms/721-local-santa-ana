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
    $('#people').append(peopleData[i].cosa_seiu_last_name + ',' + peopleData[i].cosa_seiu_first_name + ',' + peopleData[i].cosa_seiu_work_title + ',' + peopleData[i].cosa_seiu_work_unit + ',' + peopleData[i].cosa_seiu_work_location + '<br />')
};