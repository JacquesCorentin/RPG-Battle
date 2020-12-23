// Variables //
var monstre1 = document.getElementById('Monstre1')
var monstre2 = document.getElementById('Monstre2')
var monstre3 = document.getElementById('Monstre3')

//**Actions**//
var attaquer = document.getElementById("btnAttaque")
var defense = document.getElementById("btnDefense")

// Attaque Spé //
var feu = document.getElementById("btnFeu")
var glace = document.getElementById("btnGlace")
var poison = document.getElementById("btnPoison")
var soin = document.getElementById("btnSoin")

//Choix//
var choixSlime = document.getElementById("btnSlime")
var choixSlume = document.getElementById("btnSlume")
var choixFlime = document.getElementById("btnFlime")

//choix des perso//
var choixJustin = document.getElementById("btnJustin")
var choixKevin = document.getElementById("btnKevin")
var choixVentux = document.getElementById("btnVentux") 
var choixMoun = document.getElementById("btnMoun") 

//Mana//
var manaJustin = 100
var manaKevin = 100
var manaVentux = 100
var manaMoun = 100

//hp//
var hpMonstres = [0, 100, 100, 100]
var hpJoueurs = [0, 150, 150, 150, 150]

//dmg//
var attaqueJoueurs = [10, 25, 5, 2 ,30] 
var attaqueMonstres = [5, 10, 15, 20]
//spe//
var attaqueSpe = document.getElementById("AttSpe")
var attaqueMagique = document.getElementById("btnMagie")
var dmgPoison = 7
var dmgFeu = 15
var dmgGlace = 20
var dmgSoin = 25

var DefPerso = 5
//cible//
var cibleJoueurs = 0
var cibleMonstres = 0

// subjectif //
var joueur = 1
var monstre = 0
var tour = 0
var mortJoueur = [false, false, false, false]

// Les infobulles //
var monElementAudio = document.getElementById("music");
monElementAudio.volume = 0.1

var maVicroire = document.getElementById("musicVictoire");
maVicroire.volume = 0.1
maVicroire.style.visibility = "hidden"

var maDefaite = document.getElementById("musicDefaite");
maDefaite.volume = 0.1
maDefaite.style.visibility = "hidden"


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
  cibleJoueurs = 1
}

choixSlume.onclick = function(){
  document.getElementById("boxMonstre1").style.visibility = "hidden"
  document.getElementById("boxMonstre2").style.visibility = "visible"
  document.getElementById("boxMonstre3").style.visibility = "hidden"
  cibleJoueurs = 2
}

choixFlime.onclick = function(){
  document.getElementById("boxMonstre1").style.visibility = "hidden"
  document.getElementById("boxMonstre2").style.visibility = "hidden"
  document.getElementById("boxMonstre3").style.visibility = "visible"
  cibleJoueurs = 3
}

//Choix de perso avec At SPE//
choixJustin.onclick = function(){
  document.getElementById("btnFeu").style.visibility = "visible"
  document.getElementById("btnGlace").style.visibility = "hidden"
  document.getElementById("btnPoison").style.visibility = "hidden"
  document.getElementById("btnSoin").style.visibility = "hidden"
  document.getElementById("btnAttaque").style.visibility = "visible"
  document.getElementById("btnDefense").style.visibility = "visible"
   
}

choixKevin.onclick = function(){
  document.getElementById("btnFeu").style.visibility = "hidden"
  document.getElementById("btnGlace").style.visibility = "hidden"
  document.getElementById("btnPoison").style.visibility = "visible"
  document.getElementById("btnSoin").style.visibility = "hidden"
  document.getElementById("btnAttaque").style.visibility = "visible"
  document.getElementById("btnDefense").style.visibility = "visible"
}

choixVentux.onclick = function(){
  document.getElementById("btnFeu").style.visibility = "hidden"
  document.getElementById("btnGlace").style.visibility = "visible"
  document.getElementById("btnPoison").style.visibility = "hidden"
  document.getElementById("btnSoin").style.visibility = "hidden"
  document.getElementById("btnAttaque").style.visibility = "visible"
  document.getElementById("btnDefense").style.visibility = "visible"
}

