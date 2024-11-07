const forma = document.getElementById('forma')
const result = document.getElementById('result')

forma.addEventListener('submit', function (e) {
    e.preventDefault()
    const num1 = document.getElementById('num1').value
    const num2 = document.getElementById('num2').value
    if(!num1 || !num2){
        result.textContent = ('заполните все поля')
        return;        
    }

    const operator = document.getElementById('operator').value
    result.textContent = (eval(`${num1}${operator}${num2}`))

})

