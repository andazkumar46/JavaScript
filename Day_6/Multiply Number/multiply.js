const result = () => {
    let num1 = parseInt(document.getElementById("num1").value) 
    let num2 = parseInt(document.getElementById("num2").value) 
    
    document.getElementById("sum").innerHTML = `The Result of num1 and num2 = ${num1 * num2} !!!`

}