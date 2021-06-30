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
});
