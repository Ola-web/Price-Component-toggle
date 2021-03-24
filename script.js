const toggle = document.getElementById('toggle')
const visible = document.getElementById('visible')

toggle.addEventListener('change', () => {
    visible.classList.toggle('show-monthly')
})