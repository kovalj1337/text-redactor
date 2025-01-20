function text() {
    let textPoleNow = textPole.innerHTML
    if (isBoldButton) {
        textPoleNow = `<b>${textPoleNow}</b>`
    }
    if (isItalicButton) {
        textPoleNow = `<em>${textPoleNow}</en>`
    }
    if (isUnderlineButton) {
        textPoleNow = `<u>${textPoleNow}</u>`
    }
    if (isstrikeThrough) {
        textPoleNow = `<strike>${textPoleNow}</strike>`
    }
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
const form = document.querySelector('#colorForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const colorValue = document.querySelector('#colorPicker').value;
    textPole.style.color = `${colorValue}`
})
// const fontSizeEdit = document.querySelector("#font-size"),
//     fontSize = window.getComputedStyle(textPole),
//     add = document.querySelector("#add"),
//     minus = document.querySelector("#minus")
    
// fontSizeEdit.textContent = `${fontSize.getPropertyValue("font-size")}`
// add.addEventListener("click", ()=>{
//     fontSize += 1
//     fontSizeEdit.textContent = `${fontSize.getPropertyValue("font-size")}`
// })
// minus.addEventListener("click", ()=>{
//     fontSize -= 1
//     fontSizeEdit.textContent = `${fontSize.getPropertyValue("font-size")}`
// })
const fontSizeEdit = document.querySelector("#font-size");
let fontSize = parseInt(window.getComputedStyle(textPole).getPropertyValue("font-size")); // Извлекаем число
const add = document.querySelector("#add");
const minus = document.querySelector("#minus");

fontSizeEdit.textContent = `${fontSize}px`; // Устанавливаем изначальное значение

add.addEventListener("click", () => {
    fontSize += 1; // Увеличиваем шрифт
    textPole.style.fontSize = `${fontSize}px`; // Применяем новое значение
    fontSizeEdit.textContent = `${fontSize}px`; // Обновляем текст
});

minus.addEventListener("click", () => {
    if(fontSize > 10){
        fontSize -= 1; // Уменьшаем шрифт
        textPole.style.fontSize = `${fontSize}px`; // Применяем новое значение
        fontSizeEdit.textContent = `${fontSize}px`; // Обновляем текст`
    }else{
        alert("не може бути менше 1!")
    }
});
const fontfamily = document.querySelectorAll("#font-family")
    switch(fontfamily.value){
        case serif:
            textPole.style.fontFamily = "serif"
            break
        case monospace:
            textPole.style.fontFamily = "monospace"
            break
        case SmoochSans: 
            textPole.style.fontFamily = "Smooch Sans"
            break
        case PlaywriteVN:
            textPole.style.fontFamily = "Playwrite VN"
            break
        case LexendGiga:
            textPole.style.fontFamily = "Lexend Giga"
            break
    }