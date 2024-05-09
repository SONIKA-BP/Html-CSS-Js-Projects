let sticker=document.querySelector('#sticker');
let stickers=["😍","💞","😉","😢","💝","🫤","😎","🤣","🥰","😁","😀"];
sticker.addEventListener('mouseover',function()
{
    sticker.innerHTML=stickers[Math.floor(Math.random()*stickers.length)];
});