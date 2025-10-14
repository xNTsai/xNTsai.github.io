// Build project grid from JSON and attach modal interactions
async function loadProjects(){
  try{
    const res = await fetch('assets/data/projects.json', {cache: 'no-store'});
    const projects = await res.json();
    const grid = document.getElementById('projectGrid');
    if (!grid) return;
    grid.innerHTML = projects.map((p, idx) => `
      <article class="card" data-idx="${idx}" tabindex="0" role="button" aria-label="Open ${p.title}">
        <img class="cover" src="${p.image}" alt="${p.title} cover"/>
        <h3>${p.title}</h3>
        <div class="meta">${p.meta || ''}</div>
        <div class="hover-reveal">${p.teaser || ''}</div>
      </article>
    `).join('');

    const modal = document.getElementById('projectModal');
    const body = modal.querySelector('.modal-body');
    const closeBtn = modal.querySelector('.modal-close');

    function open(i){
      const p = projects[i];
      body.innerHTML = `
        <h2>${p.title}</h2>
        <p class="muted">${p.meta || ''}</p>
        ${p.image ? `<img src="${p.image}" alt="${p.title} screenshot" style="margin:10px 0; border-radius:12px; border:1px solid var(--border)">` : ''}
        <div>${p.description || ''}</div>
        ${p.tags?.length ? `<div class="chips">${p.tags.map(t=>`<span class='chip'>${t}</span>`).join('')}</div>`:''}
        ${p.links?.length ? `<p>${p.links.map(l=>`<a href='${l.href}' target='_blank' rel='noopener'>${l.text}</a>`).join(' · ')}</p>`:''}
      `;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden','false');
    }
    function close(){
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden','true');
    }

    grid.addEventListener('click', (e)=>{
      const card = e.target.closest('.card');
      if (!card) return;
      open(Number(card.dataset.idx));
    });
    grid.addEventListener('keypress', (e)=>{
      if (e.key === 'Enter' || e.key === ' ') {
        const card = e.target.closest('.card');
        if (!card) return;
        open(Number(card.dataset.idx));
      }
    });
    closeBtn.addEventListener('click', close);
    modal.addEventListener('click', (e)=>{ if (e.target === modal) close(); });
    window.addEventListener('keydown', (e)=>{ if (e.key === 'Escape') close(); });
  }catch(err){
    console.error('Failed to load projects', err);
  }
}

document.addEventListener('DOMContentLoaded', loadProjects);

