const scroll0 = document.querySelector('.btn0');
const section0 = document.querySelector('#home-map');
scroll0.addEventListener('click', function(e) {
	e.preventDefault();
	section0.scrollIntoView({ behavior: 'smooth'});
});

const scroll1 = document.querySelector('.btn1');
const section1 = document.querySelector('#monte-roraima');
scroll1.addEventListener('click', function(e) {
	e.preventDefault();
	section1.scrollIntoView({ behavior: 'smooth'});
});

const scroll2 = document.querySelector('.btn2');
const section2 = document.querySelector('#safari-amazonico');
scroll2.addEventListener('click', function(e) {
	e.preventDefault();
	section2.scrollIntoView({ behavior: 'smooth'});
});

const scroll3 = document.querySelector('.btn3');
const section3 = document.querySelector('#gran-sabana');
scroll3.addEventListener('click', function(e) {
	e.preventDefault();
	section3.scrollIntoView({ behavior: 'smooth'});
});

const scroll4 = document.querySelector('.btn4');
const section4 = document.querySelector('#sobre');
scroll4.addEventListener('click', function(e) {
	e.preventDefault();
	section4.scrollIntoView({ behavior: 'smooth'});
});
