$("button").click(function() {
    window.percent = $(this).val();
})

function render() {
    let bill = parseInt(document.getElementById("bill").value);
    let numOfPeople = parseInt(document.getElementById("numOfPeople").value);

    const tip = bill * percent / 100;
    const subTip = tip / numOfPeople || 0;
    const total = bill + tip;
    const subTotal = total / numOfPeople || 0;

    document.getElementById("subTip").innerHTML = subTip.toFixed(2);
    document.getElementById("subTotal").innerHTML = subTotal.toFixed(2);
}

render();

function reset() {
    window.location.reload();
}