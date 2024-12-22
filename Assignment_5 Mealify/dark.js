let dark = localStorage.getItem('dark')
const themeswitch = document.getElementById('theme-switch')

const enabledark = () => {
    document.body.classList.add('dark')
    localStorage.setItem('dark', 'active')
}

const disabledark = () => {
    document.body.classList.remove('dark')
    localStorage.setItem('dark', 'null')
}

if (dark === "active") enabledark()

themeswitch.addEventListener("click",()=> {
    dark = localStorage.getItem('dark')
    dark !== "active" ? enabledark() : disabledark()
})