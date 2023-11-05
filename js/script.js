

    let currentval = "";

    function getnum(value) {
        if (currentval === "" && value === "-") {
        currentval = "-";
    } else if (value === '.' && currentval.includes('.')) {
        return; // Prevent multiple decimal points
    } else if (currentval.endsWith('.') && value.match(/\d/)) {
        currentval += '0' + value; // Append '0' before the decimal point
    } else {
        currentval += value;
    }
    updateDisplay(currentval);
    
    }


    function updateDisplay(updatedval) {
        document.getElementById("answerbox").innerHTML = updatedval;
    }

    function clearAnswer() {
        currentval = "";
        updateDisplay(currentval);
    }

    function calculateResult() {
        try {
        if (currentval !== "") {
            console.log("Input: " + currentval); 
            const result = eval(currentval);
            console.log("Result: " + result); 
            currentval = result.toString();
            updateDisplay(currentval);
        }
    } catch (error) {
        currentval = "Error";
        updateDisplay(currentval);
    }
    }
