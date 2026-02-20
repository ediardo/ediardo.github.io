<div style="text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 70vh;">
  <img src="/me.jpeg" alt="me" width="100" height="100" style="border-radius: 0; object-fit: cover;" />
  <h3 style="margin: 1em 0; line-height: 1.5;">
    I am Edi, and I'm building <a href="https://www.linkacam.com" target="_blank">software for nature photographers</a>
  </h3>

  <p style="text-align: justify; line-height: 2;">
    A little about me: <strong>I'm an engineer by trade who's been hacking with computers since the late ’90s.</strong> I created this website to share my story, photos, and my projects.
  </p>

  <p style="text-align: justify; line-height: 2;">
    I live in Petaluma, California, after years of moving across the country for new opportunities. Since arriving in the USA in 2016, <strong>I’ve become a big fan of hiking, camping, and exploring nature</strong>. <a href="/photo+video">Photography grew naturally from that experience</a>.
  </p>

  <p style="text-align: justify; line-height: 2;">
    <strong><a href="/work">My most monetizable skill is coding. I can build products and talk to users.</a></strong> The boldest choice I've made in my career is leaving the safety of a big company to found a startup, where I got to learn a lot about the value of solving problems for people.
  </p>

  <p style="text-align: justify; line-height: 2;">
    <strong><a href="/work">Most of the code I write today is in TypeScript and Python</a></strong>. I have solid experience as a full-stack developer, have been a mentor to junior devs, a hackathon winner, cloud operator, and overall, a sparker of new projects.</strong> On the machine learning side, I work with different model architectures and modalities both locally and in the cloud.
  </p>

  <p style="text-align: justify; line-height: 2;">
    When I'm not in my computer, I'm usually outside doing one of these things: spending time with my wife, photographing insects with macro lenses, birding, playing tennis, biking, hiking, paddling an outrigger canoe, and ocassionally playing video games. 
  </p>

  <p style="text-align: justify; line-height: 2;">
    Today, I'm building software that nurtures my curiosity of exploring nature and the way I document it with my camera.
  </p>

<a href="https://www.linkedin.com/in/ediardo" target="_blank" rel="noopener noreferrer">LinkedIn</a>
· <a href="https://github.com/ediardo" target="_blank" rel="noopener noreferrer">GitHub</a>
· <a href="mailto: djedir@gmail.com" target="_blank" rel="noopener noreferrer">djedir@gmail.com</a>


<div style="display: flex; align-items: baseline; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-top: 2rem; width: 100%; text-align: left;">
  <h3 style="margin: 0;">Photos</h3>
  <a href="/photos" style="margin-left: auto;">All Photos</a>
</div>
<style>.home-photos-grid img { margin: 0 !important; border-radius: 0 !important; } .home-photos-grid .cover-fill { width: 100%; height: 100%; object-fit: cover; display: block; } #inat img { border-radius: 0 !important; }</style>
<div class="home-photos-grid" style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 0.5rem; row-gap: 0.5rem; margin-top: 0.5rem; width: 100%;">
  <div style="aspect-ratio: 5/4; overflow: hidden; margin: 0;">{{< photo src="photos/Tui Te Arero Bay  2026-01-11-12.jpg" alt="" size="600x" class="cover-fill" >}}</div>
  <div style="aspect-ratio: 5/4; overflow: hidden; margin: 0;">{{< photo src="photos/IMG_0260-2.jpg" alt="" size="600x" class="cover-fill" >}}</div>
  <div style="aspect-ratio: 5/4; overflow: hidden; margin: 0;">{{< photo src="photos/IMG_0266.jpg" alt="" size="600x" class="cover-fill" >}}</div>
  <div style="aspect-ratio: 5/4; overflow: hidden; margin: 0;">{{< photo src="photos/IMG_0034.jpg" alt="" size="600x" class="cover-fill" >}}</div>
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
