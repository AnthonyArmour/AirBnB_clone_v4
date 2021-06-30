#!/usr/bin/node


$(document).ready(function(){
  let amenities = {};
  $('.amenities li input').click(function (){
    let res;
    if (this.checked === true) {
      amenities[$(this).attr("data-name")] = $(this).attr("data-id");
      res = Object.keys(amenities);
      $('.amenities h4').text(res.join(', '));
    } else {
      delete amenities[$(this).attr("data-name")];
      res = Object.keys(amenities);
      $('.amenities h4').text(res.join(', '));
    }
  });
  $(function() {
    $.getJSON("http://34c43527c6f2.7e5652f1.hbtn-cod.io:5001/api/v1/status/",
      function(data) {
        if (data.status === "OK") {
          $("#api_status").addClass("available");
        } else {
          $("#api_status").removeClass("available");
        }
    });
  });
  $(function() {
    $.ajax({
      url: 'http://34c43527c6f2.7e5652f1.hbtn-cod.io:5001/api/v1/places_search/',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({}),
      success: function(data) {
        for (const place of data) {
          $('.places').append(
            '<article>' +
            '<div class="title_box">' +
            '<h2>' + place.name + '</h2>' +
            '<div class="price_by_night">$' + place.price_by_night + '</div>' +
            '</div>' +
            '<div class="information">' +
            '<div class="max_guest">' + place.max_guest +
            (place.max_guest != 1 ? ' Guests</div>' : ' Guest</div>') +
            '<div class="number_rooms">' + place.number_rooms +
            (place.max_guest != 1 ? ' Bedrooms</div>' : ' Bedroom</div>') +
            '<div class="number_bathrooms">' + place.number_bathrooms +
            (place.max_guest != 1 ? ' Bathrooms</div>' : ' Bathroom</div>') +
            '</div>' +
            '<div class="description">' +
            place.description +
            '</div>' +
            '</article>');
        }
      }
    });
  });
});
