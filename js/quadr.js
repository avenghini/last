function equation(a, b, c) {
    var discr = (b * b) - 4 * (a * c);
    var sqrDiscr = Math.sqrt(discr);
    var result;
    if (a == 0 && b == 0 && c == 0){
        result = "Something went wrong"
        return(result);
    }
    else if (discr < 0){
        result = "Equation doesn't have solution"
        return(result);
    }
    else if (discr == 0){
        result = "Discriminant = 0.\nThere is only one root: root = " + ((- b - sqrDiscr) / (2 * a));
        return(result);
    }
    else if (discr > 0){
        result = "Root №1 = " + ((- b + sqrDiscr) / (2 * a)) + "\nRoot №2 = " + ((- b - sqrDiscr) / (2 * a))
        return(result);
    }
}

function displayResult(){
    var a = document.getElementById('firstNumber').value;
    var b = document.getElementById('secondNumber').value;
    var c = document.getElementById('thirdNumber').value;
    var result;
    result = equation(a, b, c)
    alert(result);
}

function resetValues(){
    document.getElementById('firstNumber').value = null;
    document.getElementById('secondNumber').value = null;
    document.getElementById('thirdNumber').value = null;
}