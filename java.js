
function add() {

    gt1 = parseFloat(document.getElementById('gt1').value);

    gt2 = parseFloat(document.getElementById('gt2').value);
    let kq = gt1 + gt2;
    document.getElementById('result').innerHTML = 'Result Addition: ' +kq;
}

function sub() {
    gt1 = parseFloat(document.getElementById('gt1').value);
    gt2 = parseFloat(document.getElementById('gt2').value);
    let kq = gt1 - gt2;
    document.getElementById('result').innerHTML = 'Result Subtraction: ' +kq;
}

function nhan() {
    gt1 = parseFloat(document.getElementById('gt1').value);
    gt2 = parseFloat(document.getElementById('gt2').value);
    let kq = gt1 * gt2;
    document.getElementById('result').innerHTML = 'Result Multiplication: ' +kq;
}

function div() {
    gt1 = parseFloat(document.getElementById('gt1').value);
    gt2 = parseFloat(document.getElementById('gt2').value);
    let kq = gt1 / gt2;
    document.getElementById('result').innerHTML = 'Result Division: ' +kq;
}
