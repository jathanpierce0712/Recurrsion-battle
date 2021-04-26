var enemies = [
    {
"Name" : "Sam",
"Enemy Type" : "Fern",
"Special abillity" : "All timers",
"Hit Points" : 25.0,
"Power" : 50.0,
"Dodge" : 30.0,
"Block" : 15.0 ,
    },
{
"Name" : "Antonio Brown",
 "Enemy Type" : "Queen",
  "Special abillity" : "Helmet Throwing",
  "Hit Points" : 100.0,
  "Power" : 50.0,
  "Dodge" : 30.0,
  "Block" : 5.0,
    },
{
"Name" : "Randy Fitchner",
"Enemy Type" : "Final Boss",
"Special abillity" : "Hypnosis",
"Hit Points" : 50.0,
"Power" : 30.0,
"Dodge" : 10.0,
"Block" : 5.0 ,
    },
{
    "Name" : "Mike Tomlin",
"Enemy Type" : "Goblin",
"Special abillity" : "Tripping",
"Hit Points" : 30.0,
"Power" : 100.0,
"Dodge" : 5.0,
"Block" : 25.0 ,
    },
{
    "Name" : "Big Ben",
"Enemy Type" : "Ghost",
"Special abillity" : "Sneaky",
"Hit Points" : 25.0,
"Power" : 50.0,
"Dodge" : 30.0,
"Block" : 15.0 ,
    },
];

var heroes = [
    {
    "Name" : "Tom Brady",
    "Hero Type" : "Sharpshooter",
    "Experience" : "Axe throwing",
    "Hit Points" : 30.0,
    "Power" : 100.0,
    "Dodge" : 15.0,
    "Block" : 5.0 ,
     },
    {
  "Name" : "Flacc Attacc",
 "Hero Type" : "Goose",
 "Experience" : "Color Blindness",
 "Hit Points" : 70.0,
 "Power" : 20.0,
"Dodge" : 10.0,
"Block" : 5.0 ,
      },
];


var heroMultiplier = Math.floor(Math.random() * 10 + 1 );

var enemyMultiplier = Math.floor(Math.random() * 10 + 1 );
    
console.log(heroMultiplier)

console.log(enemyMultiplier)

function startFunction(){
  if(heroMultiplier <=5 ){
      console.log(heros[1]["Name"])
  }else{ 
      console.log(heros[0]["Name"])
  }
  if(enemyMultiplier = 2){
      console.log(enemies[1]["Name"])
  }else if(enemyMultiplier = 3){
  console.log(enemies[1]["Name"])
  }else if(enemyMultiplier = 3){
      console.log(enemies[0]["Name"])
    }else if(enemyMultiplier = [3]["Name"])
    console.log(enemies[4]["Name"])
  }


  

