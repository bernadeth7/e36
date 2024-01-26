var fighter1= {
    hp: 100,
    strength: 15,
    attack: function() {
       //round off random number from 0-15
       let x1=Math.round(Math.random()*this.strength)
       return x1
    }
  }
  var fighter2= {
    hp: 150,
    strength: 10,
    attack: function() {
      //round off random number from 0-10
      let x2=Math.round(Math.random()*this.strength)
      return x2
    }
  }
//the battles
let hp1=fighter1.hp
let hp2=fighter2.hp
for (let i=0; i<=10;i++){
    let att1=fighter1.attack() //for only one random number of attack to be generated per loop per fighter
    let att2=fighter2.attack()
    hp2-=att1 //fighter 1 attacks
    console.log(`===Round ${i}===`)
    console.log(`Fighter 1 attacks Fighter 2 and does a damage of ${att1}!   fighter1 health: ${hp1}.  fighter2 health: ${hp2}`)
    hp1-=att2 //fighter 2 attacks
    console.log(`Fighter 2 attacks Fighter 1 and does a damage of ${att2}!   fighter1 health: ${hp1}.  fighter2 health: ${hp2}`)
}
console.log("BATTLE ENDS")
//checks who is the winner
if(hp1>hp2){
    console.log("Fighter 1 WINS!!!")
}else{
    console.log("Fighter 2 WINS!!!")
}