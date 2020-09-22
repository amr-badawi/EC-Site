slide = document.getElementById("slide");
// console.log(slide.src);

let allsliderImgs = [
  "one.jpg",
  "two.jpg",
  "three.jpg",
  "four.jpg",
  "five.jpg"
];

let current = 0 ;

function next(){
  if(current == allsliderImgs.length -1 )
  current = -1 ;

// current += 1 ;
slide.src = "SliderImgs/"+allsliderImgs[++current] ;
}
function previous(){
  if(current== 0 )
   current=allsliderImgs.length ;
// current -=  1 ;
slide.src = "SliderImgs/"+allsliderImgs[--current] ;
// console.log(current);
}
