const imgs = document.querySelectorAll('.headerslider ul img');

const pre_btn= document.querySelector('.control-pre');
const next_btn= document.querySelector('.control-next');

let n=0;

function changeslide() {
         for (let i = 0; i < imgs.length; i++) {
                imgs[i].style.display = 'none';
            
         }
         imgs[n].style.display = 'block';
}

 changeslide();

 
 pre_btn.addEventListener('click', (e)=>{
            if (n >0){
              n--;
         }
         else
         {
              n = imgs.length -1;
         }
         changeslide();



 } )
 next_btn.addEventListener('click', (e)=>{
       if (n < imgs.length -1){
         n++;
    }
    else
    {
         n =0;
    }
    changeslide();


})



const scrollContainer = document.querySelectorAll('.product');

for (const item of scrollContainer) {
       item.addEventListener('wheel', (evt)=>{
              evt.preventDefault();
              item.scrollLeft += evt.deltayl;
       }); 
}
