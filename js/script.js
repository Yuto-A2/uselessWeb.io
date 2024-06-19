window.addEventListener('load', function() {
    setTimeout(function() {
        const dogs = [
            document.getElementById('aDogFace'),
            document.getElementById('aDogEyeLeft'),
            document.getElementById('aDogEyeRight'),
            document.getElementById('aDogNose'),
            document.getElementById('aDogMouthLeft'),
            document.getElementById('aDogMouthRight'),
            document.getElementById('aDogEarsLeft'),
            document.getElementById('aDogEarsRight')
        ];
        
        dogs.forEach(runningDog => {
            runningDog.style.opacity = 1;
            console.log("Appear");
        });
    }, 3000); 

    setTimeout(function() {
        const btn = document.getElementById("btn");
        btn.style.display = "block";
        console.log("start runnning");
      }, 5000);

    function randomNum () {
        var random = Math.floor(Math.random() * 10) + 1;
        const winner = document.getElementById("winner");
        const mainPicture = document.getElementById("svgDiv");
        const winnerPhoto = document.getElementById("winnerPhoto");
        const caughtPhoto = document.getElementById("caughtPhoto");
        if(random < 6){
        winner.innerHTML = "I win!!";
        mainPicture.style.display = "none";
        winnerPhoto.style.display = "block"
        console.log("1 to 5"); }
        else {
        winner.innerHTML = "I caught";
        mainPicture.style.display = "none";
        caughtPhoto.style.display = "block"
        console.log("6 to 10");
        }
        btn.style.display = "none";
    }
    btn.addEventListener("click", randomNum)
    });