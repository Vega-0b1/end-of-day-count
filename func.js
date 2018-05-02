$( document ).ready(function() {
  addEvents();
    if(localStorage.getItem("data") != null) populateFields();
});

function countBread(){
   var breadBox = parseFloat(document.getElementById("breadBox").value);
   var breadOpen = parseFloat(document.getElementById("breadOpen").value);
   var flatBox = parseFloat(document.getElementById("flatBox").value);
   var flatOpen = parseFloat(document.getElementById("flatOpen").value);
   var crossBox = parseFloat(document.getElementById("crossBox").value);
   var crossOpen = parseFloat(document.getElementById("crossOpen").value);
   var wrapBox = parseFloat(document.getElementById("wrapBox").value);
   var wrapOpen = parseFloat(document.getElementById("wrapOpen").value);
   var breadFront1 = parseFloat(document.getElementById("breadFront1").value);
   var breadFront2 = parseFloat(document.getElementById("breadFront2").value);
   var flatFront1 = parseFloat(document.getElementById("flatFront1").value);
   var flatFront2 = parseFloat(document.getElementById("flatFront2").value);
   var crossFront = parseFloat(document.getElementById("crossFront").value);
   var saladBag = parseFloat(document.getElementById("saladBag").value);
   var saladOpen = parseFloat(document.getElementById("saladOpen").value);
   var wrapFront1= parseFloat(document.getElementById("wrapFront1").value);
   var wrapFront2= parseFloat(document.getElementById("wrapFront2").value);
   var retarderBread = parseFloat(document.getElementById("retarderTotal").value);

   var saladTotal = (saladBag*56) + saladOpen;
   var freezerWrap = (wrapBox*72) + (wrapOpen*8);
   var freezerBread = (breadBox*70) + breadOpen;
   var freezerFlat = (flatBox*60) + (flatOpen*10);
   var freezerCross = (crossBox * 48) + (crossOpen * 12);

   var breadTotal = freezerBread + (retarderBread * 10) + breadFront1 + breadFront2;
   var flatTotal = freezerFlat + flatFront1 + flatFront2;
   var wrapTotal = freezerCross + freezerWrap + wrapFront1 + wrapFront2 + crossFront;
   var dataFields = {breadBox, breadOpen, flatBox, flatOpen, crossBox, crossOpen, wrapBox, wrapOpen,
                     breadFront1, breadFront2, flatFront1, flatFront2, crossFront, saladBag, saladOpen, wrapFront1, wrapFront2, retarderBread}

   localStorage.setItem("data", JSON.stringify(dataFields));
   updateTotal(breadTotal, flatTotal, wrapTotal, saladTotal);
 }

function updateTotal(bT, fT, wT, sT){
  var breadCount = document.getElementById("breadCount");
  var flatCount = document.getElementById("flatCount");
  var wrapCount = document.getElementById("wrapCount");
  var saladCount = document.getElementById("saladCount");

  breadCount.innerHTML = "Bread Total = " + bT;
  flatCount.innerHTML = "FlatBread Total = " + fT;
  wrapCount.innerHTML = "Wrap Total = " + wT;
  saladCount.innerHTML = "Salad Bowl Total = " + sT;
}

function dropMenu(clickedId){
  var show = document.getElementById(clickedId + "Drop");
  if(show.style.display == "none" || show.style.display == ""){
    show.style.display = "inline";
  }
  else{
    show.style.display = "none";
  }
}

function populateFields(){
   var data = localStorage.getItem("data");
   data = JSON.parse(data);
   
   document.getElementById("breadBox").value = data.breadBox;
   document.getElementById("breadOpen").value = data.breadOpen;
   document.getElementById("flatBox").value = data.flatBox;
   document.getElementById("flatOpen").value = data.flatOpen;
   document.getElementById("crossBox").value = data.crossBox;
   document.getElementById("crossOpen").value = data.crossOpen;
   document.getElementById("wrapBox").value = data.wrapBox;
   document.getElementById("wrapOpen").value = data.wrapOpen;

   document.getElementById("breadFront1").value = data.breadFront1;
   document.getElementById("breadFront2").value = data.breadFront2;
   document.getElementById("flatFront1").value = data.flatFront1;
   document.getElementById("flatFront2").value = data.flatFront2;
   document.getElementById("wrapFront1").value = data.wrapFront1;
   document.getElementById("wrapFront2").value = data.wrapFront2;
   document.getElementById("crossFront").value = data.crossFront;

   document.getElementById("saladBag").value = data.saladBag;
   document.getElementById("saladOpen").value = data.saladOpen;

   document.getElementById("retarderTotal").value = data.retarderBread;

 }

function resetValues(){
  var confirmation = confirm("Are you sure you want reset all values?");
  if(confirmation == true){
    var inputs = document.getElementsByClassName("inputs");

    for(var i = 0; i < inputs.length; i++){
      inputs[i].value = 0;
    }
  }
}

function addEvents(){
  var btn = document.getElementsByClassName("menuButton");
  for(var i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function(){ dropMenu(this.id); });
  }
}
setInterval(function(){
   countBread();
 }, 1000);