choixMoun.onclick = function(){
  document.getElementById("btnFeu").style.visibility = "hidden"
  document.getElementById("btnGlace").style.visibility = "hidden"
  document.getElementById("btnPoison").style.visibility = "hidden"
  document.getElementById("btnSoin").style.visibility = "visible"
  document.getElementById("btnAttaque").style.visibility = "visible"
  document.getElementById("btnDefense").style.visibility = "visible"
}
// Tours de jeu //
function toursJ(joueur){
  document.getElementById("btnPoison").style.visibility = "hidden" 
  document.getElementById("btnFeu").style.visibility = "hidden"
  document.getElementById("btnSoin").style.visibility = "hidden"
  document.getElementById("btnGlace").style.visibility = "hidden"
  if (joueur == 1){
    document.getElementById("btnPoison").style.visibility = "visible"
    document.getElementById("btnDefense").style.visibility = "visible"
    if (manaJustin <= 0) {
      document.getElementById("btnPoison").style.visibility = "hidden"
   }   
  }
  if (joueur == 2){
    document.getElementById("btnFeu").style.visibility = "visible"
    document.getElementById("btnDefense").style.visibility = "visible"
    if (manaKevin <= 0) {
      document.getElementById("btnFeu").style.visibility = "hidden"
   }
  }
  if (joueur == 3){
    document.getElementById("btnSoin").style.visibility = "visible"
    document.getElementById("btnDefense").style.visibility = "visible"
    if (manaMoun <= 0) {
      document.getElementById("btnSoin").style.visibility = "hidden"
    }
  }
  if (joueur == 4){
    document.getElementById("btnGlace").style.visibility = "visible"
    document.getElementById("btnDefense").style.visibility = "visible"
    if (manaVentux <= 0) {
      document.getElementById("btnGlace").style.visibility = "hidden"   
 }
  }
}

// Attaque //
attaquer.onclick = function(){
  joueur ++
  if (hpJoueurs[1]<=0) {
    joueur ++
    document.getElementById("btnJustin").style.visibility = "hidden"
    document.getElementById("PVJustin").style.visibility = "hidden"
  }
  if (hpJoueurs[2]<=0) {
    joueur ++
    document.getElementById("btnKevin").style.visibility = "hidden"
    document.getElementById("PVKevin").innerHTML = 0
  }
  if (hpJoueurs[3]<=0) {
    joueur ++
    document.getElementById("btnVentux").style.visibility = "hidden"
    document.getElementById("PVVentux").innerHTML = 0
  }
  if (hpJoueurs[4]<=0) {
    joueur ++
    document.getElementById("btnMoun").style.visibility = "hidden"
   document.getElementById("PVMoun").innerHTML = 0
  }
  if (joueur == 5){
    tour ++
    monstre ++
    if (hpMonstres[1]>0) {
    cibleMonstres = Math.floor(Math.random() * 4) + 1
    hpJoueurs[cibleMonstres] -= attaqueMonstres[monstre]
    document.getElementById("PVJustin").innerHTML = hpJoueurs[1]
    document.getElementById("PVKevin").innerHTML = hpJoueurs[2]
    document.getElementById("PVVentux").innerHTML = hpJoueurs[3]
    document.getElementById("PVMoun").innerHTML = hpJoueurs[4]
  }
    monstre++
    if (hpMonstres[2]>0) {
    cibleMonstres = Math.floor(Math.random() * 4) + 1
    hpJoueurs[cibleMonstres] -= attaqueMonstres[monstre]
    document.getElementById("PVJustin").innerHTML = hpJoueurs[1]
    document.getElementById("PVKevin").innerHTML = hpJoueurs[2]
    document.getElementById("PVVentux").innerHTML = hpJoueurs[3]
    document.getElementById("PVMoun").innerHTML = hpJoueurs[4]
  }
    monstre++
    if (hpMonstres[3]>0) {
    cibleMonstres = Math.floor(Math.random() * 4) + 1
    hpJoueurs[cibleMonstres] -= attaqueMonstres[monstre]
    document.getElementById("PVJustin").innerHTML = hpJoueurs[1]
    document.getElementById("PVKevin").innerHTML = hpJoueurs[2]
    document.getElementById("PVVentux").innerHTML = hpJoueurs[3]
    document.getElementById("PVMoun").innerHTML = hpJoueurs[4]
  }
    monstre = 0
    joueur = 1
  }
  toursJ(joueur)

  hpMonstres[cibleJoueurs] -= attaqueJoueurs[joueur]
  document.getElementById("PVSlime").innerHTML = " "+hpMonstres[1]+" "////
  document.getElementById("PVSlume").innerHTML = " "+hpMonstres[2]+" "
  document.getElementById("PVFlime").innerHTML = " "+hpMonstres[3]+" "

  if (hpMonstres[1] <= 0) {
    monstre1.style.visibility = "hidden"
    document.getElementById("boxMonstre1").style.visibility = "hidden"
    document.getElementById("btnSlime").style.visibility = "hidden"
  }
  if (hpMonstres[2] <= 0) {
    monstre2.style.visibility = "hidden"
    document.getElementById("boxMonstre2").style.visibility = "hidden"
    document.getElementById("btnSlume").style.visibility = "hidden"
  }
  if (hpMonstres[3] <= 0) {
    monstre3.style.visibility = "hidden"
    document.getElementById("boxMonstre3").style.visibility = "hidden"
    document.getElementById("btnFlime").style.visibility = "hidden"
  }

  if (hpMonstres[1] <= 0 && hpMonstres[2] <=0 && hpMonstres[3] <=0) {
    document.getElementById("Victoire").style.visibility = "visible"
    document.getElementById("btnAttaque").style.visibility = "hidden"
    document.getElementById("btnDefense").style.visibility = "hidden"
    document.getElementById("btnPoison").style.visibility = "hidden" 
    document.getElementById("btnObjet").style.visibility = "hidden" 
    document.getElementById("btnMagie").style.visibility = "hidden" 
    document.getElementById("music").style.visibility = "hidden"
    document.getElementById("musicVictoire").style.visibility = "visible"

  }

  if (hpJoueurs[1] <= 0 && hpJoueurs[2] <=0 && hpJoueurs[3] <=0) {
    document.getElementById("Defaite").style.visibility = "visible"
    document.getElementById("btnAttaque").style.visibility = "hidden"
    document.getElementById("btnDefense").style.visibility = "hidden"
    document.getElementById("btnPoison").style.visibility = "hidden"
    document.getElementById("boxMonstre1").style.visibility = "hidden"
    monstre1.style.visibility = "hidden"
    document.getElementById("boxMonstre2").style.visibility = "hidden"
    monstre2.style.visibility = "hidden"
    document.getElementById("boxMonstre3").style.visibility = "hidden"
    document.getElementById("btnObjet").style.visibility = "hidden" 
    document.getElementById("btnMagie").style.visibility = "hidden" 
    monstre3.style.visibility = "hidden"
    document.getElementById("music").style.visibility = "hidden"
    document.getElementById("musicDefaite").style.visibility = "visible"

  }
}

