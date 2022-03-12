if(window.innerWidth < 1000){// se o tamanho do ecra for menor que 1000 desliga as animaçoes, caso contrario coloca as animações com um offset de 300 e uma duração de 1000
    AOS.init({disable: true,});
  }else{
    AOS.init({
      offset: 300,
      duration: 1000,

    });}