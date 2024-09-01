document.getElementById('burgerBtn').addEventListener('click', function() {
	const burgerContainer = document.getElementById('burger-container');
	const icon = document.getElementById('burgerIcon');
	// Toggle the visibility of the div
	burgerContainer.classList.toggle('d-none');
	// Toggle between the bars and X icon
	if (burgerContainer.classList.contains('d-none')) {
		icon.classList.remove('fa-times');
		icon.classList.add('fa-bars');
	} else {
		icon.classList.remove('fa-bars');
		icon.classList.add('fa-times');
	}
});