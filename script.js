const config = window.VIVID_FLOW_CONFIG || {email:"",whatsapp:"",socials:{}};
const demoProjects = [
 {id:1,title:"Afterglow",category:"Video Editing",kind:"BRAND FILM",description:"A cinematic brand-film concept built around contrast, movement, and atmosphere. Replace this demo description with the story behind your actual project.",year:"2026",bg:"linear-gradient(135deg,#32146a,#090b1c 52%,#ec4cff)",shape:"radial-gradient(circle at 28% 24%,#f8c2ff,#a43dff 30%,#27205c 65%,#0b1028)",glow:"#b545ff"},
 {id:2,title:"Little Big World",category:"Animation",kind:"2D ANIMATION",description:"An animation showcase concept with a warm, character-led visual direction. Replace with your real project details and embedded media.",year:"2026",bg:"linear-gradient(135deg,#f3a15e,#613f71 56%,#1d1b36)",shape:"radial-gradient(circle at 32% 25%,#ffe9b4,#f98c5b 38%,#653b9b 70%)",glow:"#f89c66"},
 {id:3,title:"Liquid Logic",category:"Motion Graphics",kind:"MOTION STUDY",description:"An abstract motion-design study exploring fluid forms, light, and a sense of digital depth. Add your real showreel or project assets here.",year:"2026",bg:"linear-gradient(135deg,#e9f7ff,#171d31 50%,#07080d)",shape:"radial-gradient(circle at 30% 25%,#ffffff,#b8c7e5 23%,#53617b 50%,#10111a 74%)",glow:"#c1d6ff"},
 {id:4,title:"Synthetic Dreams",category:"AI Visuals",kind:"AI VISUALS",description:"A visual experiment combining art direction and AI-assisted imagery. Update this entry to reflect the real tools and process you used.",year:"2026",bg:"linear-gradient(135deg,#5a101f,#ef304f 40%,#11101a 85%)",shape:"radial-gradient(circle at 30% 25%,#ffb3d7,#ff365b 28%,#7c123a 57%,#14101b 78%)",glow:"#ff2e71"},
 {id:5,title:"Future Form",category:"Graphic Design",kind:"VISUAL IDENTITY",description:"A graphic-design concept for a bold, digital-first identity. Replace the demo artwork and description with your own design work.",year:"2026",bg:"linear-gradient(135deg,#132e41,#1c68a1 45%,#070b16)",shape:"radial-gradient(circle at 30% 20%,#c9ffff,#24d9ff 28%,#1550aa 57%,#12142b 78%)",glow:"#1ccfff"},
 {id:6,title:"Creator Mode",category:"Video Editing",kind:"SOCIAL CONTENT",description:"A short-form content concept built around strong pacing and a clear opening hook. Add the real social-video link or a hosted preview when ready.",year:"2026",bg:"linear-gradient(135deg,#28134d,#10101c 48%,#b62cff)",shape:"radial-gradient(circle at 30% 25%,#f3c8ff,#9b39ff 28%,#3a1874 58%,#10101b 80%)",glow:"#a33dff"}
];
let projects = [...demoProjects];
const grid = document.querySelector("#project-grid");
const filters = document.querySelector("#filters");
const count = document.querySelector("#project-count");
const dialog = document.querySelector("#project-dialog");
const dialogContent = document.querySelector("#dialog-content");
const closeDialog = document.querySelector("#dialog-close");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

