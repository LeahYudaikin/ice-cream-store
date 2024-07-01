for(let i=0; i<5; i++){    
    const img_gallery=document.createElement("div");
    img_gallery.id="img_gallery";
    gallery.appendChild(img_gallery);
    img_gallery.innerHTML+=`<img src="../../pic/products/news/${i+10}.webp" id="pic">
    <img src="../../pic/products/news/new.webp" id="new">`;
    img_gallery.onclick=(event)=>{
        sessionStorage.setItem("Products_category", "החדשים של 2023")
        sessionStorage.setItem("name", "news")
        window.location="../products/products.html";
    }
}