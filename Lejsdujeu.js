// Variables //
var monstre1 = document.getElementById('Monstre1')
var monstre2 = document.getElementById('Monstre2')
var monstre3 = document.getElementById('Monstre3')

//**Actions**//
var attaquer = document.getElementById("BoutonAttaquer")
var defense = document.getElementById("BoutonDefense")

// Attaque Spé //
var feu = document.getElementById("btnFeu")
var glace = document.getElementById("btnGlace")
var poison = document.getElementById("btnPoison")
var soin = document.getElementById("btnSoin")

//Choix//
var choixSlime = document.getElementById("btnSlime")
var choixSlume = document.getElementById("btnSlume")
var choixFlime = document.getElementById("btnFlime")

//perso//
var choixJustin = document.getElementById("btnJustin")
var choixKevin = document.getElementById("btnKevin")
var choixVentux = document.getElementById("btnVentux") 
var choixMoun = document.getElementById("btnMoun") 

//Mana//
var manaJustin = 100
var manaKévin = 100
var manaVentux = 100
var manaMoun = 100

//attaque//
var attaqueJoueur = [10, 25, 5, 2 ,25] 
var attaqueMonstre = [5, 10, 15, 20 ,25]

//hp//
var hpMonstre = [0, 200, 150, 250]
var hpJoueur = [0, 150, 150, 150, 150]

//dmg//
var dmgPoison = 7
var dmgFeu = 10
var dmgGlace = 15
var heal = 20


var choixJoueurs = 0
var choixMonstres = 0

var monstre = 0
var tour = 0

// Les infobulles //
var monElementAudio = document.getElementById('music');
monElementAudio.volume = 0.1


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

//choix de cible//
choixSlime.onclick = function(){
  document.getElementById("boxMonstre1").style.visibility = "visible"
  document.getElementById("boxMonstre2").style.visibility = "hidden"
  document.getElementById("boxMonstre3").style.visibility = "hidden"
}

choixSlume.onclick = function(){
  document.getElementById("boxMonstre1").style.visibility = "hidden"
  document.getElementById("boxMonstre2").style.visibility = "visible"
  document.getElementById("boxMonstre3").style.visibility = "hidden"
}

choixFlime.onclick = function(){
  document.getElementById("boxMonstre1").style.visibility = "hidden"
  document.getElementById("boxMonstre2").style.visibility = "hidden"
  document.getElementById("boxMonstre3").style.visibility = "visible"
}

//Choix de perso avec At SPE//
choixJustin.onclick = function(){
  document.getElementById("btnFeu").style.visibility = "visible"
  document.getElementById("btnGlace").style.visibility = "hidden"
  document.getElementById("btnPoison").style.visibility = "hidden"
  document.getElementById("btnSoin").style.visibility = "hidden"
}

choixKevin.onclick = function(){
  document.getElementById("btnFeu").style.visibility = "hidden"
  document.getElementById("btnGlace").style.visibility = "hidden"
  document.getElementById("btnPoison").style.visibility = "visible"
  document.getElementById("btnSoin").style.visibility = "hidden"
}

choixVentux.onclick = function(){
  document.getElementById("btnFeu").style.visibility = "hidden"
  document.getElementById("btnGlace").style.visibility = "visible"
  document.getElementById("btnPoison").style.visibility = "hidden"
  document.getElementById("btnSoin").style.visibility = "hidden"
}

choixMoun.onclick = function(){
  document.getElementById("btnFeu").style.visibility = "hidden"
  document.getElementById("btnGlace").style.visibility = "hidden"
  document.getElementById("btnPoison").style.visibility = "hidden"
  document.getElementById("btnSoin").style.visibility = "visible"
}

// Attaque //
attaquer.onclick = function(){
  tour + 1
  if (joueur ==) {}
}

