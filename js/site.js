/* KAZM-website: menu, gegevens inladen, formulier en botbescherming */

(function(){var b=document.querySelector('.menu-toggle'),n=document.getElementById('hoofdmenu');function s(o){n.classList.toggle('open',o);b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Menu sluiten':'Menu openen');}b.addEventListener('click',function(){s(!n.classList.contains('open'))});n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){s(false)})});})();

(function(){
var G=window.KAZM||{};
function get(p){return p.split('.').reduce(function(o,k){return o==null?o:o[k];},G);}
document.querySelectorAll('[data-veld]').forEach(function(el){
 var v=get(el.getAttribute('data-veld')); if(v==null||v==='')return; v=String(v);
 var s=el.getAttribute('data-soort');
 if(s==='email'){var adr=v.replace(/\s*\[\s*at\s*\]\s*/gi,'@').replace(/\s*\[\s*(dot|punt)\s*\]\s*/gi,'.').trim();if(adr.indexOf('@')<1)return;el.textContent='';var btn=document.createElement('button');btn.type='button';btn.textContent='Toon e-mailadres';btn.setAttribute('style','font: inherit; font-weight: 600; color: #2B3080; background: none; border: 1px solid #C3C8D6; border-radius: 6px; padding: 10px 14px; cursor: pointer');btn.addEventListener('click',function(){var a=document.createElement('a');a.href='mailto:'+adr;a.textContent=adr;a.style.fontWeight='600';el.replaceChild(a,btn);a.focus();});el.appendChild(btn);}
 else if(s==='telefoon'&&/[0-9]/.test(v)){el.textContent='';var t=document.createElement('a');t.href='tel:'+v.replace(/[^0-9+]/g,'');t.textContent=v;el.appendChild(t);}
 else el.textContent=v;
 if(s&&el.textContent){var rij=el.closest('[data-rij]');if(rij)rij.hidden=false;var dd=el.closest('dd');if(dd){dd.hidden=false;var dt=dd.previousElementSibling;if(dt&&dt.tagName==='DT')dt.hidden=false;}}
});
var kk=document.querySelector('[data-knop="kamp"]');if(kk&&G.kamp){var kt=(G.kamp.knopTekst||'').trim(),kl=(G.kamp.knopLink||'').trim();if(kt)kk.textContent=kt;if(/^https:\/\//.test(kl)){kk.href=kl;kk.target='_blank';kk.rel='noopener';}}
var br=document.querySelector('[data-link="brochure"]');var bl=(G.brochure||'').trim();if(br&&bl){br.href=bl;br.hidden=false;}
var tb=document.querySelector('[data-lijst="kalender"]');
if(tb&&Array.isArray(G.kalender)&&G.kalender.length){tb.textContent='';G.kalender.forEach(function(r,i){var tr=document.createElement('tr');if(r&&r.kampweek){r={wanneer:get('kamp.week'+r.kampweek),activiteit:'Zweefkamp – week '+r.kampweek};}[r.wanneer,r.activiteit].forEach(function(t,j){var td=document.createElement('td');td.textContent=t==null?'':t;td.style.padding='16px 20px';if(i<G.kalender.length-1)td.style.borderBottom='1px solid #ECEEEA';if(j===0)td.style.width='42%';tr.appendChild(td);});tb.appendChild(tr);});}
function bestemming(v){v=(v||'').trim();
 if(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(v))return{svc:'w3',key:v};
 if(/^https:\/\//.test(v))return{svc:'url',url:v};
 return null;}
function richt(form,b,onderwerp){
 var su=form.querySelector('[data-onderwerp]'),hp=form.querySelector('[data-honing]');
 form.querySelectorAll('[data-extra]').forEach(function(x){x.remove();});
 function add(n,v){var i=document.createElement('input');i.type='hidden';i.name=n;i.value=v;i.setAttribute('data-extra','');form.appendChild(i);}
 if(su)su.value=onderwerp;
 if(b.svc==='w3'){form.action='https://api.web3forms.com/submit';if(su)su.name='subject';if(hp){hp.name='botcheck';hp.disabled=!hp.value;}add('access_key',b.key);add('from_name','Zweefclub Meeuw (KAZM)');var em=form.querySelector('[name="email"]');if(em&&em.value)add('replyto',em.value);}
 else{form.action=b.url;if(su)su.name='_subject';if(hp){hp.name='_gotcha';hp.disabled=false;}}
}
var f=document.getElementById('infoform');
var bA=bestemming(G.formulier),bK=bestemming(G.formulierKamp);
var na=document.getElementById('algemeen-niet-actief');
if(!bA&&na){na.hidden=false;var ko=na.querySelector('[data-kamp-ok]');if(ko&&bK)ko.hidden=false;}
function kampModus(){if(!f)return;var s=f.querySelector('[name="Interesse"]'),kamp=!!(s&&s.value==='Zweefkamp'),box=f.querySelector('[data-kampvelden]');
 if(box){box.hidden=!kamp;box.querySelectorAll('input,select').forEach(function(x){x.disabled=!kamp;});}
 if(na&&!bA)na.hidden=kamp&&!!bK;
 var gf=document.getElementById('geen-formulier');if(gf)gf.hidden=true;}
if(f){var sel=f.querySelector('[name="Interesse"]');if(sel)sel.addEventListener('change',kampModus);kampModus();
 f.addEventListener('submit',function(e){var s=f.querySelector('[name="Interesse"]'),kamp=!!(s&&s.value==='Zweefkamp'),b=kamp?bK:bA;
  if(!b){e.preventDefault();var m=document.getElementById('geen-formulier');if(m)m.hidden=false;return;}
  richt(f,b,(kamp?'Zweefkamp':(s?s.value:'Infovraag'))+' via KAZM-website');});}
document.querySelectorAll('[data-interesse]').forEach(function(a){a.addEventListener('click',function(){var s=f&&f.querySelector('[name="Interesse"]');if(s){s.value=a.getAttribute('data-interesse');kampModus();}});});
var kb=document.querySelector('[data-knop="kamp"]');
if(kb&&!/^https:\/\//.test(((G.kamp||{}).knopLink||'').trim())){kb.addEventListener('click',function(){var s=f&&f.querySelector('[name="Interesse"]');if(s){s.value='Zweefkamp';kampModus();}});}
})();

(function(){var f=document.getElementById('infoform');if(!f)return;var t0=Date.now();f.addEventListener('submit',function(e){if(Date.now()-t0<3000){e.preventDefault();var m=document.getElementById('te-snel');if(m)m.hidden=false;t0=Date.now()-2000;}});})();
