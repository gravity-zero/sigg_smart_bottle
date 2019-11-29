/*Script formulaire - Start*/
/*Formulaire 1*/
var color1=document.getElementById('color1');
var color2=document.getElementById('color2');
var color3=document.getElementById('color3');

color1.addEventListener('click', function () {
  color1.classList.add('selection');
  color2.classList.remove('selection');
  color3.classList.remove('selection');
});

color2.addEventListener('click', function () {
  color2.classList.add('selection');
  color1.classList.remove('selection');
  color3.classList.remove('selection');
});

color3.addEventListener('click', function () {
  color3.classList.add('selection');
  color2.classList.remove('selection');
  color1.classList.remove('selection');
});
/* Formulaire 2 */
var Contenance500ml=document.getElementById('Contenance500ml');
var Contenance750ml=document.getElementById('Contenance750ml');


Contenance500ml.addEventListener('click', function () {
  Contenance500ml.classList.add('selection');
  Contenance750ml.classList.remove('selection');
});

Contenance750ml.addEventListener('click', function () {
  Contenance750ml.classList.add('selection');
  Contenance500ml.classList.remove('selection');
});

/*Formulaire 3*/
var option1=document.getElementById('option1');
var option2=document.getElementById('option2');


option1.addEventListener('click', function () {
  option1.classList.add('selection2');
});

option2.addEventListener('click', function () {
  option2.classList.add('selection2');
});

/*Script formulaire - End*/