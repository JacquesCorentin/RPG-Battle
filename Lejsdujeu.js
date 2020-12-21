// Variables //
var monstre1 = document.getElementById('Monstre1')
var monstre2 = document.getElementById('Monstre2')
var monstre3 = document.getElementById('Monstre3')
//**Actions**//
var attaquer = document.getElementById("BoutonAttaquer")
var defense = document.getElementById("BoutonDefense")
var poison = document.getElementById("BoutonPoison")
var soin = document.getElementById("BoutonSoin")

var choixSlime = document.getElementById("btnSlime")
var choixSlume = document.getElementById("btnSlume")
var choixFlime = document.getElementById("btnFlime")

var Justin = document.getElementById("boutonHugo")
var Kévin = document.getElementById("boutonTom")
var Ventux = document.getElementById("boutonAntoine") 

var manaJustin = 100
var manaKévin = 100
var manaVentux = 100

var attaqueJoueur = [10, 25, 5, 2 ,25] 
var attaqueMonstre = [5, 10, 15, 20 ,25]

var hpMonstre = [0, 200, 150, 250]
var hpJoueur = [0, 150, 150, 150, 150]

var dmgPoison = 5
var heal = 20

var choixJoueurs = 0
var choixMonstres = 0

var monstre = 0
var tour = 0

// Les infobulles //

monstre1.onmouseover = function(){
  document.getElementById("boxMonstre1").style.visibility = "visible" ;
}
monstre1.onmouseout = function(){
  document.getElementById("boxMonstre1").style.visibility = "hidden" ;
}
    
monstre2.onmouseover = function(){
  document.getElementById("boxMonstre2").style.visibility = "visible" ;
}
monstre2.onmouseout = function(){
  document.getElementById("boxMonstre2").style.visibility = "hidden" ;
}
    
monstre3.onmouseover = function(){
  document.getElementById("boxMonstre3").style.visibility = "visible" ;
}
monstre3.onmouseout = function(){
  document.getElementById("boxMonstre3").style.visibility = "hidden" ;
}    
//
//choixSlime.onclick = function(){
  //document.getElementById("boxMonstre1").style.visibility = "visible" 
  //document.getElementById("boxMonstre2").style.visibility = "hidden"
  //document.getElementById("boxMonstre3").style.visibility = "hidden"
  //choixJoueurs = 1 //