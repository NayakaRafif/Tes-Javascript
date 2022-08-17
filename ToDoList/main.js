let clickButton = document.getElementById('click');
let TempatToDo = document.getElementById('TempatToDo');
let inputField = document.getElementById('inputField');

clickButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField.value;
    TempatToDo.appendChild(paragraph);
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-trough";
    })
    paragraph.addEventListener('dblclick', function(){
        TempatToDo.removeChild(paragraph);
    })
})

