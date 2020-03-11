var mapLink = document.querySelector(".contacts-button-map");

var mapPopup = document.querySelector(".modal");
var mapClose = mapPopup.querySelector(".modal-close");

var form = mapPopup.querySelector(".modal form");
var login = mapPopup.querySelector("[name=user]");
var email = mapPopup.querySelector("[name=email]");

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-error");
  mapPopup.classList.remove("modal-show");
  mapPopup.classList.add("modal-hide");
  setTimeout(() => {
    mapPopup.classList.remove("modal-hide");
  }, 500);
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-error");
    mapPopup.offsetWidth = mapPopup.offsetWidth;
    mapPopup.classList.add("modal-error");
  }
});

function initMap() {
  var coordinates = { lat: 59.939108, lng: 30.321401 },
    map = new google.maps.Map(document.getElementById("map"), {
      center: coordinates,
      zoom: 17,
      disableDefaultUI: false,
      scrollwheel: false
    }),
    marker = new google.maps.Marker({
      position: { lat: 59.938708, lng: 30.323701 },
      map: map,
      icon: "img/map-marker.png"
    });
}
