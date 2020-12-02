let VieDuMonstre1 = document.getElementById("VieDuMonstre1")
VieDuMonstre1.valeur -= 10;

function timedProg() {
  if (i <= 300) {
    if (i > 40) {
            document.getElementById("c").innerHTML=parseInt(i/3)+"%";
            }
    document.getElementById("b").style.width=i+"px";
    var j=0;       
    while (j<=100)
         j++; 
    setTimeout("timedProg();", 20);
    i++;   
    }
  }