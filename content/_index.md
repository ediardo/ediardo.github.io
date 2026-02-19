<div style="text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 70vh;">
  <img src="/me.jpeg" alt="me" width="100" height="100" style="border-radius: 50%; object-fit: cover;" />
  <h2 style="margin-top: 1em; line-height: 1.5;">
    I am Edi, and I'm building <a href="https://www.linkacam.com" target="_blank">software for nature photographers</a>
  </h2>



  <p style="text-align: justify; line-height: 2;">
    A little about me: <strong>I'm an engineer by trade who's been hacking with computers since the late ’90s.</strong> I created this website to share my story and my projects.
  </p>

  <p style="text-align: justify; line-height: 2;">
    I live in Petaluma, California, after years of moving across the country for new opportunities. Since arriving in the USA in 2016, <strong>I’ve become a big fan of hiking, camping, and exploring nature</strong>, along with the struggle and reward that come with it. Photography grew naturally from that experience.
  </p>

  <p style="text-align: justify; line-height: 2;">
    <strong>My most monetizable skill is coding. I can build products and talk to users.</strong> I did a lot of programming for Intel for about nine years. Then, I cofounded ExplainDev, a AI devtool startup that helped people understand somebody else's code. I’ve also worked with computer vision models to solve real-world factory problems for enterprise customers. 
  </p>

  <p style="text-align: justify; line-height: 2;">
    <strong>Most of the code I write today is in TypeScript and some Python. I have solid experience as a full-stack developer, have been a database admin, mentor to junior devs, a hackathon winner, cloud operator</strong>, and overall, a sparker of new projects. On the machine learning side, I’ve worked with different model architectures and modalities both locally and in the cloud.
  </p>

  <p style="text-align: justify; line-height: 2;">
    Today, I'm building software that nurtures my curiosity of exploring nature and the way I document it with my camera.
  </p>


  <a href="https://www.linkedin.com/in/ediardo" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      · <a href="https://github.com/ediardo" target="_blank" rel="noopener noreferrer">GitHub</a>
  · <a href="mailto: djedir@gmail.com" target="_blank" rel="noopener noreferrer">djedir@gmail.com</a>

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
      <p><a href="${url}" target="_blank" rel="noopener noreferrer"><img src="${img}" alt="${species}"></a></p>
      <p><a href="${url}" target="_blank" rel="noopener noreferrer">Latest observation on iNaturalist: ${species}.</a></p>
    `;
  });
</script>
</p>
</div>
