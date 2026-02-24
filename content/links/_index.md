+++
menus = 'main'
title = 'links'
weight = 6
hideNavbar = true
+++

<style>
.links-block-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
}
.links-block-list a {
  display: block;
  width: 100%;
  padding: 1rem 1.25rem;
  background: var(--entry, #f1f1f1);
  color: var(--primary, #222);
  border: 1px solid var(--border, #ddd);
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s, transform 0.15s;
}
.links-block-list a:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}
#inat {
  max-width: 480px;
  margin: 2rem auto 0;
}
#inat a {
  display: block;
  overflow: hidden;
}
#inat img {
  display: block;
  width: 100%;
  height: auto;
}

</style>

<div class="links-block-list">
  <a href="/photos" target="_blank" rel="noopener noreferrer">More photos 🔎</a>
<a href="https://docs.google.com/spreadsheets/d/1lIKJ3nrOnS2XJ8arccfyRozKFLxt3k3sQXZ4NlXTQUI/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Photography gear I own 📷</a>
  <a href="https://www.inaturalist.org/people/ediardo" target="_blank" rel="noopener noreferrer">Life observations on iNaturalist 🕷️</a>
  <a href="https://instagram.com/mexicanoabroad" target="_blank" rel="noopener noreferrer">Instagram 🖼️</a>
  <a href="https://www.ediardo.com/">Website 🌐</a>
  
  <a href="https://www.linkedin.com/in/ediardo" target="_blank" rel="noopener noreferrer">LinkedIn 💻</a>
</div>

<div id="inat"></div>

<script>
fetch("https://api.inaturalist.org/v1/observations?user_id=ediardo&order=desc&order_by=created_at&per_page=1")
  .then(r => r.json())
  .then(data => {
    const obs = data.results[0];
    const species = obs.taxon?.name ?? "Unknown species";
    const img = obs.photos?.[0]?.url?.replace("square", "medium");

    const url = "https://www.inaturalist.org/observations/" + obs.id;
    document.getElementById("inat").innerHTML = `
      <a href="${url}" target="_blank" rel="noopener noreferrer">
        <img src="${img}" alt="${species}">
        <p>Latest observation on iNaturalist: ${species}.</p>
      </a>
    `;
  });
</script>