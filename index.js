function retrieveData (){
    fetch('https://api.jsonbin.io/b/5ea833484c87c3359a632938')
    .then(response=>response.json())
    .then(res=> {
        buildCard(res.books)
        addSlides (res.books) 
        activEvent(res.books)
    })
    .catch(err=> console.log(err))
}

retrieveData()

function buildCard (array) {
array.forEach((element,index)=>{
  var fillBooks = `
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img src="${element.cover}" alt="Book Cover">
      </div>
      <div class="flip-card-back">
        <h3>${element.title}</h3>
        <p>${element.description}</p>
        <button class="flipButton" onclick="openModal();currentSlide(${index + 1})" type="button">More Information</button>
      </div>
    </div>
  </div>
  `
  document.getElementById("main-div").innerHTML += fillBooks
})
}
function activEvent(array){
    document.getElementById('mySearch').addEventListener('keyup', ()=> test(array))
}


function addSlides(array) {
    array.forEach((element,index)=>{
    var mySlides = `
    <div class="mySlides">
      <div class="numbertext">${index + 1} / ${array.length}</div>
      <img src="${element.details}" style="width:100%">
    </div>
    `
    document.getElementById("main-box").innerHTML += mySlides
    })
}

function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
function slideIndex() {
let slideIndex = 1;
showSlides(slideIndex);
}
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
function currentSlide(n) {
        showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

function getSearch(){
  console.log("search")
   let mySearch =  (document.getElementById('mySearch').value).toLowerCase()
   var books = Array.from(document.getElementsByClassName("flip-card"))
   let result = books.filter(book=> book.outerText.toLowerCase().includes(mySearch))
   console.log(result)
   result.forEach((element,index)=>{
     console.log(result)

  })
    
}

function test(array){
  document.getElementById("main-div").innerHTML = ""
  let mySearch =  (document.getElementById('mySearch').value).toLowerCase()
  let result = array.filter(book => book.title.toLowerCase().includes(mySearch.toLowerCase()) || book.description.toLowerCase().includes(mySearch.toLowerCase()))
  result.forEach((element,index)=>{
    var fillBooks = `
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="${element.cover}" alt="Book Cover">
        </div>
        <div class="flip-card-back">
          <h3>${element.title}</h3>
          <p>${element.description}</p>
          <button class="flipButton" onclick="openModal();currentSlide(${index + 1})" type="button">More Information</button>
        </div>
      </div>
    </div>
    `
    console.log(fillBooks)
    
    document.getElementById("main-div").innerHTML += fillBooks
  })
  
}
