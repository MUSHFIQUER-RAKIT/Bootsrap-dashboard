// navigation search bar java script start

const searchBox = document.querySelector('.search-box');
const searchBtn = document.querySelector('.search-btn');
const search = document.querySelector('.search');
const closeBtn = document.querySelector('.close-btn');

searchBtn.addEventListener('click', function () {
	if (search.classList.contains('active')) {
		searchBox.value = '';
	} else {
		search.classList.add('active');
		searchBox.focus();
	}
});

closeBtn.addEventListener('click', function () {
	search.classList.remove('active');
	search.value = '';
});
// navigation search bar java script END

// navigation DASHBOARD java script start
const dash_btn = document.querySelector('.dash_btn');
dash_btn.addEventListener('click', () => {
	document.querySelector('.big').classList.toggle('expaned');
});