// Attaque Spe //
poison.onclick = function(){
  hpMonstres[cibleJoueurs] -= dmgPoison
  manaKevin -= 25
  document.getElementById("PVSlime").innerHTML = " "+hpMonstres[1]+" "////
  document.getElementById("PVSlume").innerHTML = " "+hpMonstres[2]+" "
  document.getElementById("PVFlime").innerHTML = " "+hpMonstres[3]+" "
  document.getElementById("MANAKevin").innerHTML = " "+manaKevin+" "
  if (manaKevin <= 0) {
   document.getElementById("btnPoison").style.visibility = "hidden"
   document.getElementById("btnPoison").style.opacity = 0   
  }
}

feu.onclick = function(){
  hpMonstres[cibleJoueurs] -= dmgFeu
  manaJustin -= 25
  document.getElementById("PVSlime").innerHTML = " "+hpMonstres[1]+" "////
  document.getElementById("PVSlume").innerHTML = " "+hpMonstres[2]+" "
  document.getElementById("PVFlime").innerHTML = " "+hpMonstres[3]+" "
  document.getElementById("MANAJustin").innerHTML = " "+manaJustin+" "
  if (manaJustin <= 0) {
   document.getElementById("btnFeu").style.visibility = "hidden"
   document.getElementById("btnFeu").style.opacity = 0 
   }   

}

glace.onclick = function(){
  hpMonstres[cibleJoueurs] -= dmgGlace
  manaVentux -= 25
  document.getElementById("PVSlime").innerHTML = " "+hpMonstres[1]+" "////
  document.getElementById("PVSlume").innerHTML = " "+hpMonstres[2]+" "
  document.getElementById("PVFlime").innerHTML = " "+hpMonstres[3]+" "
  document.getElementById("MANAVentux").innerHTML = " "+manaVentux+" "
  if (manaVentux <= 0) {
   document.getElementById("btnGlace").style.visibility = "hidden"  
   document.getElementById("btnGlace").style.opacity = 0 
 }
}

soin.onclick = function(){
  hpJoueurs[joueur] = hpJoueurs[joueur] + dmgSoin
  manaMoun -= 25
  document.getElementById("PVJustin").innerHTML = " "+hpJoueurs[1]+" "///
  document.getElementById("PVKevin").innerHTML = " "+hpJoueurs[2]+" "
  document.getElementById("PVVentux").innerHTML = " "+hpJoueurs[3]+" "
  document.getElementById("PVMoun").innerHTML = " "+hpJoueurs[4]+" "
  document.getElementById("MANAMoun").innerHTML = " "+manaMoun+" "
  if (manaMoun <= 0) {
    document.getElementById("btnSoin").style.visibility = "hidden"
    document.getElementById("btnSoin").style.opacity = 0
  }
}


// Defense //

defense.onclick = function(){
  if (attaqueMonstres[monstre] <= DefPerso) {
    attaqueMonstres[monstre] = 0
  }
  if (attaqueMonstres[monstre > DefPerso]) {
    DefPerso = 0
  }
  attaqueMonstres[monstre] -= DefPerso
  hpJoueurs[joueur] -= attaqueMonstres[monstre]
  document.getElementById("btnDefense").style.visibility = "hidden"
}


