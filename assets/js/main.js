const openMenuButton = document.getElementById('openMenu');
const closeMenuButton = document.getElementById('closeMenu');
const menu = document.getElementById('menu');
const backButton = document.getElementById('burger');


function toggleMenu() {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    menu.classList.add('block');
    backButton.classList.add('bg-separator');
  } else {
    menu.classList.remove('block');
    menu.classList.add('hidden');
    backButton.classList.remove('bg-separator');
  }
}

openMenuButton.addEventListener('click', toggleMenu);

closeMenuButton.addEventListener('click', () => {
  menu.classList.remove('block');
  menu.classList.add('hidden');
  backButton.classList.remove('bg-separator');
});