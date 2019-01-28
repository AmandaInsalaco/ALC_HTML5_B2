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
*/

Game();

function Game() {
    
    alert("Chicago Zombie Hunter Adventure");
    //var = container
    var playerName = prompt("What is your name?");
    alert("Welcome " + playerName + " to Chicago. The year is 2054");
    
    Prison();
    
    function Prison(){
        // \n makes a new line
        var prison = prompt("You wake up with cold water spashed on your face. 'Wake up traitor.' A siloutted man says. You look around. It appears that you are in a prison cell. \n\n -look around \n -go back to sleep \n -taunt the guard").toLowerCase();
        
        if(prison == "look around" || prison == "look"){
            var prisonLook = prompt("On the ground near you is a semi-automatic rifle, a couple of knifes, and three flares. \n\n -pick up weapons \n -go back to sleep \n -taunt the guard").toLowerCase();
        }
            if(prisonLook = "pick up weapons"){
                alert("You have added (1) semi-automatic rifle, (5) combate knifes, and (3) flares to Invatory");
                PrisonZombies();
            }
            else if(prisonLook = "go back to sleep" || prisonLook = "sleep"){
                alert("You go to sleep.")
                PrisonZombies();
            }
            else if(prisonLook = "taunt the guard" || "taunt"){
                alert("The man looks at you and laughs cruely. 'For that you will die.' he says as he turns and leaves");
                PrisonZoombies();
            }
            else{
                alert("I don't know what "+prisonLook+" is!");
                Prison();
            }
        else if(prison == "go back to sleep" || prison == "sleep"){
            var prisonSleep = alert("You ignore the man and slide down the wall and immediatly go asleep. Zombies come");
            var PrisonZombies;
        }
        else if(prison == "taunt the guard" || prison == "taunt"){
            var prisonTaunt = alert("taunt the guard, wait some time, zombies come");
            var PrisonZombies;
        }
        else{
            alert("I don't know what "+prison+" is!");
            Prison();
        }
    }
    
    function PrisonZombies(){
        var prisonZombies = prompt("You look up to find that you are now alone in the cell, and a weird noise is coming from outside the cell. Suddenly, around the corner, comes a hord of zombies!! ");
    }
    
    
}