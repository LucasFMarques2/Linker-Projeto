function mudarModo() {
   const html = document.documentElement

   html.classList.toggle('light')

   //pegar a tag image
   const img = document.querySelector('#profile img')
   //trocar a img

   if(html.classList.contains('light')){
    img.setAttribute('src', './assets/avatar-sun.png')
   }else{
    img.setAttribute("src", "./assets/avatar.png")
   }

}
