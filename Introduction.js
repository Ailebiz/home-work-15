document.querySelector('#heading').textContent = ' Introduction to DOM';
document.getElementById('name').textContent = 'Zhana taqyryp';

const hobbies = document.getElementsByClassName('hobby'); 
hobbies[0].innerHTML = '<b>Coding</b>'; 
hobbies[1].innerHTML = '<b>Teaching</b>'; 
hobbies[2].innerHTML = '<b>Reading</b>';