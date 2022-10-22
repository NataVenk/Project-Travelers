//Elements for the Search bbox
const eventSearchBtn = document.getElementById("eventSearchButton");



//Location Query: City State Zipcode
//Location Query: Zipcode
var city = "";
var state = "";
var zipCode = "";



function getApi() {
$.ajax({
  type:"GET",
  url:"https://app.ticketmaster.com/discovery/v2/events.json?size=5&apikey=py0R2PUglpNwxG6m9eEMZ3w8mp4FGhRO&postalCode=10001",
  async:true,
  dataType: "json",
  success: function(json) {
              console.log(json);
              // Parse the response.
   document.getElementById('output').innerHTML = json;
           },
  error: function(xhr, status, err) {
              // This time, we do not end up here!
           }
});    
}



//Event Listener to get current data from the zipcode
eventSearchBtn.addEventListener("click", getApi());

// https://app.ticketmaster.com/discovery/v2/events.json?size=5&apikey=py0R2PUglpNwxG6m9eEMZ3w8mp4FGhRO&postalCode=10001
//eventSearchBtn.addEventListener("click", getApi());




    
    