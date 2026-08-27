(()=>{
 const btn=document.querySelector('.hamburger');
 const nav=document.querySelector('.mobile-nav');
 if(btn&&nav){
   btn.addEventListener('click',()=>{
     const open=nav.classList.toggle('open');
     btn.classList.toggle('open',open);
     btn.setAttribute('aria-expanded',String(open));
   });
   nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
     nav.classList.remove('open');btn.classList.remove('open');btn.setAttribute('aria-expanded','false');
   }));
 }
 const wa='https://wa.me/6285881770512?text='+encodeURIComponent('Halo, saya ingin konsultasi strategi untuk brand saya.');
 document.querySelectorAll('a[href="#whatsapp"],a[href="#mobile-whatsapp"]').forEach(a=>a.href=wa);
})();
