$(document).ready(function() {
    var api = 'https://rtbdemand.apiip.net/api/check?accessKey=7ef45bac-167a-4aa8-8c99-bc8a28f80bc5';

    // Fetch data 
    $.ajax({
        url: api,
        type: 'GET',
        success: function(data) {

            var countryInfo = '';
            countryInfo += '<p>Country Name: ' + data.countryName + '</p>';
            countryInfo += '<p>Capital: ' + data.capital + '</p>';
            countryInfo += '<p>Currency: ' + data.currency.name + ' (' + data.currency.code + ')' + '</p>';
            countryInfo += '<p>Time Zone: ' + data.timeZone.timeZoneName + '</p>';
          
            $('#country').html(countryInfo);

        },
        error: function(xhr, status, error) {
            console.log('Error :', error);
        }
    });
  
  });
  