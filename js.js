function text() {
        // Получаем текущий текст без лишнего HTML
        let textPoleNow = textPole.textContent

        // Применяем стили по условию
        if (isBoldButton) {
            textPoleNow = `<b>${textPoleNow}</b>`
        }
        if (isItalicButton) {
            textPoleNow = `<em>${textPoleNow}</em>`
        }
        if (isUnderlineButton) {
            textPoleNow = `<u>${textPoleNow}</u>`
        }
        if (isstrikeThrough) {
            textPoleNow = `<strike>${textPoleNow}</strike>`
        }
    
        // Применяем результат обратно
        textPole.innerHTML = textPoleNow
}
const textPole = document.querySelector(".text-pole"),
    boldButton = document.querySelector("#boldButton"),
    italicButton = document.querySelector("#italic"),
    underlineButton = document.querySelector("#underline"),
    strikeThroughButton = document.querySelector("#strikeThrough")
let isBoldButton = false,
    isItalicButton = false,
    isUnderlineButton = false,
    isstrikeThrough = false

boldButton.addEventListener("click", () => {
    if (isBoldButton) {
        isBoldButton = false
        text()
    } else {
        isBoldButton = true
        text()
    }
})
italicButton.addEventListener("click", () => {
    if (!isItalicButton) {
        isItalicButton = true
        text()
    } else {
        isItalicButton = false
        text()
    }
})
underlineButton.addEventListener("click", () => {
    if (!isUnderlineButton) {
        isUnderlineButton = true
        text()
    } else {
        isUnderlineButton = false
        text()
    }
})
strikeThroughButton.addEventListener("click", () => {
    if (!isstrikeThrough) {
        isstrikeThrough = true
        text()
    } else {
        isstrikeThrough = false
        text()
    }
})
const textAlignLeft = document.querySelector("#textAlignLeft"),
    textAlignRight = document.querySelector("#textAlignRight"),
    textAlignCenter = document.querySelector("#textAlignCenter")

textAlignLeft.addEventListener("click", () => {
    textPole.style.textAlign = "left"
})
textAlignRight.addEventListener("click", () => {
    textPole.style.textAlign = "right"
})
textAlignCenter.addEventListener("click", () => {
    textPole.style.textAlign = "center"
})
const form = document.querySelector('#colorForm')
form.addEventListener('input', function (event) {
    event.preventDefault()
    const colorValue = document.querySelector('#colorPicker').value
    textPole.style.color = `${colorValue}`
})

const fontSizeEdit = document.querySelector("#font-size")
let fontSize = parseInt(window.getComputedStyle(textPole).getPropertyValue("font-size"))
const add = document.querySelector("#add")
const minus = document.querySelector("#minus")

fontSizeEdit.textContent = `${fontSize}px`

add.addEventListener("click", () => {
    fontSize += 1 // Увеличиваем шрифт
    textPole.style.fontSize = `${fontSize}px`
    fontSizeEdit.textContent = `${fontSize}px`
})

minus.addEventListener("click", () => {
    if(fontSize > 10){
        fontSize -= 1 // Уменьшаем шрифт
        textPole.style.fontSize = `${fontSize}px`
        fontSizeEdit.textContent = `${fontSize}px`
    }else{
        alert("не може бути менше 10!")
    }
})
const fontFamily = document.querySelector("#fontfamily")

fontFamily.addEventListener("input", () => {
    switch (fontFamily.value) {
        case "serif":
            textPole.style.fontFamily = "serif"
            break
        case "monospace":
            textPole.style.fontFamily = "monospace"
            break
        case "SmoochSans": 
            textPole.style.fontFamily = "'Smooch Sans', sans-serif"
            break
        case "PlaywriteVN":
            textPole.style.fontFamily = "'Playwrite VN', sans-serif"
            break
        case "LexendGiga":
            textPole.style.fontFamily = "'Lexend Giga', sans-serif"
            break
        default:
            textPole.style.fontFamily = "initial"
    }
})
const letterSpacingEdit = document.querySelector("#letter-spacing")
let letterSpacing = parseFloat(window.getComputedStyle(textPole).getPropertyValue("letter-spacing")) || 0
const addLetterSpacing = document.querySelector("#add-letter-spacing")
const minusLetterSpacing = document.querySelector("#minus-letter-spacing")

letterSpacingEdit.textContent = `${letterSpacing}px`

addLetterSpacing.addEventListener("click", () => {
    letterSpacing += 0.5
    textPole.style.letterSpacing = `${letterSpacing}px`
    letterSpacingEdit.textContent = `${letterSpacing}px`
})

minusLetterSpacing.addEventListener("click", () => {
    if (letterSpacing > -1.5) {
        letterSpacing -= 0.5
        textPole.style.letterSpacing = `${letterSpacing}px`
        letterSpacingEdit.textContent = `${letterSpacing}px`
    }else{

    }
})
const lineHeightEdit = document.querySelector("#line-height")
let lineHeight = parseFloat(window.getComputedStyle(textPole).getPropertyValue("line-height")) || 1
const addLineHeight = document.querySelector("#add-line-height")
const minusLineHeight = document.querySelector("#minus-line-height")


lineHeightEdit.textContent = `${lineHeight}`


addLineHeight.addEventListener("click", () => {
    lineHeight += 0.1
    textPole.style.lineHeight = lineHeight.toFixed(1)
    lineHeightEdit.textContent = `${lineHeight.toFixed(1)}`
})


minusLineHeight.addEventListener("click", () => {
    if (lineHeight > 1) {
        lineHeight -= 0.1 
        textPole.style.lineHeight = lineHeight.toFixed(1)
        lineHeightEdit.textContent = `${lineHeight.toFixed(1)}`
    } else {
        alert("не може бути менше 1!")
    }
})
const textTransform = document.querySelector("#textTransform") 

textTransform.addEventListener("input", () => { 
    switch (textTransform.value) {
        case "uppercase":
            textPole.style.textTransform = "uppercase"
            break
        case "lowercase":
            textPole.style.textTransform = "lowercase"
            break
        case "none": 
            textPole.style.textTransform = "none"
            break
        default:
            textPole.style.textTransform = "none" 
    }
})
const firstColorPicker = document.querySelector("#firstColorPicker")
const firstPercentInput = document.querySelector("#firstPercent")
const secondColorPicker = document.querySelector("#secondColorPicker")
const secondPercentInput = document.querySelector("#secondPercent")
gradientForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const firstColor = firstColorPicker.value 
    const firstPercent = parseInt(firstPercentInput.value) || 0 
    const secondColor = secondColorPicker.value 
    const secondPercent = parseInt(secondPercentInput.value) || 100

    if (firstPercent >= 0 && secondPercent <= 100 && firstPercent < secondPercent) {
        const gradient = `linear-gradient(to right, ${firstColor} ${firstPercent}%, ${secondColor} ${secondPercent}%)`
        textPole.style.background = gradient
    } else {
        alert("Перевірте правильність введених даних!")
    }
})
