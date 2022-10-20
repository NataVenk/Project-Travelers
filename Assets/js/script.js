
function getApi() {

    var requestUrl = '';
    
     fetch(requestUrl)
     //Waiting to get the response
       .then(function (response) {
         return response.json();
       })
       .then(function (data) {
        console.log(data);
        });
    
    }
    getApi();