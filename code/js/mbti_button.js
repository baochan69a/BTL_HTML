let next = document.querySelector('.mbti_next')
let prev = document.querySelector('.mbti_prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('#MBTI_QUESTION .mbti-div')
    document.querySelector('#MBTI_QUESTION').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('#MBTI_QUESTION .mbti-div')
    document.querySelector('#MBTI_QUESTION').prepend(items[items.length - 1]) // here the length of items = 6
})