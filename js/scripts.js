// change color of logo on page load, do not repeat colors
let appClr = ["#0a246380", "#cc390080", "#dc120080", "#8f0c0080"]

let logo = document.getElementById("logo")

function changeClr() {
    let last = localStorage.getItem('last') || -1
    let randClr = -1
      while(last == randClr || randClr == -1) {
    randClr = Math.floor(Math.random()*appClr.length)
    console.log('last = ' + last)
      }
    localStorage.setItem('last', randClr)
    logo.style.color = appClr[randClr]
}

window.onload = changeClr()

// expand dropdown menu when hamburger is clicked
let hamburger = document.querySelector('.menuToggle')
let dropdownContent = document.querySelector('.dropdown')
hamburger.onclick = function() {
  dropdownContent.classList.toggle('active');
}