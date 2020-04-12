let test = () => {
    let value1 = document.getElementById("value-1").value
    let value2 = document.getElementById("value-2").value
    let value3 = document.getElementById("value-3").value
    let value4 = document.getElementById("value-4").value
    document.getElementById("retangle").style.borderRadius = value1+"px "+value2+"px "+value4+"px "+value3+"px"
}