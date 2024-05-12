function toggleMenu() {
	const icon = document.querySelector('#menu-icon')
	const links = document.querySelector('.hamburger-links')

	if (window.innerWidth <= 1200) {
		if (icon.classList == 'bi bi-list') {
			icon.classList = 'bi bi-x-lg'
			links.style.display = 'table-column'
		} else {
			icon.classList = 'bi bi-list'
			links.style.display = 'none'
		}
	}
}
