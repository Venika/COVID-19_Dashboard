let total = document.getElementById("total_case");
let death = document.getElementById("total_death");
let recovered = document.getElementById("total_recovered");

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://coronavirus-19-api.herokuapp.com/all",
	"method": "GET",
};

$.ajax(settings).done(function (response) {
	console.log(response);
	total.innerHTML = response.cases;
    death.innerHTML = response.deaths;
    recovered.innerHTML = response.recovered;
});


