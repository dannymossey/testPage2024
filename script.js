
const barOne = document.getElementById('bar-one');
const hamburger = document.getElementById('hamburger').addEventListener('click', function() {
  let navItems = document.getElementById('navigation-items').classList.toggle('active');
  // let navClass = document.querySelector('.navigation-items');
  barOne.classList.toggle('active');
  // navClass.classList.add('fade-in');
 



});


