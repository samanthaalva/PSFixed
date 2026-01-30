const btnElement = document.querySelector('#hamburgerBtn');
const navElement = document.querySelector('#primaryNav');

btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open');
    navElement.classList.toggle('active');
})



const currentYear = new Date ();
document.querySelector('#year').textContent = currentYear.getFullYear();