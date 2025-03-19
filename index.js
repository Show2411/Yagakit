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
    var scroll = document.querySelector('.navbar1');
    scroll.classList.toggle("reduce", window.scrollY )
  })
  window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.navbar1 h1');
    scroll.classList.toggle("reduce", window.scrollY)
  })
