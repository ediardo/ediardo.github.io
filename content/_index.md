<div style="text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 70vh;">
{{< carousel images="photos/landscapes/IMG_0126-3.jpg, photos/insects/IMG_0266-6.jpg, photos/landscapes/IMG_0033.jpg, photos/insects/IMG_0568-2.jpg, photos/birds/IMG_0230-2.jpg, photos/insects/IMG_0266-7.jpg, photos/plants/IMG_3710.jpg,  photos/insects/IMG_0011.jpg" >}}
  <h3 style="margin: 1em 0; line-height: 1.5;">
    I am Edi, a software engineer and photographer building  <a href="https://www.linkacam.com" target="_blank">tools for nature photographers</a>
  </h3>

<div style="display: flex; align-items: baseline; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-top: 2rem; width: 100%; text-align: left;">
  <h3 style="margin: 0;">Photos</h3>
  <a href="/photos" style="margin-left: auto;">All Photos</a>
</div>
<style>.home-photos-grid img { margin: 0 !important; border-radius: 0 !important; } .home-photos-grid .cover-fill { width: 100%; height: 100%; object-fit: cover; display: block; } #inat img { border-radius: 0 !important; }</style>
<div class="home-photos-grid" style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 0.5rem; row-gap: 0.5rem; margin-top: 0.5rem; width: 100%;">
  <a href="/photos" style="aspect-ratio: 5/4; overflow: hidden; margin: 0; display: block;">{{< photo src="photos/Tui Te Arero Bay  2026-01-11-12.jpg" alt="" size="600x" class="cover-fill" >}}</a>
  <a href="/photos" style="aspect-ratio: 5/4; overflow: hidden; margin: 0; display: block;">{{< photo src="photos/IMG_0260-2.jpg" alt="" size="600x" class="cover-fill" >}}</a>
  <a href="/photos" style="aspect-ratio: 5/4; overflow: hidden; margin: 0; display: block;">{{< photo src="photos/IMG_0266.jpg" alt="" size="600x" class="cover-fill" >}}</a>
  <a href="/photos" style="aspect-ratio: 5/4; overflow: hidden; margin: 0; display: block;">{{< photo src="photos/birds/IMG_7687 (2).JPG" alt="" size="600x" class="cover-fill" >}}</a>
</div>

<div id="inat" style="margin-top: 0.5rem;"></div>

<script>
fetch("https://api.inaturalist.org/v1/observations?user_id=ediardo&order=desc&order_by=created_at&per_page=1")
  .then(r => r.json())
  .then(data => {
    const obs = data.results[0];
    const species = obs.taxon?.name ?? "Unknown species";
    const img = obs.photos?.[0]?.url?.replace("square", "medium");

    const url = "https://www.inaturalist.org/observations/" + obs.id;
    document.getElementById("inat").innerHTML = `
      <p><a href="${url}" target="_blank" rel="noopener noreferrer"><img src="${img}" alt="${species}"></a></p>
      <p><a href="${url}" target="_blank" rel="noopener noreferrer">Latest observation on iNaturalist: ${species}.</a></p>
    `;
  });
</script>
</p>
</div>
