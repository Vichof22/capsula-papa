import { CONFIG } from './config.js';
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

if($('#hero-title')) $('#hero-title').innerHTML = CONFIG.hero.titulo;
if($('#hero-sub')) $('#hero-sub').textContent = CONFIG.hero.subtitulo;
if($('#retrato')) $('#retrato').src = CONFIG.padre.retrato;
if($('#fecha-cumple')) $('#fecha-cumple').textContent = CONFIG.padre.fechaCumple;
if($('#tags')) $('#tags').innerHTML = CONFIG.hero.tags.map(t=>`<span class="sans text-[11px] border rounded-full px-3 py-1 bg-white/60">${t}</span>`).join('');
if($('#carta-texto')) $('#carta-texto').textContent = CONFIG.carta.textoInicial;
if($('#carta-titulo')) $('#carta-titulo').textContent = CONFIG.carta.titulo;

// TIMELINE - AJUSTE PARA QUE SE VEA EL ROSTRO
const tl = $('#timeline-list');
if(tl){ 
  tl.innerHTML = CONFIG.timeline.map((h,i)=>`
    <div class="reveal grid md:grid-cols-2 gap-8 ${i%2?'md:[&>div:first-child]:order-2':''} is-visible">
      <div class="flex md:justify-end">
        <div class="max-w-[440px] w-full">
          <span class="sans text-[11px] border rounded-full px-3 py-1 bg-white/10">${h.year||''}</span>
          <h3 class="serif text-[22px] mt-3">${h.title}</h3>
          <p class="sans text-[13.5px] opacity-70 mt-3 leading-[1.7]">${h.story}</p>
          ${h.photo?`
            <img 
              src="${h.photo}" 
              style="object-position:${h.pos||'50% 25%'}; max-height:${h.h||'300px'}" 
              class="mt-5 rounded-[14px] w-full object-cover bg-[#2a2118]"
            >`:''}
        </div>
      </div>
      <div class="hidden md:block"><div class="h-2 w-2 rounded-full bg-[#C9A86A] mt-2 shadow-[0_0_0_6px_rgba(201,168,106,.15)]"></div></div>
    </div>`).join(''); 
}

const albumEl = $('#album-grid');
if(albumEl){ albumEl.innerHTML = CONFIG.album.map(f=>`<div class="card overflow-hidden"><div class="aspect-[4/3] overflow-hidden bg-[#EDE7DD]"><img src="${f.src}" class="w-full h-full object-cover"></div><div class="p-3"><p class="sans text-[12.5px]">${f.caption}</p></div></div>`).join(''); }

const videoGrid = $('#videoteca-grid');
if(videoGrid){
  videoGrid.innerHTML = CONFIG.videos.map((v,i)=>{
    const isDrive = v.src.includes('drive.google.com');
    return `
      <div class="rounded-[22px] overflow-hidden bg-[#0f0f0f] text-white border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,.6)]">
        <div class="relative aspect-video bg-black">
          ${isDrive ? `<iframe src="${v.src}" class="w-full h-full border-0" allow="autoplay; fullscreen" allowfullscreen></iframe>` : `<video src="${v.src}" poster="${CONFIG.padre.retrato}" controls class="w-full h-full object-contain bg-black"></video>`}
        </div>
        <div class="p-5 flex items-center justify-between">
          <div><p class="serif text-[20px]">${v.title}</p><p class="sans text-[11px] opacity-50">No basta con tener recuerdos, sino preservarlos</p></div>
          <button onclick="window.open('https://drive.google.com/file/d/${v.driveId}/view','_blank')" class="h-9 w-9 grid place-items-center rounded-full bg-white/10">⛶</button>
        </div>
      </div>`;
  }).join('');
}

if($('#palabras-grid')){ $('#palabras-grid').innerHTML = CONFIG.palabras.map(p=>`<div class="card p-5"><h3 class="serif text-[18px]">${p.key}</h3><p class="sans text-[11px] opacity-50 mt-1">${p.prompt}</p><p class="mt-3 w-full min-h-[60px] bg-[#F5F1EB] rounded-[12px] p-3 sans text-[13px]">${p.respuesta||''}</p></div>`).join(''); }
if($('#cierre-titulo')) $('#cierre-titulo').innerHTML = CONFIG.cierre.titulo;
if($('#cierre-texto-display')) $('#cierre-texto-display').textContent = CONFIG.cierre.texto;
if($('#firma-display')) $('#firma-display').textContent = CONFIG.cierre.firma;

