let mainHeroInf = {
    name: "Hero",
    health: 100,
    damage: 50,
    coins: 50
};


let firstEnemy = {
    name: "Enemy one",
    health: 80,
    damage: 40,
    coins: 80
};

let secondEnemy = {
    name: "Enemy two",
    health: 140,
    damage: 60,
    coins: 100
};

let thirdEnemy = {
    name: "Enemy three",
    health: 200,
    damage: 80,
    coins: 150
};

alert(`Start game`);


function infAboutMyHero(){
    alert(`Health bar = ${mainHeroInf.health} , damage = ${mainHeroInf.damage} , golds = ${mainHeroInf.coins}`);
}

function statFirst(){  
    alert(`Health bar = ${firstEnemy.health} , damage = ${firstEnemy.damage} , golds = ${firstEnemy.coins}`)
}

function statSecond(){  
    alert(`Health bar = ${secondEnemy.health} , damage = ${secondEnemy.damage} , golds = ${secondEnemy.coins}`)
}

function statThird(){  
    alert(`Health bar = ${thirdEnemy.health} , damage = ${thirdEnemy.damage} , golds = ${thirdEnemy.coins}`)
}

function shop(){
    let selectItem = prompt(`1. Small(50) hp pottion. (10 gold) 2.Damage pottion on 20 points (25 gold) 3.Big(100) hp potion (50 gold). Now you have ${mainHeroInf.coins} golds`);
    
    switch(selectItem){
        case "1":
            if( mainHeroInf.coins < 10){
                alert("You need more gold for restore you are hp");
            }
            else{
                mainHeroInf.coins = mainHeroInf.coins - 10;
                mainHeroInf.health = mainHeroInf.health + 50;
                alert(`My hero hp now = ${mainHeroInf.health}`)
            }

            break;

        case "2":
            if (mainHeroInf.coins < 25){
                alert(`You need more gold for increase you damage`);
            }
            else{
                mainHeroInf.coins = mainHeroInf.coins - 25;
                mainHeroInf.damage = mainHeroInf.damage + 20;
                alert(`My hero damage now = ${mainHeroInf.damage}`)
            }
            
            break;
        
        case "3":
            if ( mainHeroInf.coins < 50){
                alert(`You need more farm`)
            }
            else{
                mainHeroInf.coins = mainHeroInf.coins - 50;
                mainHeroInf.health = mainHeroInf.health + 100;
                alert(`My hero hp now = ${mainHeroInf.health}`)
            }
            break;
        default:
            alert('Wrong');    

            break;
    }
}



function versus(opponent){
    alert(`Begin fight!`);
    let enemy = 0;
    let hero = 0;

    for( enemy = 0; mainHeroInf.health > opponent.damage; enemy++){
        mainHeroInf.health = mainHeroInf.health - opponent.damage;
    }

    for( hero = 0; opponent.health > mainHeroInf.damage; hero++){
        opponent.health = opponent.health - mainHeroInf.damage;
        if(opponent.health < 0){
            opponent.health = 0;
            break;
        }
        if( mainHeroInf.health < 0){
            mainHeroInf.health = 0;
            break;
        }
    }

    if( enemy > hero){
      alert (`You win ${opponent.name}`);
      mainHeroInf.coins = mainHeroInf.coins + opponent.coins;
    
      mainHeroInf.health = mainHeroInf.health + 60;
    

    }
    else{
        alert(`You LOSE!`);
        mainHeroInf.health = 0;
        mainHeroInf.damage = 0;
        mainHeroInf.coins = 0;
    }


}


function resetGame(){
    let resGame = confirm(`Are you sure?`);
    if(resGame == true){
        mainHeroInf.health = 100;
        mainHeroInf.damage = 50;
        mainHeroInf.coins = 50;
    }
    if(resGame == true){
        firstEnemy.health = 80;
        firstEnemy.damage = 40;
        firstEnemy.coins = 80;
    }

    if(resGame == true){
        secondEnemy.health = 140;
        secondEnemy.damage = 60;
        secondEnemy.coins = 100;
    }

    if(resGame == true){
        thirdEnemy.health = 200;
        thirdEnemy.damage = 80;
        thirdEnemy.coins = 150;
    }

}

function exitGame(){
    let leave = confirm(`Are you sure?`);

    if(leave == true){
        alert(`Goodbye!`)
        window.close();
    }

    
}