const openBtn=document.getElementById('openInvitation');
const welcome=document.getElementById('welcome');
const envelope=document.querySelector('.envelope');
const invitation=document.getElementById('invitation');
const closeBtn=document.getElementById('closeInvitation');
const rsvp=document.getElementById('rsvp');
const toast=document.getElementById('toast');

function makeParticles(){
  const holder=document.getElementById('particles');
  for(let i=0;i<38;i++){
    const p=document.createElement('span');
    p.className='particle';
    p.style.left=Math.random()*100+'%';
    p.style.animationDelay=(Math.random()*7)+'s';
    p.style.animationDuration=(5+Math.random()*6)+'s';
    p.style.transform=`scale(${.4+Math.random()*1.4})`;
    holder.appendChild(p);
  }
}
makeParticles();

openBtn.addEventListener('click',()=>{
  envelope.classList.add('open');
  setTimeout(()=>{
    welcome.classList.add('exit');
    invitation.classList.add('show');
    invitation.setAttribute('aria-hidden','false');
    document.body.style.overflow='auto';
  },1050);
});

closeBtn.addEventListener('click',()=>{
  invitation.classList.remove('show');
  invitation.setAttribute('aria-hidden','true');
  setTimeout(()=>{
    welcome.classList.remove('exit');
    envelope.classList.remove('open');
    document.body.style.overflow='hidden';
  },700);
});

rsvp.addEventListener('click',()=>{
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),3500);
});

const target=new Date('2026-12-20T19:00:00+02:00').getTime();
function countdown(){
  let diff=Math.max(0,target-Date.now());
  const d=Math.floor(diff/86400000); diff%=86400000;
  const h=Math.floor(diff/3600000); diff%=3600000;
  const m=Math.floor(diff/60000); diff%=60000;
  const s=Math.floor(diff/1000);
  document.getElementById('days').textContent=String(d).padStart(2,'0');
  document.getElementById('hours').textContent=String(h).padStart(2,'0');
  document.getElementById('minutes').textContent=String(m).padStart(2,'0');
  document.getElementById('seconds').textContent=String(s).padStart(2,'0');
}
countdown(); setInterval(countdown,1000);
