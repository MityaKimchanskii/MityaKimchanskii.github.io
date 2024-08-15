// const open = document.getElementById('open');
// const close = document.getElementById('close');
// const container = document.getElementById('.container');


// open.addEventListener('click', () => container.classList.add('show-nav'))

// close.addEventListener('click', () => container.classList.remove('show-nav'))



const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))


const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        addInactiveClasses()
        panel.classList.add('active')
        panel.classList.remove('inactive')
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}

function addInactiveClasses() {
    panels.forEach((panel) => {
        panel.classList.add('inactive')
    })
}