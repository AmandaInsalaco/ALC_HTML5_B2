//document.write("Hello World!");
//document.write("<h1>Everything is AWESOME!</h1>");
//single line comment
/*
    alert box, will pop up with okay button
    alert("Warning! Will Robinson...Warning!");
    confirmation box will be okay button or cancel button
    confirm("Do you like pokemon?");
    prompt takes writen feedback
    prompt("What is your favorite pokemon?");
    
    
    var resume = confirm("Do you wish to continue?");
            if(resume){
                Prison();
            }
            else{
                alert("Game Over!");
            }
            
            
a) The protagonist is captured.
b) The protagonist is killed.
c) The protagonist acquires treasure.
d) The protagonist finds love.
e) The protagonist fails in his/her quest.

*/

Game();

function Game() {
    
    alert("Land of Riddles");
    //var = container
    var playerName = prompt("What is your name?");
    alert("Welcome " + playerName + " to the Land of Riddles, where the stakes are high, but the treasure great!");
    alert("You are in your late great-uncle's musty library. When you look around, you see a very unusual book on a pedestool. The title says, Land of Riddles. When you open it up, you suddenly fall into the book!");
    alert("As you gain your bearing, you see that you are in an idetical library, but with no books. A scrap of paper falls from the ceiling. You pick it up. It says: \n The Land of Riddles is is full of riddles. Solve them all to reap the reward and return to earth. Watch your step, watch your mouth");
    
    Prison();
    
    function Prison(){
        // \n makes a new line
        var prison = prompt("You wake up with cold water spashed on your face. 'Wake up traitor.' A siloutted man says. You look around. It appears that you are in a prison cell. \n\n -look around \n -go back to sleep \n -taunt the guard").toLowerCase();
        
        if(prison == "look around" || prison == "look"){
            
            var prisonLook = prompt("On the ground near you is a semi-automatic rifle, a couple of knifes, and three flares. \n\n -pick up weapons \n -go back to sleep \n -taunt the guard").toLowerCase();
            if (prisonLook == "pick up weapons"){
                alert("You have added 1 sempi-automatic rifle, a couple of knifes, and three flares to your inventory.");
                Prison();
            }
            else{
                alert("I don't understand "+prisonLook);
                var prisonLook = prompt("On the ground near you is a semi-automatic rifle, a couple of knifes, and three flares. \n\n -pick up weapons \n -go back to sleep \n -taunt the guard").toLowerCase();
            }
        }
        else if(prison == "go back to sleep" || prison == "sleep"){
            var prisonSleep = alert("You ignore the man and slide down the wall and immediatly go asleep. Zombies come");
            var PrisonZombies;
        }
        //has the pc have to guess for a number
        else if(prison == "taunt the guard" || prison == "taunt"){
            var prisonTaunt = prompt("What number am I guessing? 1-10");
            //Math.floor(Math.random() * 11);      // returns a random integer from 0 to 10 
            while(prisonTaunt !== "5"){
                alert("That's not my number!");
                prompt("What number am I guessing? 1-10");
            }
            alert("Way to guess it!");
            var PrisonZombies;
        }
        else{
            alert("I don't know what "+prison+" is!");
            Prison();
        }
    }
    
    function Swamp(){
        
        var swamp1 = prompt("You enter a dank sawmp.  \n swim \n go on swamp path").toLowerCase;
        
        if(swamp1 == "swim" || swamp1 == "go swimming"){
            alert("You get eaten by a swamp monster..... Game Over!");
        }
        else if(swamp1 == "go on swamp path" || "follow"){
            var swampPath = prompt("eat lunch \n go north");
            
            if(swampPath == "eat lunch"){
                alert("you eat lunch, it was poison. Game Over! ");
            }
            else if(swampPath == "north"){
                alert("You go north");
            }
        }
        else{
            alert("I don't understand "+swamp1);
            Swamp();
        }
    }
    
    function PrisonZombies(){
        var prisonZombies = prompt("You look up to find that you are now alone in the cell, and a weird noise is coming from outside the cell. Suddenly, around the corner, comes a hord of zombies!! ");
    }
    
    
}