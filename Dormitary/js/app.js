const form = document.querySelector('form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const messageInput = document.querySelector('#message')
const nameInfo = document.querySelector('.name-info')
const emailInfo = document.querySelector('.email-info')
const messageInfo = document.querySelector('.message-info')
const modal = document.querySelector('.modal')

let storedInfo = JSON.parse(localStorage.getItem('info')) ? JSON.parse(localStorage.getItem('info')) : []

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let name = nameInput.value.trim()
    let email = emailInput.value.trim()
    let textarea = messageInput.value.trim()

    if (name && email && textarea) {
        let obj = {
            name,
            email,
            textarea
        }

        storedInfo.push(obj)
        localStorage.setItem('info', JSON.stringify(storedInfo))
        nameInput.value = ""
        emailInput.value = ""
        messageInput.value = ""

        modal.classList.add('active')
        setTimeout(() => {
            modal.classList.remove('active')
        }, 3500)
    } else if (!name) {
        nameInfo.classList.add('active')
        setTimeout(() => {
            nameInfo.classList.remove('active')
        }, 3000)
    } else if (!email) {
        emailInfo.classList.add('active')
        setTimeout(() => {
            emailInfo.classList.remove('active')
        }, 3000)
    } else if (!textarea) {
        messageInfo.classList.add('active')
        setTimeout(() => {
            messageInfo.classList.remove('active')
        }, 3000)
    }
})