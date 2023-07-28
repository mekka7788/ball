const arrayImg = document.querySelectorAll(`.img-wrapper`)
const selectBtn = document.querySelector('.select-btn')
  

arrayImg.forEach((img) => {
    img.addEventListener('click' , () => {
        img.classList.toggle('bg-red')
    })
})
let ball = false
selectBtn.addEventListener('click', () => {
    if (ball === false){
        arrayImg.forEach((img) => {
                img.classList.add('bg-red')
        })
        ball = true
    } else {
        arrayImg.forEach((img) => {
                img.classList.remove('bg-red')
        })
        ball = false
    }
})