function renderProjects(filter="All"){
  const visible = projects.filter(p => filter==="All" || p.category===filter);
  grid.innerHTML = visible.map((p,i)=>`
    <article class="project-card" tabindex="0" role="button" aria-label="View ${escapeHTML(p.title)} project" data-id="${p.id}" style="animation-delay:${i*65}ms">
      <div class="project-art" style="--art-bg:${p.bg};--shape:${p.shape};--glow:${p.glow}">
        <span class="art-type">${escapeHTML(p.kind || p.category)}</span><span class="art-index">VF / ${String(p.id).padStart(2,"0")}</span>
        <div class="art-shape"></div><div class="art-title-overlay">${escapeHTML(p.title)}</div>
      </div>
      <div class="project-info"><div><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.category)}</p></div><span class="project-open" aria-hidden="true">↗</span></div>
    </article>`).join("");
  count.textContent = `${String(visible.length).padStart(2,"0")} PROJECTS / ${projects.some(p=>p.demo===false)?"PORTFOLIO":"DEMO CONTENT"}`;
}
function escapeHTML(str=""){return String(str).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
filters.addEventListener("click",e=>{
 const btn=e.target.closest("[data-filter]");if(!btn)return;
 filters.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b===btn));
 renderProjects(btn.dataset.filter);
});
grid.addEventListener("click",e=>{const card=e.target.closest(".project-card");if(card)openProject(Number(card.dataset.id));});
grid.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.matches(".project-card")){e.preventDefault();openProject(Number(e.target.dataset.id));}});
function openProject(id){
 const p=projects.find(x=>x.id===id);if(!p)return;
 dialogContent.innerHTML=`<div class="dialog-hero" style="--art-bg:${p.bg}"><div class="art-shape" style="--shape:${p.shape};--glow:${p.glow};left:auto;right:8%;top:12%;width:35%"></div><div><p class="eyebrow">${escapeHTML(p.kind||p.category)} · ${escapeHTML(p.year||"")}</p><h2>${escapeHTML(p.title)}</h2></div></div><div class="dialog-body"><div><h3>THE PROJECT</h3><p>${escapeHTML(p.description)}</p></div><div><h3>DISCIPLINE</h3><p>${escapeHTML(p.category)}<br><br>This is demonstration content. Replace it with your real project details, media, process, and outcome.</p><a class="button button-primary" href="#contact" onclick="document.querySelector('#project-dialog').close()">Discuss a project ↗</a></div></div>`;
 if(typeof dialog.showModal==="function")dialog.showModal();else alert(p.title+"\n\n"+p.description);
}
closeDialog.addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close();});
document.querySelector("#show-all").addEventListener("click",()=>{filters.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b.dataset.filter==="All"));renderProjects("All");document.querySelector("#work").scrollIntoView({behavior:"smooth"});});
menuToggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));menuToggle.setAttribute("aria-label",open?"Close navigation":"Open navigation");});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");}));
document.querySelector("#year").textContent=new Date().getFullYear();

const socialIcons={Instagram:"◎",Facebook:"f",YouTube:"▶",LinkedIn:"in",Behance:"Bē"};
function buildContactLinks(){
 const list=document.querySelector("#contact-links"),mini=document.querySelector("#hero-socials");
 const entries=[];
 if(config.email && !config.email.includes("example.com"))entries.push({name:"Email",value:config.email,url:`mailto:${config.email}`,icon:"✉"});
 if(config.whatsapp)entries.push({name:"WhatsApp",value:"Chat on WhatsApp",url:`https://wa.me/${config.whatsapp.replace(/\D/g,"")}`,icon:"◉"});
 Object.entries(config.socials||{}).forEach(([name,url])=>{if(url&&/^https?:\/\//i.test(url))entries.push({name,value:url.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,""),url,icon:socialIcons[name]||"↗"});});
 list.innerHTML=entries.length?entries.map(x=>`<a class="contact-link" href="${escapeHTML(x.url)}" ${x.url.startsWith("http")?'target="_blank" rel="noopener noreferrer"':""}><span class="contact-icon">${escapeHTML(x.icon)}</span><span><strong>${escapeHTML(x.name)}</strong><small>${escapeHTML(x.value)}</small></span></a>`).join(""):`<div class="contact-empty">Add your email, WhatsApp and social profile links in <code>config.js</code> to display them here.</div>`;
 mini.innerHTML=entries.filter(x=>x.name!=="Email").slice(0,5).map(x=>`<a href="${escapeHTML(x.url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(x.name)}">${escapeHTML(x.icon)}</a>`).join("");
}
buildContactLinks();

document.querySelector("#contact-form").addEventListener("submit",e=>{
 e.preventDefault();
 const form=e.currentTarget,fd=new FormData(form);
 const email=config.email;
 if(!email||email.includes("example.com")){
   document.querySelector("#form-note").textContent="Before using this form, add your real email address in config.js. Then the form will prepare an email for you.";
   return;
 }
 const subject=encodeURIComponent(`Vivid Flow project inquiry — ${fd.get("projectType")}`);
 const body=encodeURIComponent(`Hi Harshana,\n\nMy name: ${fd.get("name")}\nMy email: ${fd.get("email")}\nProject type: ${fd.get("projectType")}\n\nProject details:\n${fd.get("message")||"I would like to discuss a project."}\n\nSent via the Vivid Flow portfolio website.`);
 window.location.href=`mailto:${email}?subject=${subject}&body=${body}`;
 document.querySelector("#form-note").textContent="Your email app should open with the message prepared. Review it and press Send in your email app.";
});

const observer=("IntersectionObserver" in window)?new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}}),{threshold:.12}):null;
document.querySelectorAll(".reveal").forEach(el=>observer?observer.observe(el):el.classList.add("is-visible"));
if(matchMedia("(pointer:fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches){
 const glow=document.querySelector(".cursor-glow");
 window.addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px";},{passive:true});
 document.querySelectorAll(".magnetic").forEach(el=>{el.addEventListener("pointermove",e=>{const r=el.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;el.style.transform=`translate(${x*.08}px,${y*.12}px)`;});el.addEventListener("pointerleave",()=>el.style.transform="");});
}
