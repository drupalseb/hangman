// function that count every second and refresh website

function count() {


// obiekt - zestaw zmiennych, lub cech utworzony według KLASY, przygotowany do przechowywania pewnych atrybutów.
// Date() to obiekt w Javascripcie zawierający: dzień, miesiąc, rok, godzina, minuta, sekunda
  var today = new Date();

//zmienne  które wycągają poszczególne elementy z obiektu

  var day = today.getDate();
  if (day<10) day = "0"+day;
  var month = today.getMonth()+1;
  if (month<10) month = "0"+month;
  var year = today.getFullYear();
  var hour = today.getHours();
  var minute = today.getMinutes();
  if (minute<10) minute="0"+minute;
  var second = today.getSeconds();
  if (second<10) second="0"+second;

// wyświetlanie wyniku kodu w przeglądarce.
  document.getElementById('clock').innerHTML = day + '.' + month + '.' + year + ' | ' + hour + ':' + minute + ':' + second;
// ustawienie odswiezania zegara
  setTimeout('count()', 1000);
}

// Function checking numer in input box

function check() {   // header of function
  // get input field value                                    // body of function
var number = document.getElementById('field').value;    //catcher (uchwyt) document.getElementById('field'). value of got element (value html input from index.html)
 if (number>0) document.getElementById('output').innerHTML = "dodatnia";
 else if (number<0) document.getElementById('output').innerHTML = "ujemna";
 else if (number=="") document.getElementById('output').innerHTML = "wpisz jakąś liczbę";
 else if (number=="0") document.getElementById('output').innerHTML = "zero";
 else document.getElementById('output').innerHTML = "To nie jest liczba";


  // chceck what kind of input number is

  // dispaly correct info


}
function calc() {
  var num1 = document.getElementById('input1').value;
  var num2 = document.getElementById('input2').value;
  var result="";
  if(num1<num2)
  for (i=num1; i<=num2; i++) {
    result = result + i + " ";
  }
  else if (num1>num2)
    for (i=num1; i>=num2; i--) {
      result=result + i + " ";
    }

  document.getElementById('result').innerHTML=result;
if (num1==num2)
      document.getElementById('result').innerHTML="Liczby sa rowne, nie moge obliczyc";
}

//------------SLIDESHOW-----------------

// selection of slide number
var slideNum = Math.floor(Math.random()*5)+1;
var timer1 = 0;
var timer2 = 0;

function setSlide(slideNumber) {
  clearTimeout(timer1);
  clearTimeout(timer2);
  slideNum = slideNumber-1;
  hide();
  setTimeout('slider()',500);
}


function slider() {
 slideNum++;
 if(slideNum>5) slideNum=1;

 var file = '<img src="../img/slide'+slideNum+'.jpg">';
   document.getElementById('sliderBox').innerHTML=file;

   $("#sliderBox").fadeIn(500);

   timer1 = setTimeout("slider()",5000);
   timer2 = setTimeout("hide()",4500);
}

function hide(){
  $("#sliderBox").fadeOut(500);
}
// -----------------HANGMAN GAME-----------------------------
// variable for sentence to recognize
var sentence="Bez pracy nie ma kołaczy";

//transform sentence to uppercase by js
sentence = sentence.toUpperCase();

// variable to calculate sentence length
var sentenceLength = sentence.length;
//variable to help change sentence string to underscore letters markers
var sentence1="";

// iteration of sentence for counted letter exchange letter to dash, except space
for (i=0; i<sentenceLength; i++) {
  // charAt - describes wchich character a choose except square bracket like in array
  if(sentence.charAt(i)==" ") sentence1 = sentence1 +" ";
  else sentence1 = sentence1 + "-";
}
// display dashed sentence in correct div
function displaySentence() {
  document.getElementById('board').innerHTML = sentence1;
}
window.onload=letters;

var letters = new Array(35);
letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ź";
letters[34] = "Ż";





function letters() {
  // variable to generate letters
  var lettersContent = "";

  for (i=0; i<35; i++) {
    lettersContent = lettersContent + '<div class="letterbox" onclick="checkLetter('+i+')" id="let'+[i]+'">'+letters[i] +'</div>'
  }

  document.getElementById('letters').innerHTML=lettersContent;




  displaySentence();
  count();
}

function checkLetter(no) {
  alert(no);
}
