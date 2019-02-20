//document.write("Hello World!");
//document.write("<h1>Everything is AWESOME!</h1>");
//single line comment
/*NOTES

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
e) The protagonist fails in their quest.

*/

Game();

function Game() {

            //Javascript object for an inventory
            var inventory = {
                coins: 1000,
                bread: 0,
                sword: 0,
                map: 0,
                keys: 1,
                book: 0,
            }
            //Monster Names Array
            var monsterNames = [
                "Dul the Orc", 
                "Demon Dritak", 
                "Erebos the Banshee", 
                "Nightfeather Owl", 
                "Sionia the Siren", 
                "Vrumier the Basilisk"
            ];
    
    //how you call an array
    //alert(monsterNames[0]+" comes at you!");
    
    alert("Land of Riddles");
   
    //var = container
    var playerName = prompt("What is your name?");
    alert("Welcome " + playerName + " to the Land of Riddles!");
    alert("You are in your late great-uncle's musty library. When you look around, you see a very unusual book on a pedestool. The title says, Land of Riddles. When you open it up, you suddenly fall into the book!");
    alert("As you gain your bearing, you see that you are in an idetical library, but with no books. A scrap of paper falls from the ceiling. You pick it up. It says: \n The Land of Riddles is is full of riddles. Solve them all to reap the reward and return to earth. Watch your step, watch your mouth");
    
    Library();
    
    function Library(){
        var library = prompt("prompt 1... \n -go upstairs \n -look around \n -open door").toLowerCase();
        if(library == "go upstairs"){
            LibraryGoUpstairs();
        }
        else if(library == "look around"){
            LibraryLookAround();
        }
        else if(library == "open door"){
            ForestPath();
        }
    
    function LibraryGoUpstairs(){
        var libraryGoUpstairs = prompt("prompt 2... \n -try door \n -go downstairs").toLowerCase();
            if(libraryGoUpstairs == "try door" /*&& inventory.keys = 0*/){
                alert("You need four keys to open the door.");
                LibraryGoUpstairs();
            }
            //else if(libraryGoUpstairs = "try door" /*&& inventory.keys = 4*/){
                //alert("You open the door and step out.....");
            //}
            else if(libraryGoUpstairs == "go downstairs"){
                alert("You walk back down the stairs without ever discovering what was upstairs.");
                 Library();
            }
            else{
                alert("I don't know what "+libraryGoUpstairs+" is!");
                LibraryGoUpstairs();
            }
    }
    function LibraryLookAround(){
        var libraryLookAround = prompt("prompt 5... \n -go upstairs \n -open door \n -pick up book \n -pick up sword");
            if(libraryLookAround == "go upstairs"){
                alert("...you go upstairs");
                LibraryGoUpstairs();
            }
            else if(libraryLookAround == "open door"){
                alert("...open door");
                ForestPath();
            }
            else if(libraryLookAround == "pick up sword"){
                alert("One sword is added to inventory");
                inventory.sword ++;
                LibraryLookAround();
            }
            else if(libraryLookAround == "pick up book"){
                alert("In order to pick up book answer this riddle:");
                var libraryBookRiddle = prompt("If you have me, you want to share me. If you share me, I no longer exist. What am I?").toLowerCase();
           
                /* This one does work!!!!
                
                
            //inside the parenthese the parameter is the varable that the switch is checking
            switch(libraryBookRiddle){
            //initalize the case, peramater, colon, what it does, break
            case "secret": 
                alert("Answer: A Secret. That's right. \n\nBook of Hints added to inventory");
                inventory.book ++;
                LibraryLookAround();
            break;
            case "a secret":
                alert("Answer: A Secret. That's right. \n\nBook of Hints added to inventory");
                inventory.book ++;
                LibraryLookAround();
            break;
            case "secrets":
                alert("Answer: A Secret. That's right. \n\nBook of Hints added to inventory");
                inventory.book ++;
                LibraryLookAround();
            break;
            default:
                alert("That's not the right answer!!!");
                LibraryLookAround();
            break;
               }
                */
                
                let chances = 5;
                while(chances > 0 && libraryBookRiddle !== "secrets" /*|| "secret" || "a secret"*/){
                        alert("That's not the answer! Only "+chances+" chances left!");
                        var libraryBookRiddle = prompt("If you have me, you want to share me. If you share me, I no longer exist. What am I?");
                    chances--;
                }
                alert("Anser: A Secret. That's right. \n Book of Hints added to inventory");
                inventory.book ++;
                LibraryLookAround();
                
            }
    }
    }
                /*
                    inventory.book ++;
                //displays books owned
                alert("you added "+inventory.sword+ " book");
                Library();
                }
                else{
                    alert("you missed out!");
                    Library();
                }
            }
            break;
            case "look around":
            break;
            case "open door":
                alert(".....");
                Library();
            break;
                */
    
    function ForestPath(){
        var forestPath = prompt("...prompt 7 \n -go through mist \n follow path \n forge path");
            if(forestPath == "go through mist"){
                MystIsland();
            }
            else if(forestPath == "follow path"){
                DallingtonForest();
            }
            else if(forestPath == "forge path"){
                SilentHill();
            }
            else{
                alert("I don't know what "+forestPath+" is!");
                ForestPath();
            }
        }
    function MystIsland(){
        var edgeOfWater = prompt(" prompt 27... \n -look around \n -swim across \n -go back");
        switch (edgeOfWater){
            case "look around":
                var waterLookAround = prompt(" prompt 28... \n -use boat \n - go back");
                if(waterLookAround == "use boat"){
                    alert("answer this riddle to use the boat");
                    var waterLookAroundRiddle = prompt("What becomes wetter the more it dries?");
                    while (waterLookAroundRiddle !=="towell"){
                        alert("That's not the answer");
                    }
                    aler("That's right!");
                    MystIslandIsland();
                }
                else if(waterLookAround == "go back"){
                    MystIsland();
                }
        }
        //MystIslandIsland(){
            
        //}
    }
    function CalterburryCitadel(){
        
    }
    function SilentHill(){
        var silentHillLookAround = prompt("...")
    }
    function DallingtonForest(){
        alert("prompt 8... with monster jumping out");
        var dallingtonForestDul = prompt("choose what to do \n fight Dul \n talk to Dul").toLowerCase();
        if(dallingtonForestDul == "fight dul"){
            if(inventory.sword = 1){
                alert("You fight and win and gain one key");
                ForestPath();
            }
            else{
                alert("You die!");
                Library();
            }
        }
        else if(dallingtonForestDul == "talk to dul"){
            DallingtonForestDulRiddle();
        }
        else{
            alert("I don't know what "+dallingtonForestDul+" is!");
            DallgintonForest();
        }
        function DallingtonForestDulRiddle(){
            var dulRiddle = prompt("I am not alive, yet I grow; I have no lungs, yet I need air; I have no mouth, yet I can drown. What am I? \n write your answer in the box \n or write 'hint' to recieve a hint");
            if(dulRiddle == "hint" && inventory.book >= 1){
                alert("You're in a forest! What burns down forests?")
                DallingtonForestDulRiddle();
            }
            else if(dulRiddle == "hint" && inventory.book !== 1){
                alert("You do not have the book of hints");
                DallingtonForestDulRiddle();
            }
            else{
            let chances = 5;
                while(chances > 0 && dulRiddle !== "fire"){
                        alert("That's not the answer! Only "+chances+" chances left!");
                        var libraryBookRiddle = prompt("I am not alive, yet I grow; I have no lungs, yet I need air; I have no mouth, yet I can drown. What am I? \n write your answer in the box \n or write 'hint' to recieve a hint");
                    chances--;
                }
                alert("Anser: A fire. That's right. \n1 key added to inventory");
                inventory.keys ++;
                ForestPath();
            }
        }
    }

}//end game bracket
    

    
    /*
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
        else if(prison == "swamp"){
            Swamp();
        }
        else{
            alert("I don't know what "+prison+" is!");
            Prison();
        }
    }
    
    function Swamp(){
        
        var swamp1 = prompt("You enter a dank sawmp.  \n swim \n go on swamp path \n buy sword").toLowerCase;
        
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
        //example of inventory
        else if(swamp1 == "buy sword" && inventory.coins >= 100){
            var swordbuy = confirm("Are you sure you want to buy this sowrd?");
            if(swordbuy){
                //addds sword +1
                inventory.sword ++;
                //displays sowrds owned
                alert("you won "+inventory.sword+ " swords");
                //inventory.coins = inventory.coins - 100;
                inventory.coins -= 100;
                //displays coins left in account
                alert("You have "+inventory.coins+" coins remaining");
                Swamp();
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
   //example of switch
    //no break = keeps on playing the cases beneath, but not the above cases
    function Castle(){
        var insideCastle = prompt("-upstairs \n -downstairs \n -courtyard \n -balcony \n -look around").toLowerCase();
        
        //inside the parenthese the parameter is the varable that the switch is checking
        switch(insideCastle){
            //initalize the case, peramater, colon, what it does, break
            case "upstairs": 
                var upstairs = prompt("information about the upstairs");
                Castle();
            break;
            case "downstairs":
                alert("you go downstairs");
            break;
            case "courtyard":
                alert("you go to the courtyard");
                Castle();
            break;
            case "balcony":
                alert("you go to the balcony");
                Castle();
            break;
            default:
                alert("I don't know what "+insideCastle+" is!");
                insideCastle();

            break;
               }
    }
    
}
*/