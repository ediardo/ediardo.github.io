+++
title = 'Marcopolo Poker Night Feb 28th, 2026'
weight = 1
+++

<div id="photo-gallery" class="sequential-grid"></div>

<script>
(function() {
  fetch('/photos/private/marcopolo-poker-night-feb-28/photos.json')
    .then(function(response) { return response.json(); })
    .then(function(data) {
      var gallery = document.getElementById('photo-gallery');
      var basePath = data.basePath;
      data.photos.forEach(function(photo) {
        var div = document.createElement('div');
        div.className = 'masonry-item';
        var span = document.createElement('span');
        span.className = 'gallery-photo-trigger';
        span.setAttribute('role', 'button');
        span.setAttribute('tabindex', '0');
        span.setAttribute('data-full', basePath + photo);
        span.setAttribute('title', 'View full size');
        var img = document.createElement('img');
        img.src = basePath + photo;
        img.alt = '';
        img.loading = 'lazy';
        span.appendChild(img);
        div.appendChild(span);
        gallery.appendChild(div);
      });
    })
    .catch(function(err) {
      console.error('Failed to load photos:', err);
    });
})();
</script>
