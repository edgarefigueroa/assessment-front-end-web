function handleSubmit(evt) {
	evt.preventDefault();

	alert('That is an awsome place!');
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

//display alert function
function favColor(evt) {
	evt.preventDefault();

	alert('Green!');
}

//display alert arrow function
const favPlace = () => alert(`Puerto Vallarta!`)
const favRitual = () => alert(`Walking`)

let favColorBtn  = document.querySelector('#color')
let favPlaceBtn  = document.querySelector('#place')
let favRitualBtn  = document.querySelector('#ritual')

favColorBtn.addEventListener('click', favColor)
favPlaceBtn.addEventListener('click', favPlace)
favRitualBtn.addEventListener('click', favRitual)