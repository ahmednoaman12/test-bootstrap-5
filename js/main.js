
// start offcanvas
(function () {
  'use strict'
  
  document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })



mapboxgl.accessToken = 'pk.eyJ1IjoiYWhtZWRub2FtYW5oYXNzYW4iLCJhIjoiY2t0bm51NGV1MDRxdzJ6b3h1aXVhcHZwdiJ9.FSO6p8U1FGny7jmWNX1M-Q';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center : [29.939648,31.220764],
zoom:13,
});
})()

// end offcanvas
