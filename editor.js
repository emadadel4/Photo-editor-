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


let reset  = document.querySelector('span');
let imgBox  = document.querySelector('.img-box');

previewImg = document.querySelector(".preview-img img");


const applyFilters=() =>{

    previewImg.style.filter = ` 
    saturate(${saturate.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    saturate(${saturate.value}%)
    grayscale(${grayscale.value})
    blur(${blur.value}px) hue-rotate(${hueRotate.value}deg)`;
}

function resetValue()
{

}


window.onload = function()
{

}

upload.onchange = function()
{
    reset.style.display = 'block';
    download.style.display = 'block';

}

const loadImage = () =>{
    let file = upload.files[0];
    if(!file) return;
    previewImg.src = URL.createObjectURL(file);
}




let filters = document.querySelectorAll("ul li input");
filters.forEach(filter => {

    filter.addEventListener('input', function(){
        previewImg.filter = `
        
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        saturate(${saturate.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hueRotate.value}deg)
        `
        applyFilters();


    })



})

const saveImage = () =>{

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = previewImg.naturalWidth;
    canvas.height = previewImg.naturalHeight;



    ctx.filter = `
    saturate(${saturate.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    saturate(${saturate.value}%)
    grayscale(${grayscale.value})
    blur(${blur.value}px)
    hue-rotate(${hueRotate.value}deg)`;


    ctx.drawImage(previewImg, 0,0,canvas.width,canvas.height);



    
    const link = document.createElement("a");
    link.download = "edit.jpg";
    link.href = canvas.toDataURL();
    link.click();
}



upload.addEventListener("change",loadImage);
download.addEventListener("click",saveImage);