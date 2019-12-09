"use strict";

// hide all pages
function hideAllPages() {
  let pages = document.querySelectorAll(".page");
  for (let page of pages) {
      console.log(page)
    page.style.display = "none";
      
  }
}

// show page 
function showPage(pageId) {
  hideAllPages();
  let newPage = document.querySelector(`#${pageId}`);
    console.log(newPage);
      newPage.style.display = "block";
    
}

// set default page

function setDefaultPage() {
  let page = "home";
  if (location.hash) {
    page = location.hash.slice(1);
  }
  showPage(page);
}

setDefaultPage();

/* Open when someone clicks on the span element */

function openNav() {
  document.getElementById("mobilNav").style.width = "100%";
}





/* Close when someone clicks on the "x" symbol inside the overlay */

function closeNav() {
  document.getElementById("mobilNav").style.width = "0%";
}

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}


function step1(){
    let step1 = document.getElementById("step1");
    let step2 = document.getElementById("step2");
    step2.classList.remove("tab--unactive");
    step2.classList.add("tab--active");
    step1.classList.remove("tab--active");
    step1.classList.add("tab--visited");
       
}

function step2(){
    let step2 = document.getElementById("step2");
    let step3 = document.getElementById("step3");
    step3.classList.remove("tab--unactive");
    step3.classList.add("tab--active");
    step2.classList.remove("tab--active");
    step2.classList.add("tab--visited");
       
}

function step3next(){
    let step3 = document.getElementById("step3");
    let knap1 = document.getElementById("knap1");
    step3.classList.remove("tab--active");
    step3.classList.add("tab--visited"); 
    knap1.classList.remove("knap--unactive");
    knap1.classList.add("knap--active");
}

function step4(){
    let step4 = document.getElementById("step4");
    let step5 = document.getElementById("step5");
    step5.classList.remove("tab--unactive");
    step5.classList.add("tab--active");
    step4.classList.remove("tab--active");
    step4.classList.add("tab--visited");
       
}

function step5(){
    let step5 = document.getElementById("step5");
    let knap2 = document.getElementById("knap2");
   knap2.classList.remove("knap--unactive");
    knap2.classList.add("knap--active");
    step5.classList.remove("tab--active");
    step5.classList.add("tab--visited");
       
}



function step7(){
    let step7 = document.getElementById("step7");
    let step8 = document.getElementById("step8");
    step8.classList.remove("tab--unactive");
    step8.classList.add("tab--active");
    step7.classList.remove("tab--active");
    step7.classList.add("tab--visited");
       
}

function step8(){
    let step8 = document.getElementById("step8");
    let step9 = document.getElementById("step9");
    step9.classList.remove("tab--unactive");
    step9.classList.add("tab--active");
    step8.classList.remove("tab--active");
    step8.classList.add("tab--visited");
       
}

function step9(){
    let step9 = document.getElementById("step9");
    let step10 = document.getElementById("step10");
    step10.classList.remove("tab--unactive");
    step10.classList.add("tab--active");
    step9.classList.remove("tab--active");
    step9.classList.add("tab--visited");
       
}

function step10next(){
    let step10 = document.getElementById("step10");
    let knap3 = document.getElementById("knap3");
    step10.classList.remove("tab--active");
    step10.classList.add("tab--visited"); 
    knap3.classList.remove("knap--unactive");
    knap3.classList.add("knap--active");
}

function step11(){
    let step11 = document.getElementById("step11");
    let step12 = document.getElementById("step12");
    step12.classList.remove("tab--unactive");
    step12.classList.add("tab--active");
    step11.classList.remove("tab--active");
    step11.classList.add("tab--visited");
       
}



function step12next(){
    let step12 = document.getElementById("step12");
    let knap4 = document.getElementById("knap4");
    step12.classList.remove("tab--active");
    step12.classList.add("tab--visited"); 
    knap4.classList.remove("knap--unactive");
    knap4.classList.add("knap--active");
}

function step13(){
    let step13 = document.getElementById("step13");
    let step14 = document.getElementById("step14");
    step14.classList.remove("tab--unactive");
    step14.classList.add("tab--active");
    step13.classList.remove("tab--active");
    step13.classList.add("tab--visited");
       
}

function step14next(){
    let step14 = document.getElementById("step14");
    let knap5 = document.getElementById("knap5");
    step14.classList.remove("tab--active");;
    step14.classList.add("tab--visited"); ;
    knap5.classList.remove("knap--unactive");
    knap5.classList.add("knap--active");
       
}

function step15next(){
    let step12 = document.getElementById("step15");
    let knap5 = document.getElementById("knap5");
    step15.classList.remove("tab--active");
    step15.classList.add("tab--visited"); 
    knap5.classList.remove("knap--unactive");
    knap5.classList.add("knap--active");
}





