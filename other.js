//  1st section

document.getElementById('bold').addEventListener('click', function(){
   
    document.getElementById('textArea').classList.toggle('text-bold')
    document.getElementById('bold').classList.toggle('bg-blue-400')
})
document.getElementById('italic').addEventListener('click', function(){
    document.getElementById('textArea').classList.toggle('text-italic')
    document.getElementById('italic').classList.toggle('bg-blue-400')

})
document.getElementById('underline').addEventListener('click', function(){
    document.getElementById('textArea').classList.toggle('text-underline')
    document.getElementById('underline').classList.toggle('bg-blue-400')

})

// 2nd section
document.getElementById('align-left').addEventListener('click', function(){
    document.getElementById('textArea').classList.toggle('text-left')
    document.getElementById('align-left').classList.toggle('bg-blue-400')

})
document.getElementById('align-right').addEventListener('click', function(){
    document.getElementById('textArea').classList.toggle('text-right')
    document.getElementById('align-right').classList.toggle('bg-blue-400')
})
document.getElementById('align-center').addEventListener('click', function(){
    document.getElementById('textArea').classList.toggle('text-center')
    document.getElementById('align-center').classList.toggle('bg-blue-400')
})
document.getElementById('align-justify').addEventListener('click', function(){
    document.getElementById('textArea').classList.toggle('text-justify')
    document.getElementById('align-justify').classList.toggle('bg-blue-400')
})


// 3rd section
document.getElementById('font').addEventListener('click', function(){
    document.getElementById('textArea').classList.toggle('uppercase')
    document.getElementById('font').classList.toggle('bg-blue-400')
})
document.getElementById('color').addEventListener('click', function(){
    let colorvalue = document.getElementById('color').value
    document.getElementById('textArea').style.color = colorvalue
    
})
document.getElementById('fontSize').addEventListener('click', function(){
    let fontSizeValue = document.getElementById('fontSize').value + 'px'
    document.getElementById('textArea').style.fontSize = fontSizeValue
    
})

