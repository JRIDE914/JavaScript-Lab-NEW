function startGame(){
var answer = prompt("Do you want to play a game?");
    if(answer.toLowerCase()  === 'yes'){
      var userName = prompt('What is your UserName?');
      startCombat(userName)
    }
}  
 
 function startCombat(userName){
    var enemyName = "Grant";
    var userHealth = 40;
    var grantHealth = 10;
    var wins = 0;
    while (userHealth > 0 && wins < 3){
      var attack = prompt("Do you want to attack?");
      userHealth -= getDamage();
      grantHealth -= getDamage();
      console.log(`${userName} has ${userHealth} health left.`);
      console.log(`Grant has ${grantHealth} health left.`);
        
        wins++;
        grantHealth = 10;
       
       
    if(attack.toLowerCase()  === 'no'){
      console.log("Game Over");
      break;
    }
      if(grantHealth <= 0){
    
        console.log('You have defeated ' + enemyName + '!');
    }
      }
 }
  function getDamage(){
    return Math.floor((Math.random() * 5) + 1);
  }  
startGame();

