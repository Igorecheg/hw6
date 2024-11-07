const inter = document.getElementById('inter')

inter.addEventListener('submit', function (e) {
    e.preventDefault()
    const mail = document.getElementById('mail').value
    const psw = document.getElementById('psw').value
    const name = document.getElementById('name').value

    
    if(!name){
        alert('something gone wrong');
        return;        
    }
    if(!mail.match('^[^@]+@[^@]+\.[^@]+$')){
        alert('something gone wrong');
        return;        
    }
    if(!(psw.length >= 8)){
        alert('something gone wrong');
        return;
    }
    console.log('passed!')
})




