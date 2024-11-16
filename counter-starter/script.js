const add = (step) => {
    // We gave the number element an id of number so we can use that to get the element
    let numberElement = document.getElementById("number");
    // We can use the innerText property to get the text inside the element
    let number = numberElement.innerText;
            number = parseInt(number) + step;
            numberElement.innerText = number;
    };
    
    const subtract = step => {
        let numberElement = document.getElementById("number");
        let number = parseInt(numberElement.innerText);
        number -= step;
        numberElement.innerText = number;
    };
    
    const resetCounter = () => {
        document.getElementById("number").innerText = 0;
    };
    
    const addCustom = () => {
        let customInput = document.getElementById("customNumber").ariaValueMax;
        if (customInput) {
            add(parseInt(customInput));
        } else {
            alert("Please enter a valid number");
        }
    };