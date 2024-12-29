const openbtn =document.getElementById('open')
const closebtn =document.getElementById('close')
const container =document.getElementById('container')
const circle=document.getElementById('circle-container')
openbtn.addEventListener('click',function(){

    container.classList.add('rotate')
    circle.classList.add('rotate-circle')

})
closebtn.addEventListener('click',function(){
    container.classList.remove('rotate')
    circle.classList.remove('rotate-circle')
})

