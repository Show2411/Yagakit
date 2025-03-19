const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav #UI').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
  }
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
    var scroll = document.querySelector('.navbar');
    scroll.classList.toggle("shadow-sm", window.scrollY > 100)
  })
 

    function openNav(){
    document.getElementById("myNav").classList.toggle("open");
    }

   

const activepage = window.location.pathname;
const navlinks = document.querySelectorAll('.sidebar #UD').forEach(link => {
  if(link.href.includes(`${activepage}`)){
    link.classList.add('active');
  }
  })

// SIDNAV

let sidebarBtn = document.getElementById("sidebarBtn");
function openSide(){
  document.getElementById("mySidebar").classList.toggle("open");
  
  if(document.getElementById("mySidebar").classList.contains("open")){
    sidebarBtn.innerHTML= "<i class='fa fa-times'></i>";
    }else{
      sidebarBtn.innerHTML= "<i class='fa fa-bars'></i>"   
    }
  }

// SIDNAV
// SEARCHBAR

const search = () =>{
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const storeitems = document.getElementById("product-list");
  const product = document.querySelectorAll(".product");
  const pname = storeitems.getElementsByTagName("h5");

  
  for(var i=0; i < pname.length; i++){
    let match = product[i].getElementsByTagName('h5')[0];

    if(match){
      let textvalue = match.textContent || match.innerHTML
      if(textvalue.toUpperCase().indexOf(searchbox) > -1){
        product[i].style.display = "";
      }else{
        product[i].style.display = "none";
      }
    }
  }

  const storeItems = document.getElementById("productlist");
  const Pname = storeItems.getElementsByTagName("h5");

  
  for(var i=0; i < Pname.length; i++){
    let match = product[i].getElementsByTagName('h5')[0];

    if(match){
      let textvalue = match.textContent || match.innerHTML
      if(textvalue.toUpperCase().indexOf(searchbox) > -1){
        product[i].style.display = "";
      }else{
        product[i].style.display = "none";
      }
    }
  }

//   const storeIt = document.getElementById("List");
//   const Proname = document.getElementById("List").getElementsByTagName("h4");

  
//   for(var i=0; i < Proname.length; i++){
//     let match = product[i].getElementsByTagName('h4')[0];

//     if(match){
//       let textvalue = match.textContent || match.innerHTML
//       if(textvalue.toUpperCase().indexOf(searchbox) > -1){
//         product[i].style.display = "";
//       }else{
//         product[i].style.display = "none";
//       }
//     }
//   }
// console.log(document.getElementById("List").getElementsByTagName("h4")[0]);
}

const searchitem = () =>{
  const search_box = document.getElementById("searchit").value.toUpperCase();
  const store_items = document.getElementById("product-list");
  const products = document.querySelectorAll(".product");
  const p_name = store_items.getElementsByTagName("h5");

  for(var i=0; i < p_name.length; i++){
    let matchs = products[i].getElementsByTagName('h5')[0];

    if(matchs){
      let text_value = matchs.textContent || matchs.innerHTML
      if(text_value.toUpperCase().indexOf(search_box) > -1){
        products[i].style.display = "";
      }else{
        products[i].style.display = "none";
      }
    }
  }

  const store_Items = document.getElementById("productlist");
  const P_name = store_Items.getElementsByTagName("h5");

  for(var i=0; i < P_name.length; i++){
    let matchs = products[i].getElementsByTagName('h5')[0];

    if(matchs){
      let text_value = matchs.textContent || matchs.innerHTML
      if(text_value.toUpperCase().indexOf(search_box) > -1){
        products[i].style.display = "";
      }else{
        products[i].style.display = "none";
      }
    }
  }

  }
