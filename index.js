
function getAdvice(){
    var request = new XMLHttpRequest();

    request.open('GET', 'https://api.adviceslip.com/advice');

    request.onload = function() {
        var response = request.response;
        var jsonData = JSON.parse(response);
        var advice = jsonData.slip.advice;

        document.getElementById("advice").innerHTML = advice;
    };

    request.send();
}

getAdvice();

document.addEventListener('keyup', function(e){
    if(e.keyCode == 13)
        getAdvice();
  })


setInterval(function(){
    getAdvice();
},8000);