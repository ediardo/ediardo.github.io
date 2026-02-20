+++
menus = 'main'
title = 'photos'
weight = 3
+++




<div class="photo-blocks">
  <a href="/photos/amphibians-and-reptiles/" class="photo-block">{{< photo src="photos/IMG_0266 copy.jpg" alt="" >}}<span class="photo-label">Amphibians and reptiles</span></a>
  <a href="/photos/arthropods/" class="photo-block">{{< photo src="photos/IMG_0034.jpg" alt="" >}}<span class="photo-label">Arthropods</span></a>
  <a href="/photos/birds/" class="photo-block">{{< photo src="photos/Tui Te Arero Bay  2026-01-11-12.jpg" alt="" >}}<span class="photo-label">Birds</span></a>
  <a href="/photos/fungi/" class="photo-block">{{< photo src="photos/IMG_0106-3.jpg" alt="" >}}<span class="photo-label">Fungi</span></a>
  <a href="/photos/landscapes/" class="photo-block">{{< photo src="photos/20260119-IMG_0191.jpg" alt="" >}}<span class="photo-label">Landscapes</span></a>
  <a href="/photos/mammals/" class="photo-block">{{< photo src="photos/IMG_2737.jpg" alt="" >}}<span class="photo-label">Mammals</span></a>
  <a href="/photos/plants/" class="photo-block">{{< photo src="photos/IMG_0704.jpg" alt="" >}}<span class="photo-label">Plants</span></a>
  <a href="/photos/sports/" class="photo-block">{{< photo src="photos/IMG_3469.JPG" alt="" >}}<span class="photo-label">Sports</span></a>

<style>
.photo-blocks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  width: 100%;
  max-width: 100%;
}
.photo-block {
  position: relative;
  aspect-ratio: 5/4;
  overflow: hidden;
  cursor: pointer;
  display: block;
  text-decoration: none;
  color: inherit;
}
.photo-block::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 45%;
  background: linear-gradient(to top, rgba(0,0,0,0.75), transparent);
  pointer-events: none;
}
.photo-block img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0 !important;
  border-radius: 0 !important;
  transition: transform 0.3s ease;
}
.photo-block:hover img {
  transform: scale(1.05);
}
.photo-label {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.5rem 0.75rem;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 500;
  z-index: 1;
}
@media (max-width: 768px) {
  .photo-blocks { grid-template-columns: repeat(2, 1fr); }
}
main {
  max-width: none !important;
  width: 100%;
}
</style>

