$(function(){
  $("#footer-placeholder").load("footer.html");
})


window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 500)
  })
  function scrollToTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  window.addEventListener('scroll',function(){
    var scroll = document.querySelector('#toggler');
    scroll.classList.toggle("none", window.scrollY)
  })
  window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.navbar1');
    scroll.classList.toggle("reduce", window.scrollY)
  })
  window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.navbar1');
    scroll.classList.toggle("reduce1", window.scrollY > 50 )
  })
  window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.navbar1');
    scroll.classList.toggle("reduce2", window.scrollY > 150)
  })
  window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.navbar1 h1');
    scroll.classList.toggle("reduce2", window.scrollY > 150)
  })
  window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.navbar1');
    scroll.classList.toggle("reduce3", window.scrollY > 280)
  })
  window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.navbar1 h1');
    scroll.classList.toggle("reduce3", window.scrollY > 280)
  })
