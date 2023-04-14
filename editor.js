/*

░█████╗░░█████╗░██████╗░██╗███╗░░██╗░██████╗░  ██████╗░██╗░░░██╗  
██╔══██╗██╔══██╗██╔══██╗██║████╗░██║██╔════╝░  ██╔══██╗╚██╗░██╔╝  
██║░░╚═╝██║░░██║██║░░██║██║██╔██╗██║██║░░██╗░  ██████╦╝░╚████╔╝░  
██║░░██╗██║░░██║██║░░██║██║██║╚████║██║░░╚██╗  ██╔══██╗░░╚██╔╝░░  
╚█████╔╝╚█████╔╝██████╔╝██║██║░╚███║╚██████╔╝  ██████╦╝░░░██║░░░  
░╚════╝░░╚════╝░╚═════╝░╚═╝╚═╝░░╚══╝░╚═════╝░  ╚═════╝░░░░╚═╝░░░  

███████╗███╗░░░███╗░█████╗░██████╗░  ░█████╗░██████╗░███████╗██╗░░░░░
██╔════╝████╗░████║██╔══██╗██╔══██╗  ██╔══██╗██╔══██╗██╔════╝██║░░░░░
█████╗░░██╔████╔██║███████║██║░░██║  ███████║██║░░██║█████╗░░██║░░░░░
██╔══╝░░██║╚██╔╝██║██╔══██║██║░░██║  ██╔══██║██║░░██║██╔══╝░░██║░░░░░
███████╗██║░╚═╝░██║██║░░██║██████╔╝  ██║░░██║██████╔╝███████╗███████╗
╚══════╝╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═════╝░  ╚═╝░░╚═╝╚═════╝░╚══════╝╚══════╝
    
███████╗██████╗░░░░░█████╗░░█████╗░███╗░░░███╗░░░░██╗███████╗███╗░░░███╗░█████╗░██████╗░░█████╗░██████╗░███████╗██╗░░░░░░░██╗██╗
██╔════╝██╔══██╗░░░██╔══██╗██╔══██╗████╗░████║░░░██╔╝██╔════╝████╗░████║██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔════╝██║░░░░░░██╔╝██║
█████╗░░██████╦╝░░░██║░░╚═╝██║░░██║██╔████╔██║░░██╔╝░█████╗░░██╔████╔██║███████║██║░░██║███████║██║░░██║█████╗░░██║░░░░░██╔╝░██║
██╔══╝░░██╔══██╗░░░██║░░██╗██║░░██║██║╚██╔╝██║░██╔╝░░██╔══╝░░██║╚██╔╝██║██╔══██║██║░░██║██╔══██║██║░░██║██╔══╝░░██║░░░░░███████║
██║░░░░░██████╦╝██╗╚█████╔╝╚█████╔╝██║░╚═╝░██║██╔╝░░░███████╗██║░╚═╝░██║██║░░██║██████╔╝██║░░██║██████╔╝███████╗███████╗╚════██║
╚═╝░░░░░╚═════╝░╚═╝░╚════╝░░╚════╝░╚═╝░░░░░╚═╝╚═╝░░░░╚══════╝╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═════╝░╚═╝░░╚═╝╚═════╝░╚══════╝╚══════╝░░░░░╚═╝

*/



let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let hueRotate = document.getElementById("hue-rotate");

let upload = document.getElementById("upload");
let download = document.getElementById("download");
let img = document.getElementById("img");

let reset  = document.querySelector('span');
let imgBox  = document.querySelector('.img-box');


let height;
let width;


const canvas = document.getElementById("canvas");
const ctx =  canvas.getContext('2d');

function resetValue()
{
    img.style.filter = 'none';
    saturate.value = '100';
    contrast.value = '100';
    brightness.value = '100';
    sepia.value = '0';
    grayscale.value = '0';
    blur.value = '0';
    hueRotate.value = '0';

}


window.onload = function()
{
    reset.style.display = 'none';
    download.style.display = 'none';
    //imgBox.style.display = 'none';

}

upload.onchange = function()
{
    imgBox.style.display = 'block';
    reset.style.display = 'block';
    download.style.display = 'block';

    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);

    
    file.onload = function()
    {
        img.src = file.result;
        height = img.height;
        width = img.width;
    }

    img.onload = function (){

        canvas.height = height;
        canvas.width = width;


        ctx.drawImage(img,0,0,width,height);
        img.style.display = 'none';
    }
}

let filters = document.querySelectorAll("ul li input");
filters.forEach(filter => {

    filter.addEventListener('input', function(){
        ctx.filter = `
        
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        saturate(${saturate.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hueRotate.value}deg)
        
        `
        ctx.drawImage(img,0,0,canvas.width,canvas.height);


    })

})

download.onclick = function(){


   
    
    download.href = canvas.toDataURL();
}