const musicSection = document.getElementById('musica-spotify');
if(musicSection && CONFIG.musicas?.length){
  musicSection.innerHTML = `<div class="mx-auto max-w-[1180px] px-6 md:px-10"><p class="sans text-[11px] tracking-[0.2em] uppercase opacity-50">05 — Sonidos de casa</p><h2 class="serif text-[34px] md:text-[48px] leading-[0.95] mt-3">La banda<br>sonora de papá</h2><div class="mt-10 grid md:grid-cols-[380px_1fr] gap-8 items-start"><div class="rounded-[28px] bg-[#121212] text-white p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,.6)] sticky top-[80px]"><div class="mt-6 aspect-square rounded-[18px] overflow-hidden bg-[#1e1e1e] relative"><img id="sp-cover" src="${CONFIG.musicas[0].cover}" class="w-full h-full object-cover"></div><div class="mt-6"><h3 id="sp-title" class="serif text-[24px] leading-tight">${CONFIG.musicas[0].title}</h3><p id="sp-artist" class="sans text-[13px] opacity-60 mt-1">${CONFIG.musicas[0].artist}</p></div><div class="mt-6"><div class="flex justify-between sans text-[10px] opacity-50 mb-2"><span id="sp-current">0:00</span><span id="sp-duration">0:00</span></div><div id="sp-progress-wrap" class="h-[6px] w-full bg-white/20 rounded-full cursor-pointer"><div id="sp-progress" class="h-full bg-[#1DB954] rounded-full w-0"></div></div></div><div class="mt-6 flex items-center justify-between"><div class="flex items-center gap-3"><button id="sp-prev" class="h-12 w-12 grid place-items-center rounded-full bg-white/10 text-xl">⏮</button><button id="sp-play" class="h-16 w-16 grid place-items-center rounded-full bg-white text-black text-2xl">▶</button><button id="sp-next" class="h-12 w-12 grid place-items-center rounded-full bg-white/10 text-xl">⏭</button></div></div><div class="mt-6 flex items-center gap-3"><span class="sans text-[11px]">🔊</span><input id="sp-volume" type="range" min="0" max="1" step="0.01" value="0.85" class="w-full accent-[#1DB954] h-1"></div><audio id="sp-audio" preload="metadata"></audio></div><div class="rounded-[22px] bg-white border overflow-hidden"><div id="sp-list" class="divide-y divide-black/5">${CONFIG.musicas.map((m,i)=>`<div data-idx="${i}" class="sp-item flex items-center gap-4 p-4 hover:bg-[#F5F1EB] cursor-pointer ${i===0?'bg-[#F5F1EB]':''}"><div class="h-12 w-12 rounded-[8px] overflow-hidden bg-[#EDE7DD]"><img src="${m.cover}" class="w-full h-full object-cover"></div><div class="flex-1 min-w-0"><p class="serif text-[15px] truncate">${m.title}</p><p class="sans text-[12px] opacity-60 truncate">${m.artist}</p></div></div>`).join('')}</div></div></div></div>`;
  const audio = document.getElementById('sp-audio'); const playBtn = document.getElementById('sp-play'); const prevBtn = document.getElementById('sp-prev'); const nextBtn = document.getElementById('sp-next'); const cover = document.getElementById('sp-cover'); const titleEl = document.getElementById('sp-title'); const artistEl = document.getElementById('sp-artist'); const curEl = document.getElementById('sp-current'); const durEl = document.getElementById('sp-duration'); const progWrap = document.getElementById('sp-progress-wrap'); const prog = document.getElementById('sp-progress'); const vol = document.getElementById('sp-volume'); const listItems = document.querySelectorAll('.sp-item'); let idx=0; function format(t){ if(isNaN(t)) return '0:00'; const m=Math.floor(t/60); const s=Math.floor(t%60).toString().padStart(2,'0'); return `${m}:${s}` } function load(i){ idx=i; const m=CONFIG.musicas[i]; audio.src=m.src; cover.src=m.cover; titleEl.textContent=m.title; artistEl.textContent=m.artist; listItems.forEach((el,j)=>el.classList.toggle('bg-[#F5F1EB]',j===i)); audio.load(); audio.play().then(()=>playBtn.textContent='⏸').catch(()=>playBtn.textContent='▶'); } function togglePlay(){ if(audio.paused){ audio.play().then(()=>playBtn.textContent='⏸'); } else{ audio.pause(); playBtn.textContent='▶'; } } playBtn.onclick=togglePlay; prevBtn.onclick=()=>{ let n=idx-1; if(n<0) n=CONFIG.musicas.length-1; load(n); }; nextBtn.onclick=()=>{ let n=idx+1; if(n>=CONFIG.musicas.length) n=0; load(n); }; listItems.forEach(el=>el.onclick=()=>load(parseInt(el.dataset.idx))); audio.addEventListener('timeupdate',()=>{ prog.style.width=(audio.currentTime/audio.duration*100||0)+'%'; curEl.textContent=format(audio.currentTime); }); audio.addEventListener('loadedmetadata',()=>{ durEl.textContent=format(audio.duration); }); progWrap.onclick=(e)=>{ const r=progWrap.getBoundingClientRect(); const p=(e.clientX-r.left)/r.width; audio.currentTime=p*audio.duration; }; vol.oninput=()=>{ audio.volume=parseFloat(vol.value); }; audio.addEventListener('ended',()=>{ let n=idx+1; if(n>=CONFIG.musicas.length) n=0; load(n); }); audio.src=CONFIG.musicas[0].src;
}
const io = new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('is-visible')}),{threshold:.15});
$$('.reveal').forEach(el=>io.observe(el));