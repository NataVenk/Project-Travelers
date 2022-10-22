/*var token = "mhuWcD134lkonJZ5ReVKkMI2E-lYHMeMDPiRzTZRgPNtKGOm9M79jqBftquBbzRH3Elzsb9yqql3UQtl6c3cruBF2dwi4NXkmrIzXl70oHJJqVSHc8bNypedbilLY3Yx"
// https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972/

function getApi() {

    //var requestUrl = 'https://api.yelp.com/v3/businesses/search';
    var requestUrl = "https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972"
     fetch(requestUrl, {
      headers: {
        method: 'GET',
        Authorization: 'Bearer token'
      }
    })
     //Waiting to get the response
       .then(function (response) {
         return response.json();
       })
       .then(function (data) {
        console.log(data);
        });
    
    }
    getApi();

    // https://api.yelp.com/v3/businesses/search*/
//(document). URL(function(){

var url = "https://api.yelp.com/v3/businesses/search";
var API_KEY =
  "mhuWcD134lkonJZ5ReVKkMI2E-lYHMeMDPiRzTZRgPNtKGOm9M79jqBftquBbzRH3Elzsb9yqql3UQtl6c3cruBF2dwi4NXkmrIzXl70oHJJqVSHc8bNypedbilLY3Yx";
var corsUrl = "https://cors-anywhere.herokuapp.com";
/*
var req = new Request(url, {
  method: "GET",
  headers: new Headers({
    Authorization: "Bearer " + API_KEY,
    "Content-Type": "application/json",
  }),
  mode: "no-cors",
});

fetch(req)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Resource not found " + response.toString());
    }
  })
  .then((jsonData) => {
    console.log(jsonData);
  })
  .catch((err) => {
    console.log("ERROR: ", err.message);
  });
//})
*/

//var fullUrl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";

function searchHotel() {
  var zipcode = document.getElementById("hotelZipcode").value;
  var req = {
    url: corsUrl + "/" + url,
    data: {
      term: "Hotel",
      location: zipcode,
    },
    headers: {
      Authorization: "Bearer " + API_KEY,
    },
  };
  $.ajax(req).done(function (response) {
    var businesses = response["businesses"];
    var searchResultsElement = document.getElementById("searchResults");
    searchResultsElement.innerHTML="";
    for (let i = 0; i < businesses.length; i++) {
      let business = businesses[i];
      console.log(business);
      let divElement = document.createElement("div");

      let businessNameElement = document.createElement("h3");
      businessNameElement.innerText=business["name"];
      divElement.appendChild(businessNameElement);

      let businessPhoneElement=document.createElement("h6");
      businessPhoneElement.innerText=business["display_phone"];
      divElement.appendChild(businessPhoneElement);

      let businessAddressElement=document.createElement("p");
      businessAddressElement.innerText=business["location"]["address1"] + " " + business["location"]["city"] +" "+ business["location"]["state"] +" "+ business["location"]["zip_code"];
      divElement.appendChild(businessAddressElement);


      searchResultsElement.appendChild(divElement);
    }
  });
}
