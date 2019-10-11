function clearFields() {
	for (var i = 1; i < 5; i++) {
		document.getElementById("weight" + i).value = null;
		document.getElementById("num" + i).value = null;
        document.getElementById("den" + i).value = null;
        document.getElementById("percent"+i).innerText = "";
	}
	
    document.getElementById("result_in").value = null;
    return;
}

function calcMean() {
	var sum = 0;
    var num4 = document.getElementById("num4")
    var den4 = document.getElementById("den4").value
    if(num4.value != -1){
        for (var i = 1; i < 5; i++){
            sum += document.getElementById("num" + i).value / document.getElementById("den" + i).value;
        }

        document.getElementById("result_in").value = sum / 4 * 100;
    }
    else{
        for (var i = 1; i < 4; i++){
            sum += document.getElementById("num" + i).value / document.getElementById("den" + i).value;
        }
        num4.value = (document.getElementById("result_in").value / 100 * 4 - sum)*den4;
    }
	return;
}

function calcWeight() {
	var sum = 0;
	var weight = 0;

    var num4 = document.getElementById("num4")
    var den4 = document.getElementById("den4").value
    var weight4 = parseInt(document.getElementById("weight4").value)
    if (num4.value != -1) {
        for (var i = 1; i < 5; i++){
            var w = parseInt(document.getElementById("weight" + i).value);
            sum += document.getElementById("num" + i).value / document.getElementById("den" + i).value * w;
            weight += w;
        }

        document.getElementById("result_in").value = sum / weight * 100;
    }
    else {
        for (var i = 1; i < 4; i++){
            var w = parseInt(document.getElementById("weight" + i).value);
            sum += document.getElementById("num" + i).value / document.getElementById("den" + i).value * w;
            weight += w;
        }

        num4.value = (document.getElementById("result_in").value / 100 * (weight + weight4) - sum)/weight4*den4;
    }
	return;
}

function updatePercent() {
    for (var i = 1; i < 5; i++){
        document.getElementById("percent"+i).innerText =
            document.getElementById("num" + i).value / document.getElementById("den" + i).value*100 + "%";
        }
    return;
}