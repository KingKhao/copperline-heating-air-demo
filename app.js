'use strict';
const services={
 cooling:{title:"Let's get the cool back.",description:"Warm air, weak airflow or a system that just won't start? Find out what's behind it before deciding on a repair.",items:['Cooling and airflow concerns','Unexpected noises and cycling','Clear repair or replacement options'],action:'Request AC service'},
 heating:{title:'Warmth, when you need it.',description:"Desert nights can be cold, too. Get help with a furnace or heat pump that isn't keeping your home comfortable.",items:['Heating and heat-pump concerns','Uneven temperatures around the home','Options explained before work begins'],action:'Request heating service'},
 maintenance:{title:'Get ahead of the season.',description:'Give your heating and cooling a little attention before the busy season. Tell us when your system was last serviced.',items:['Seasonal system checkups','Airflow and performance concerns','A plan for ongoing maintenance'],action:'Plan a tune-up'},
 replacement:{title:'A fresh start for your home.',description:"When repairs stop making sense, explore a new system with your home's needs in mind. Start with a conversation, not a guess.",items:['Discuss your home and comfort goals','Review suitable system options','Understand the installation process'],action:'Explore a new system'}
};
const panel=document.getElementById('service-panel');
function selectService(key,animate=true){
 const service=services[key];if(!service)return;
 document.querySelectorAll('[data-service]').forEach(button=>{const active=button.dataset.service===key;button.classList.toggle('active',active);button.setAttribute('aria-expanded',String(active));});
 document.getElementById('service-title').textContent=service.title;
 document.getElementById('service-description').textContent=service.description;
 document.getElementById('service-includes').replaceChildren(...service.items.map(text=>{const item=document.createElement('li');item.textContent=text;return item;}));
 const request=document.getElementById('service-request');request.textContent=service.action+' ↗';request.dataset.request=key;
 if(animate&&!matchMedia('(prefers-reduced-motion:reduce)').matches){panel.classList.remove('switching');requestAnimationFrame(()=>panel.classList.add('switching'));}
}
document.querySelectorAll('[data-service]').forEach(button=>button.addEventListener('click',event=>selectService(button.dataset.service,event.detail!==0)));
document.getElementById('service-request').addEventListener('click',()=>{document.getElementById('service').value=document.getElementById('service-request').dataset.request;});
document.getElementById('demo-fields').disabled=false;
const form=document.getElementById('request-form'),success=document.getElementById('request-success');
form.addEventListener('submit',event=>{
 event.preventDefault();if(!form.reportValidity())return;
 const data=new FormData(form),summary=document.getElementById('request-summary');summary.replaceChildren();
 const values=[['Service',form.elements.service.selectedOptions[0].textContent],['Name',data.get('name').trim()],['ZIP code',data.get('zip')],['Email',data.get('email').trim()],['What is happening',data.get('message').trim()]];
 values.forEach(([label,value])=>{const term=document.createElement('dt'),description=document.createElement('dd');term.textContent=label;description.textContent=value;summary.append(term,description);});
 form.hidden=true;success.hidden=false;success.focus({preventScroll:true});success.scrollIntoView({block:'center',behavior:'auto'});
});
document.getElementById('request-again').addEventListener('click',()=>{form.reset();form.hidden=false;success.hidden=true;document.getElementById('service').focus({preventScroll:true});form.scrollIntoView({block:'start',behavior:'auto'});});
// The demo has no endpoint, analytics, storage, outgoing email or payment flow.

// Short, one-time entrances. All content remains visible if this enhancement fails.
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
 const targets=document.querySelectorAll('.hero-copy>*:not(.hero-foot),.hero-photo,.intro>*,.service-choice,.service-panel,.approach-photo,.approach-copy>*,.comfort-band>*,.questions>*,.contact-copy,.request-form');
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(!entry.isIntersecting)return;observer.unobserve(entry.target);
  const photo=entry.target.matches('figure,.approach-photo,.comfort-band>img');
  const row=entry.target.matches('.service-choice');
  entry.target.animate([{opacity:.4,transform:photo?'scale(.97)':row?'translateX(-12px)':'translateY(16px)'},{opacity:1,transform:'none'}],{duration:photo?850:550,easing:'cubic-bezier(.23,1,.32,1)'});
 }),{threshold:.12});targets.forEach(target=>observer.observe(target));
}
