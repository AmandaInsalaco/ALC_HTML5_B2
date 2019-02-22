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
                keys: 0,
                book: 0,
                deaths: 0,
            };
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
    //loops through till the PC decides on a name
    while(!confirm("Are you sure you want "+playerName+" as your name?")){
        playerName = prompt("What name do you want?");
    }
    alert("Welcome " + playerName + " to the Land of Riddles!");
    alert("You are in your late great-uncle's musty office. When you look around, you see a very unusual book on a his desk. The title says, Land of Riddles. When you open it up, you suddenly fall into the book!");
    Library();
    
    function Library(){
        var library = prompt("You appear to be in a spacious library. In the middle of the library there is a spiral staircase leading to the next floor. All around you are empty bookshelves. On the far end of the library is a small wooden door. -go upstairs \n -look around \n -open door").toLowerCase();
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
        var libraryGoUpstairs = prompt("You walk up the spiral staircase to the next floor. There you can see the whole expanse of the gigantic library. \n -try door \n -go downstairs").toLowerCase();
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
        var libraryLookAround = prompt("As you start walking around, you notice that there is one bookshelf that is not empty. Sitting on the bottom shelf of the last bookshelf is a thin, dark leathered book. ‘Hints’ is etched in gold on the book’s cover. Above the bookshelf is a big sword hanging on a mantle. Behind you is that small ominous looking wooden door. \n -go upstairs \n -open door \n -pick up book \n -pick up sword");
            if(libraryLookAround == "go upstairs"){
                alert("...you go upstairs");
                LibraryGoUpstairs();
            }
            else if(libraryLookAround == "open door"){
                alert("You walk over to the small wooden door and push it open...");
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
                while(chances > 0 && libraryBookRiddle !== "a secret"){
                        alert("That's not the answer! Only "+chances+" chances left!");
                        var libraryBookRiddle = prompt("If you have me, you want to share me. If you share me, I no longer exist. What am I?");
                    chances--;
                }
                alert("Anser: A Secret. That's right. \n\nBook of Hints added to inventory");
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
        var forestPath = prompt("You stumble forward onto a dirt forest path. Towering trees loom before you, their bare branches spike into the charcoal sky like tendrils of monstrous beasts. Mist swirls around the bottom of the trees and ravenous howls fill your ears. In the distance, a solitary light, itself half lost in the damp mist, seems to be hanging from a tree. \n-go through mist \n-follow path \n-forge path \n-head towards light").toLowerCase();
            if(forestPath == "go through mist"){
                MystIsland();
            }
            else if(forestPath == "follow path"){
                DallingtonForest();
            }
            else if(forestPath == "forge path"){
                SilentHill();
            }
            else if(forestPath == "head towards light"){
                CalterburryCitadel();
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
                var waterLookAround = prompt(" prompt 28... \n -use boat \n -go back \n-swim across lake");
                if(waterLookAround == "use boat"){
                  //add correct while loop for this riddle
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
                else if(waterLookAround == "swim across"){
                  alert("the lake was infested with aligators, you DIE.");
                  Library();
                }
              break;
              case "swim across":
                alert("The lake was infested with aligators, you DIE.");
                Library();
              break;
              case "go back":
                alert("You decide to go back to the forest...");
                ForestPath();
              break;
            }
        }
        //MystIslandIsland(){
            
        //}
    function CalterburryCitadel(){
        var calterburryCitadel = prompt("With no light of your own, you decide to follow the ominous glow of the only light available. You turn off of the forest path and start making your way towards it, only to realize that the light is not hanging from a tree, but shines from a tower on top of a citadel. \n-go into citadel \n-walk around \n-go back").toLowerCase();
        if(calterburryCitadel == "go into citadel"){
          InsideCalterburryCitadel();
        }
        else if(calterburryCitadel == "walk around"){
          AroundCalterburryCitadel();
        }
        else if(calterburryCitadel =="go back"){
          ForestPath();
        }
        else{
            alert("I don't know what "+calterburryCitadel+" is!");
            CalterburryCitadel();
        }
    function InsideCalterburryCitadel(){
      var insideCalterburryCitadel = prompt("You walk through the inner walls and come to a huge circular room. As you walk towards the middle, huge swarms of ghosts encircle you. \n-go upstairs \n-look around \n-leave citadel");
      if(insideCalterburryCitadel == "go upstairs"){
        UpstairsCalterburryCitadel();
      }
      else if(insideCalterburryCitadel == "look around"){
        AroundInsideCalterburryCitadel();
      }
      else if(insideCalterburryCitadel == "leave citadel"){
        CalterburryCitadel();
      }
      else{
        alert("I don't know what "+insideCalterburryCitadel+" is!");
        InsideCalterburryCitadel();
      }
    function AroundInsideCalterburryCitadel(){
        var aroundInsideCalterburryCitadel = prompt("A figure rises up from the ocean of ghosts and says, ‘I am Demon Ditrak, necromancer of the Calterburry Citadel, defender of the ghost key. Give me one reason not to kill you’ \n-anwer ditrak \n-attack ditrak \n-run away").toLowerCase();
        if(aroundInsideCalterburryCitadel == "answer ditrak"){
            alert("You start talking to Ditrak and explain how you need four keys to return home. Ditrak responds, ‘I take pity in your pitiful human story. So much pity that I will let you try to answer my riddle. Answer it, and I shall give you my key. Fail to, like all other mortals have, and I will let my ghosts devour you. Did I mention that my ghosts are the past mortals who have come my way?’");
            DitrakRiddle();
        }
        else if(aroundInsideCalterburryCitadel == "attack ditrak"){
            alert("That was a stupid decision! You pull out your sword to swing at Ditrak, and he just knocks it out of your hands with one swip of his demon claws. 'You're no match for me' he laughs as he opens his mouth and bites off your head.");
            //Death sequence
            inventory.deaths +=1;
            alert("You have died "+inventory.deaths+"times. But, since this is fantasy, you can restart again at the library.");
            Library();
        }
        else if(aroundInsideCalterburryCitadel == "run away"){
            alert("Scared, you flee away from the demon. The ghosts trail you as you search in vain for the door. Suddenly, you see a staircase, which you race up.");
            alert("Up in the second floor of the Citadel, there are even more ghosts! They shimmer in the air, and your blood runs cold. You pull out your sword and try to stab at them, but it just passes through! They come closer, and closer, and then they are on you! You die a horrible, slow death as your blood slowly freezes by the ghosts touch. You turn into a ghost and join their ranks, waiting to prey on the next mortal that comes into the Calterburry Citadel.");
            inventory.deaths +=1;
            alert("You have died "+inventory.deaths+"times.");
            confirm("As you float aimlessly around the Citadel, a banshee comes up to you. ‘My name is Erebos the Banshee, and I have a potion that will let you come back to life. Answer my riddle and I will give it to you. Fail, and you will forever remain a ghost. Do you want to answer my riddle?’").toLowerCase();
            ErebosRiddle();
        }
        else{
          alert("I don't know what "+aroundInsideCalterburryCitadel+" is!");
          AroundInsideCalterburryCitadel();
        }
    }
      function UpstairsCalterburryCitadel(){
        upstairsCalterburryCitadel = prompt("As walk to the second floor of the Citadel, a banshee comes up to you. ‘My name is Erebos the Banshee, and I have a potion that will let you go back to your home. Answer my riddle and I will give it to you. Fail, and you will become one of my ghosts forever. Do you want to answer my riddle?’ \n-fight erebos \n-talk to erebos \n-go downstairs");
        if(upstairsCalterburryCitadel == "fight erebos"){
          alert("You pull out your sword and start fighting Erebos. He starts to shimmer in the air, and your blood runs cold. You pull out your sword and try to stab at him, but it just passes through! He comes closer, and closer, and then he is on you! You die a horrible, slow death as your blood is slowly sucked dry by Erebos. You turn into a ghost and join his ranks, waiting to prey on the next mortal that comes into the Calterburry Citadel.");
            inventory.deaths +=1;
            alert("You have died "+inventory.deaths+"times. But, since this is fantasy, you can restart again at the library.");
            Library();
        }
        else if(upstairsCalterburryCitadel == "talk to erebos"){
          ErebosRiddle();
        }
        else if(upstairsCalterburryCitadel == "go downstairs"){
          alert("Thinking that you might be better off just finding the other keys, you hustle down the stairs to the main room.");
          InsideCalterburryCitadel;
        }
        function ErebosRiddle(){
          var erebosRiddle = prompt("You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. What am I? \write your answer in the box \nor write 'hint'");
            if(erebosRiddle == "hint" && inventory.book >= 1){
                alert("What do you use as light when their is no electricity?");
                ErebosRiddle();
            }
            else if(erebosRiddle == "hint" && inventory.book !== 1){
                alert("You do not have the book of hints");
                ErebosRiddle();
            }
            else{
            let chances = 5;
                while(chances > 0 && erebosRiddle !== "candle"){
                        alert("That's not the answer! Only "+chances+" chances left!");
                        var erebosRiddle = prompt(" You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. \write your answer in the box \nor write 'hint'");
                    chances--;
                }
                inventory.keys ++;
                alert("Anser: A candle. That's right. \n11 key added to inventory");
                alert("Glad to that you answered corectly, you walk downstairs and out of the Citadel, thinking it would be fine if you never see the Citadel ever again. You head back into the forest and start jogging, feeling a renewed amount of energy.");
                ForestPath();
        }
        
      }
    }
    }
    function AroundCalterburryCitadel(){
      var aroundCalterburryCitadel = prompt("You walk around the looming citadel and notice that it is smaller than what you first thought. The entire fortification takes up a 100 cubic feet clearing in the forest. The only light illuminating the outside battlements is a singular lamp on the front door. You notice a vial of purple liquid lying next to the door, its swirling contents glow a faint white. \n-pick up vial \n-go into citadel \n-go back").toLowerCase();
      if(aroundCalterburryCitadel == "pick up vial"){
        alert("You pocket the vial and then walk into the Citadel");
        InsideCalterburryCitadel();
      }
      else if(aroundCalterburryCitadel == "go into the citadel"){
        alert("You really should have picked up that vial! But, since you are only just a mortal, you make a mistake and go into the citadel without any protection...");
        InsideCalterburryCitadel();
      }
      else if(aroundCalterburryCitadel == "go back"){
        alert("You decide that there is nothing to see here and head back to the forest path...");
        ForestPath();
      }
      else{
        alert("I don't know what "+aroundCalterburryCitadel+" means!");
        AroundCalterburryCitadel();
      }
    }
    }
    function SilentHill(){
        var silentHill = prompt("Who cares about paths, you are a trailblazer! You step off of the dirt path and forge your path through the twisted mangle of branches. Nearly invisible thorns pierce your skin as you crawl your way through the trees. After what seems like hours, the trees start to thin out and a looming hill comes into view. A sign at the bottom of the hill says, ‘Welcome to Silent Hill, Silent Hill, Silent Hill, SH, SH, SH’ \n-climb hill \n-walk around \n-go back");
        if(silentHill == "climb hill"){
          SilentHillClimb();
        }
        else if(silentHill == "walk around"){
          SilentHillAround();
        }
        else if(silentHill == "go back"){
          alert("Not interested in a big hill that promises a good time, you turn back and climb back through the forest trying to find the path again...");
          ForestPath();
        }
    function SilentHillClimb(){

    }
    function SilentHillAround(){
      var silentHillAround = prompt("As you start to round the hill, you notice that it is looms 50 feet into the sky, and has a wooden staircase leading up to the top. Near the base of the hill there is a treasure chest half buried in the dirt. \n-dig up the chest \n-climb the hill \n-go back");
      if(silentHillAround == "dig up the chest"){
          var silentHillChest1 = confirm("Tremendous effort goes into digging out the chest with your hands. The ground is ice cold, the dirt unmoving. 30 minutes go by with no progress made. Do you wish to continue?");
            if(silentHillChest1){
              var silentHillChest2 = confirm("Once again you start to dig, but alas, no progress. Do you wish to continue?");
              if(silentHillChest2){
                var silentHillChest3 = confirm("Once again you start to dig. You have made not progress for another 2 hours...Do you wish to continue?");
                  if(silentHillChest3){
                    alert("The chest finally comes up. The old box is smaller than you thought, but as you open it up...you fall in!");
                    TheEnd();
                  }
                  else{
                    alert("Your hands have turned blue from digging so much in the solid, cold ground. They fall off from frostbite and you eventually die!");
                    //death sequence here
                  }
              }
              else{
                silentHillAround();
              }
            }
            else{
              silentHillAround();
            }
      }
      else if(silentHillAround == "climb the hill"){
        SilentHillClimb();
      }
      else if(silentHillAround == "go back"){
        alert("Not interested in a big hill that promises a good time, you turn back and climb back through the forest trying to find the path again...");
        ForestPath();
      }
    }
    }
    function DallingtonForest(){
        var dallingtonForestDul = prompt("You decide that without a map, the easiest decision is to follow the dirt path that you can see. Your shoes crunch against the fallen black leaves as you continue your adventure. Suddenly, you hear the snap of a twing. You startle, and quickly turn around to determine what caused that sound, unaware of the looming shadow growing behind you. Deciding that you must have just heard something, you turn around, only to find a horrid beast standing before you! As you regain your ability to think, you realize that the mass of stone and slime standing before you is an orc! With a loud voice, the orc procalims, ‘I am Dul the Orc, guardian of Dallington Forest, protector of the forest key. What is your business in Dallington Forest?’ \n attack Dul \n talk to Dul").toLowerCase();
        if(dallingtonForestDul == "attack dul"){
            if(inventory.sword = 1){
                alert("Without thinking, you pull out the sword you took from the library and take a stab at Dul the Orc. But alas, you weren’t really that smart, because he easily decapitates you. At least you die a quick death because head wounds bleed a lot. Don’t fear, since this is just fantasy, you can still come back from the dead and try again.");
                ForestPath();
            }
            else{
                alert("Without thinking, you grab a stick laying on the ground and try to take a stab at Dul the Orc. But alas, you weren’t really that smart, because he easily decapitates you. At least you die a quick death because head wounds bleed a lot. #thatwasquick");
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
          alert("You talk to Dul, explaining your situation and how you just want to make it home. Dul responds by saying, 'I take pity on you, answer one of my riddles and I will give you one of the four keys of Riddle Land.'");
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
                        var dulRiddle = prompt("I am not alive, yet I grow; I have no lungs, yet I need air; I have no mouth, yet I can drown. What am I? \n write your answer in the box \n or write 'hint' to recieve a hint");
                    chances--;
                }
                alert("Anser: A fire. That's right. \n1 key added to inventory");
                inventory.keys ++;
                alert("Glad that you made it past Dul the Orc, you start walking back down the path. After a littleways you hear the flight of spooked beast and you start running.");
                ForestPath();
            }
        }
    }
    function TheEnd(){
      alert("As you regain your bearings, yo notice with suprise that you have made it back to your...")
      alert("Congradulations, you have beat the Land of Riddles!");
    }
}//end game bracket
    

    
    /*
           //test of loops
    function Shop(){
    var arrowsShop = 100;
    var arrowPrice = 1;
    var purchase = prompt("Welcome to the Shop, what would you like to buy? \n-Arrows:"+arrowsShop).toLowerCase();
    if(purchase == "arrows"){
        var arrowCon = prompt("How many arrows would you liek to purchase?");
        while(!confirm("Are you sure you want to purchase "+arrowCon+" arrows, for "+arrowPrice+" per arrow")){
        arrowCon = prompt("How many arrows do youwish to buy?");
        }
        
        for(i = 1; i<= arrowCon; i++){
        inventory.coins ++;
        console.log("You have "+inventory.coins+" coins");
        }
        alert("you have purchased "+arrowCon+" arrows. Thank you!");
        Shop();
    }
    else if(purchase == "exit"){
    ForestPath();
    }
    }
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