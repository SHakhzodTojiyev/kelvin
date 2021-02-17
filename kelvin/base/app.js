function myTemp() {
    let kelvinTemp = document.querySelector('#userValue').value;

    if (kelvinTemp == "") {
        alert('Enter Kelvins Temp!');
        return false;
    }
    else {
        let celciuseTemp = kelvinTemp - 273.15;
        celciuseTemp = parseFloat(celciuseTemp).toFixed(2);

        document.getElementById('output').innerHTML = "Conversion of given temp: " + celciuseTemp + " C";
    }
}