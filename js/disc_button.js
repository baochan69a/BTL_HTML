let next = document.querySelector('.disc_next')
let prev = document.querySelector('.disc_prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('#DISC_QUESTION .disc-div')
    document.querySelector('#DISC_QUESTION').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('#DISC_QUESTION .disc-div')
    document.querySelector('#DISC_QUESTION').prepend(items[items.length - 1]) // here the length of items = 6
})