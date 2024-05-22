const password = document.getElementById('password')
const eyeIcon = document.getElementById('eyeicon')

eyeIcon.onclick = () => {
    if (password.type === 'password') {
        password.type = 'text'
        eyeIcon.src = './image/eye-open.png'
    }else{
        password.type = 'password'
        eyeIcon.src = './image/eye-close.png'

    }
}