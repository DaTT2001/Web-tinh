$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots :true,
    autoplay: true,
    autoplayTimeout: 3500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
  });

//dom
const user = document.querySelector(".user-login")
const uid = location.hash.slice(10)
fetch("https://main-project-28ab6-default-rtdb.asia-southeast1.firebasedatabase.app/users.json")
  .then(
    response => response.json()
  )
  .then(data => {
    data = data[`${uid}`];
        user.innerHTML = `
            <a class="nav-link dropdown-toggle person-login person-setting d-flex" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-person"> </i>
                <p>${data.username}</p>
            </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#user-uid-${uid}">My profile</a></li>
                <li><a class="dropdown-item" href="#user-uid-${uid}">Cart</a></li>
                <li><a class="dropdown-item" href="#user-uid-${uid}">Favourites</a></li>
                <li><a class="dropdown-item" href="#user-uid-${uid}">Order History</a></li>
              </ul>
        `
    }
  )
  .catch(error => console.error(error));