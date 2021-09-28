let actionBtn = document.querySelector("#search")
 
//Add an event listener to the button that runs the function sendApiRequest when it is clicked
actionBtn.addEventListener("click", () => {
    console.log("button pressed")
    sendApiRequest()
})

//Display current location 

if(navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(displayPos);
    
    function displayPos(HereNow){
    document.querySelector('#location').innerHTML += "Longitude = " + HereNow.coords.longitude + "<br> Latitude = " + HereNow.coords.latitude;
    }

}
//c2dKFonTx4T84JJiSZh679rzwwfcPJxLv6RyFXcz

//An asynchronous function to fetch data from the API.
async function sendApiRequest() {
    let API_KEY = "c2dKFonTx4T84JJiSZh679rzwwfcPJxLv6RyFXcz";
    let response = await fetch(`https://eonet.sci.gsfc.nasa.gov/api/v3/events/geojson?limit=10`);
    console.log(response);
    let data = response.json();
    console.log(data);
    
    fetch(`https://eonet.sci.gsfc.nasa.gov/api/v3/events/geojson?limit=5`)
         .then(response => response.json())
         .then(data => useApiData(data));
}
 
 
//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data) {
    
    for(var i=0;i<20;i++){
    document.querySelector("#content").innerHTML +="<td>" + data.features[i].geometry.coordinates[0] +" , "+ data.features[i].geometry.coordinates[1] + 
    "</td><td> "+ data.features[i].properties.categories[0].title +"</td> <td>" + data.features[i].properties.date + "</td>" ;
    }
}