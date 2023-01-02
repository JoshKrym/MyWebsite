for(let i=0; i<1000; i++){
    star = document.createElement("div");
    star.className = "star";
    star.style='top: ' + Math.random()*99.5 + '%; left: ' + Math.random()*99.5 +'%;'
    document.getElementById("stars").appendChild(star);
}