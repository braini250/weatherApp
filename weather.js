



const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);


function setQuery(evt) {
	if (evt.keyCode == 13) {
		getResults(searchbox.value);
		console.log(searchbox.value);
	}
}



function getResults (query) {
	fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchbox.value+'&appid=7f7375214682d38966346c24ce66c8a3')
	.then(weather => {
		return weather.json();
	}).then(displayResults);
}


function displayResults (weather) {
	let city = document.querySelector('.location .city');
	city.innerText = `${weather.name}, ${weather.sys.country}`;


	let now = new Date();
	let date = document.querySelector('.location .date');
	date.innerText = dateBuilder(now);

	let temp = document.querySelector('.current .temp');
	temp.innerHTML = `${Math.round(weather.main.temp)}<span>&ring;C</span>`;



	let weather_el = document.querySelector('.current .weather');
	weather_el.innerText = weather.weather[0].main;


	let hilow = document.querySelector('.hi-low');
    hilow.innerHTML = `${weather.main.temp_min}<span style="font-size:22px;">&ring;C</span> / ${weather.main.temp_max}<span style="font-size:22px;">&ring;C</span>`;

var dataObject = {
 city: `${weather.name}, ${weather.sys.country}`,
  date: dateBuilder(now),
   temp: `${Math.round(weather.main.temp)}<span>&ring;C</span>`,
   weather: weather.weather[0].main };
   hilow: `${weather.main.temp_min}<span style="font-size:22px;">&ring;C</span> / ${weather.main.temp_max}<span style="font-size:22px;">&ring;C</span>`;

   localStorage.setItem('dataObject', JSON.stringify(dataObject));
var retrievedObject = localStorage.getItem('dataObject');
let data;

   data = localStorage.getItem('dataObject');

let cit = document.querySelector('#record .cit');
	cit.innerHTML = "City: " + `${weather.name}, ${weather.sys.country}`;

	let dat = document.querySelector('#record .dat');
	dat.innerHTML ="Date: " + dateBuilder(now);

	let tem = document.querySelector('#record .tem');
	tem.innerHTML ="temp: " +  `${Math.round(weather.main.temp)}<span style="font-size:22px;">&ring;C</span>`;
    

    let weathe = document.querySelector('#record .weathe');
	weathe.innerHTML ="Weather: " + weather.weather[0].main;

 let hilo = document.querySelector('#record .hi-lo');
	hilo.innerHTML ="high / low: " + `${weather.main.temp_min}<span style="font-size:22px;">&ring;C</span> / ${weather.main.temp_max}<span style="font-size:22px;">&ring;C</span>`



















}







	


function dateBuilder (d) {
	let months = ["January", "February", "March", "April","May", "June", "July", "August", "September", "October", "November","December"];
	let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "aturday"];


	let day = days[d.getDay()];
	let date = d.getDate();
	let month = months[d.getMonth()];
	let year = d.getFullYear();


	return `${day} ${date} ${year}`;

}




