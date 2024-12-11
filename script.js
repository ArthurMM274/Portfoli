function onClick(){

    document.querySelector('.menu-btn').addEventListener('click', (e) =>{
        document.querySelector('#btn1').classList.toggle('btn1C')
        document.querySelector('#btn2').classList.toggle('btn2C')
        document.querySelector('#btn3').classList.toggle('btn3C')
        document.querySelector('.nav-list').classList.toggle('nav-listC')
        document.querySelector('.nav-bar').classList.toggle('nav-barC')
        document.querySelector('.menu').classList.toggle('menuC')
        document.querySelector('.body').classList.toggle('contC')
        }) 
}
onClick()