var map;
var liubk = {lat:40.690847, lng:-73.980505}
var home = {lat:40.758260, lng:-73.774030}
var hollywood = {lat:34.093131, lng:-118.328160}
var statueBLee = {lat:34.065339, lng:-118.237389}

function clearNavs() {
  // We're using <button> for navigation elements,
  // so clear the 'disabled' attribute from all of them.
  var navs = document.getElementsByTagName("button")
  //console.log(navs)
  for(var i = 0; i < navs.length; i++) {
      navs[i].disabled = false
  }
}

function gotoBrooklyn() {
  clearNavs()
  document.getElementById("liu").disabled = true
  map.panTo(liubk)
  map.setZoom(12)
  var desc = document.getElementById("description")
  var img = document.getElementById("image")
  desc.innerHTML = "I go to school at LIU Brooklyn."
  img.innerHTML = "<img src = https://cdn.newsday.com/polopoly_fs/1.16170874.1515984561!/httpImage/image.jpeg_gen/derivatives/landscape_768/image.jpeg width= 400px>"
}

function gotoHome() {
  clearNavs()
  document.getElementById("home").disabled = true
  map.panTo(home)
  map.setZoom(8)
  var desc = document.getElementById("description")
  var img = document.getElementById("image")
  desc.innerHTML = "I didn't go home for five years, I can't wait."
  img.innerHTML = "<img src = http://4.bp.blogspot.com/-jn_GPd4MTtI/U44m-RFsRxI/AAAAAAAAAAA/VqYkb10vCzI/s1600/Bayside%2BNY%2BThrogs%2BNeck%2BBridge%2BMike%2BKlubok.jpg width= 400px>"
}

function gotoHollywood() {
  clearNavs()
  document.getElementById("hollywood").disabled = true
  map.panTo(hollywood)
  map.setZoom(8)
  var desc = document.getElementById("description")
  var img = document.getElementById("image")
  desc.innerHTML = "I would like to go to hollywood during the summer."
  img.innerHTML = "<img src = https://aff.bstatic.com/images/hotel/max1024x768/115/115635085.jpg width= 400px>"
}

function gotoStatueBLee() {
  clearNavs()
  document.getElementById("BruceLee").disabled = true
  map.panTo(statueBLee)
  map.setZoom(8)
  var desc = document.getElementById("description")
  var img = document.getElementById("image")
  desc.innerHTML = "I would like to go to los Angeles to visit Bruce Lee."
  img.innerHTML = "<img src = http://www.bruceleefansite.com/images/statue.jpg width= 400px>"
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
      center: home,
      zoom: 6
  });
  gotoHome()
  var homeMarker = new google.maps.Marker({position: home, map: map});
  var liuMarker = new google.maps.Marker({position: liubk, map: map});
  var hollywoodMarker = new google.maps.Marker({position: hollywood, map: map});
  var BruceLeeMarker = new google.maps.Marker({position: statueBLee, map: map});
  homeMarker.addListener('click', gotoHome)
  liuMarker.addListener('click', gotoBrooklyn)
  BruceLeeMarker.addListener('click', gotoStatueBLee)
  hollywoodMarker.addListener('click', gotoHollywood)
}
