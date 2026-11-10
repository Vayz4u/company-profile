// Skrip bersama untuk halaman About Us
const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
const btn=$('.menu-btn'),menu=$('#menu');
btn.onclick=()=>btn.setAttribute('aria-expanded',menu.classList.toggle('open'));
menu.onclick=e=>{if(e.target.tagName==='A'){menu.classList.remove('open');btn.setAttribute('aria-expanded',false)}};
$('#year').textContent=new Date().getFullYear();
// Ganti dengan nomor WhatsApp perusahaan (format 62..., tanpa + atau spasi)
const NOMOR_WA='620000000000';
$('#wa').href=`https://wa.me/${NOMOR_WA}?text=`+encodeURIComponent('Halo Palma Nusantara, saya ingin bertanya tentang produk minyak goreng.');
function toast(t,ms=6000){const d=document.createElement('div');d.className='toast';d.innerHTML='<span></span><button type="button" aria-label="Tutup">&times;</button>';
d.firstChild.textContent=t;d.querySelector('button').onclick=()=>d.remove();$('#toasts').appendChild(d);setTimeout(()=>d.remove(),ms)}
setTimeout(()=>{$('#wa').classList.add('hint');setTimeout(()=>$('#wa').classList.remove('hint'),5000)},6000);
// Muncul halus saat di-scroll
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
$$('.mission-grid article,.fcard,.aside-card,.vision').forEach((el,i)=>{el.classList.add('rv');el.style.transitionDelay=(i%3)*80+'ms';io.observe(el)})}