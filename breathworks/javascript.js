var i = 0;
var txt = 'Lorem ipsum dummy text blabla.Lorem ipsum dummy text blablaLorem ipsum dummy text blablaLorem ipsum dummy text blabla';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

