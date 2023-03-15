const display = document.querySelector("#display")
const buttons = document.querySelectorAll("button")

buttons.forEach((item) => {
    item.onclick = () => {
        switch (item.id) {
            case "clear":
                display.innerText = ""
                break
            case "backspace":
                let input = display.innerText.toString()
                display.innerText = input.substr(0, input.length - 1)
                break;
            case "equal":
                if (display.innerText != "") {
                    console.log(display.innerText)
                    display.innerText = eval(display.innerText)
                } else {
                    display.innerText = "Null"
                    setTimeout(() => (display.innerText = ""), 2000)
                }
                break
            default:
                display.innerText += item.id
                break
        }
    }
})

const themeToggleBtn = document.querySelector(".theme-toggler")
const calculator = document.querySelector(".calculator")

let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
}