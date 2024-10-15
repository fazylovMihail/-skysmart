let contentBtn = document.querySelector('.content-btn')
let formConteiner = document.querySelector('.form-conteiner')
let inputContent = document.querySelectorAll('.input-content')
clickSubmit = false

function OpenContent(){
    contentBtn.style.display = 'none'
    formConteiner.style.display = 'flex'
}
function CloseContent(clickTrue){
    let verivication = false
    contentBtn.style.display = 'flex'
    formConteiner.style.display = 'none'
    clickSubmit = clickTrue
    for(let i=0;i<inputContent.length;i++){
        if(inputContent[i].value != '' && clickTrue==true){
            verivication = true
        }
    }
    
    if(verivication == true){
        alert('Вы успешно зарегистрировались')
    }
}

CloseContent(false)