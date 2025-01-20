const boldButton = document.getElementById("boldButton");
    const textPole = document.querySelector(".text-pole");

    boldButton.addEventListener("click", () => {
        const selection = window.getSelection();

        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            
            if (!range.collapsed) {
                // Создаем элемент <b>
                const boldElement = document.createElement("b");
                boldElement.appendChild(range.extractContents());
                range.insertNode(boldElement);

                // Перемещаем курсор за вставленный элемент
                selection.removeAllRanges();
                const newRange = document.createRange();
                newRange.setStartAfter(boldElement);
                newRange.collapse(true);
                selection.addRange(newRange);
            }
        }
    });