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
    $('#people').append('<tr><td>' + peopleData[i].cosa_seiu_first_name + ' ' + peopleData[i].cosa_seiu_last_name + '</td><td>' + peopleData[i].cosa_seiu_work_title + '</td><td>' + peopleData[i].cosa_seiu_work_unit + '</td><td>' + peopleData[i].cosa_seiu_work_location + '<td><a class="light-blue darken-2 btn" href="/edit?cosa_seiu_id=' + peopleData[i].cosa_seiu_id + '"><i class="large material-icons">edit</i></a></td></tr>')
};

function searchFilter() {
    // Declare variables 
    var input, filter, table, tr, td, j;
    input = document.getElementById("autocomplete-input");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (j = 0; j < tr.length; j++) {
      td = tr[j].getElementsByTagName("td")[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[j].style.display = "";
        } else {
          tr[j].style.display = "none";
        }
      } 
    }
  }