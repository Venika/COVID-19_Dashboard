let total = document.getElementById("total_case");
let death = document.getElementById("total_death");
let recovered = document.getElementById("total_recovered");
let active = document.getElementById("active_case");

//To add commas so that numbers are more readable
function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

//Appends values to the country list
function addelement(value, valuecases, valuerecovered, valueact, valuedeaths) {
	var ul= document.getElementById("thelist");
	var li= document.createElement("li");
	var p= document.createElement("h6");
	var linebreak = document.createElement('br');
	var linebreak1 = document.createElement('br');
	var linebreak2 = document.createElement('br');

	li.appendChild(document.createTextNode(value+":"+valuecases));
	p.appendChild(document.createTextNode("Total cases: "+valuecases));
	p.appendChild(linebreak);
	p.appendChild(document.createTextNode("Recovered: "+valuerecovered));
	p.appendChild(linebreak1);
	p.appendChild(document.createTextNode("Active: "+valueact));
	p.appendChild(linebreak2);
	p.appendChild(document.createTextNode("Death: "+valuedeaths));
	li.appendChild(p);
	ul.appendChild(li);
}

//API that gets the JSON data
const country = {
	"async": true,
	"crossDomain": true,
	"url": "https://coronavirus-19-api.herokuapp.com/countries",
	"method": "GET",
};

$.ajax(country).done(function (response) {
	total.innerHTML = numberWithCommas(response[0].cases);
    death.innerHTML = numberWithCommas(response[0].deaths);
	recovered.innerHTML = numberWithCommas(response[0].recovered);
	active.innerHTML = numberWithCommas(response[0].active);
    for(i=1;i<219;i++){
		console.log(response[i]);	
		var concountry=response[i].country;	
		if(response[i].cases!=null){
			var concases= numberWithCommas(response[i].cases);
		}
		else var concases=0;

		if(response[i].recovered!=null){
			var conrecovered= numberWithCommas(response[i].recovered);
		}
		else conrecovered=0;

		if(response[i].active!=null){
			var conactive= numberWithCommas(response[i].active);
		}
		else conactive=0;
		
		if(response[i].deaths!=null){
			var condeaths= numberWithCommas(response[i].deaths);
		}
		else condeaths=0;

		// var concountry=response[i].country;
		// var concases= numberWithCommas(response[i].cases);
		// var conrecovered= numberWithCommas(response[i].recovered);
		// var conactive= numberWithCommas(response[i].active);
		// var condeaths= numberWithCommas(response[i].deaths);
		addelement(concountry, concases, conrecovered, conactive, condeaths);
    }
});

