window.onscroll = function(){scrollFunction()};

function scrollFunction() {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    document.getElementById("scroll-top-btn").style.display = "block";
  } else {
    document.getElementById("scroll-top-btn").style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}
