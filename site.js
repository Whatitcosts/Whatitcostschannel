(() => {
 const c=window.WIC_CONFIG||{};
 const youtube=String(c.youtubeUrl||'').trim();
 const email=String(c.businessEmail||'').trim();
 document.querySelectorAll('[data-youtube-link]').forEach(a=>{
   if(/^https:\/\/(www\.)?youtube\.com\//i.test(youtube)){a.href=youtube;a.hidden=false;}
   else a.hidden=true;
 });
 document.querySelectorAll('[data-channel-handle]').forEach(el=>{el.textContent=c.channelHandle||'Our YouTube channel';});
 document.querySelectorAll('[data-email-display]').forEach(el=>{el.textContent=email||'Business contact will be published here.';});
 document.querySelectorAll('[data-email-link]').forEach(el=>{
   if(email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){el.href='mailto:'+email;el.textContent=email;el.hidden=false;}
   else{el.removeAttribute('href');el.textContent='Business email not yet configured';el.hidden=false;}
 });
})();
