function ToggleMode(){

   const html = document.documentElement;
    html.classList.toggle('light');

    //Pegar a tag img
  const img = document.querySelector(".profile img");

    //substituir a img
    if(html.classList.contains("light")){

        //se tiver no modo ligth altere a imagem
        img.setAttribute("src", "./assets/avatar-light.png");
    }else{

        //se tiver no modo padrão 

        img.setAttribute("src","./assets/avatar.png");
    }
}



//     if(html.classList.contains('light')){


//         html.classList.remove('light');
       

// }else{

//      html.classList.add('light');
     
// }
