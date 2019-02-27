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


var simpleAlert=document.querySelector(".simple-alert");
simpleAlert.addEventListener("click", function(e)){
                             e.preventDefault();
injectTemplate(getBannerTemplate());
var btnClose = document.querySelector(".banner-close");
btnClose.addEventListener("click",function(closeEvt)){
                          var banner = document.querySelector(".banner");
banner.parentNode.removechild(banner);
                          }
                             }


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
    var Box = '\u058E';
    
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
        var library = prompt("You appear to be in a spacious library. In the middle of the library there is a spiral staircase leading to the next floor. All around you are empty bookshelves. On the far end of the library is a small wooden door.\n"+Box+"go upstairs \n"+Box+"look around \n"+Box+"open door").toLowerCase();
        if(library == "go upstairs"){
            LibraryGoUpstairs();
        }
        else if(library == "look around"){
            LibraryLookAround();
        }
        else if(library == "open door"){
            ForestPath();
        }
        else{
          alert("I don't know what "+library+" is!");
          Library();
        }
    
    function LibraryGoUpstairs(){
      //add loop  seeing if they have a  key and if they do, let them open up the door.
        var libraryGoUpstairs = prompt("You walk up the spiral staircase to the next floor. There you can see the whole expanse of the gigantic library. \n"+Box+"try door \n"+Box+"go downstairs").toLowerCase();
        while(inventory.keys < 4){
            if(libraryGoUpstairs == "try door"){
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
            if(libraryGoUpstairs == "try door"){
                alert("You take out all four keys and insert them into the door. Light starts to shine from behind the door, and you open it up to whiteness. Without any hestiation, you step forward into the white...");
                TheEnd();
            }
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
        var libraryLookAround = prompt("As you start walking around, you notice that there is one bookshelf that is not empty. Sitting on the bottom shelf of the last bookshelf is a thin, dark leathered book. ‘Hints’ is etched in gold on the book’s cover. Above the bookshelf is a big sword hanging on a mantle. Behind you is that small ominous looking wooden door. \n"+Box+"go upstairs \n"+Box+"open door \n"+Box+"pick up book \n"+Box+"pick up sword").toLowerCase();
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
                        var libraryBookRiddle = prompt("If you have me, you want to share me. If you share me, I no longer exist. What am I?").toLowerCas();
                    chances--;
                }
                alert("Anser: A Secret. That's right. \n\nBook of Hints added to inventory");
                inventory.book ++;
                LibraryLookAround();
                
            }
            else{
              alert("I don't know what"+libraryLookAround+" is!");
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
      //add a while loop to see if the pc has 4 keys
      while(inventory.keys < 4){
        var forestPath = prompt("You stumble forward onto a dirt forest path. Towering trees loom before you, their bare branches spike into the charcoal sky like tendrils of monstrous beasts. Mist swirls around the bottom of the trees and ravenous howls fill your ears. In the distance, a solitary light, itself half lost in the damp mist, seems to be hanging from a tree. \n"+Box+"follow path \n"+Box+"forge path \n"+Box+"head towards light \n"+Box+"go through mist").toLowerCase();
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
      var forestPathKeys = prompt("You stumble forward onto a dirt forest path. Towering trees loom before you, their bare branches spike into the charcoal sky like tendrils of monstrous beasts. Mist swirls around the bottom of the trees and ravenous howls fill your ears. In the distance, a solitary light, itself half lost in the damp mist, seems to be hanging from a tree. Behind you, barely visible, you can make out an ordinary wooden door. \n"+Box+"follow path \n"+Box+"forge path \n"+Box+"head towards light \n"+Box+"go through mist \n"+Box+"go through door");
      if(forestPathKeys == "go through mist"){
          MystIsland();
            }
      else if(forestPathKeys == "follow path"){
          DallingtonForest();
            }
      else if(forestPathKeys == "forge path"){
          SilentHill();
            }
      else if(forestPathKeys == "head towards light"){
          CalterburryCitadel();
            }
      else if(forestPathKeys == "go through door"){
        alert("You head towards the wooden door, it seems vaguely familiar. You turn the handle and walk through, into the library.")
        Library();
      }
      else{
          alert("I don't know what "+forestPathKeys+" is!");
          ForestPathKeys();
            }
        }
    function MystIsland(){
        var edgeOfWater = prompt("The damp mists cling to your clothes as you travel through them. Your eyes water, and you think you hallucinated a beach, but when your feet hit sand, you know it's real. It’s a small beach with white sand. The mist is thinner herer, and almost completely disappears by the water’s edge. Far out across the water is a solitary island.   \n"+Box+"look around \n"+Box+"swim across \n"+Box+"go back").toLowerCase();
        switch (edgeOfWater){
            case "look around":
                var waterLookAround = prompt("You start walking around and notice a wooden boat sticking out of the sand. You digg it out and notice that it may or may not be sea worthy. \n"+Box+"use boat \n"+Box+"go back \n"+Box+"swim across lake").toLowerCase();
                if(waterLookAround == "use boat"){
                    let boat = confirm("In order to use boat, you'll need to answer a riddle. Do you want to do that?");
                   if(boat){
                     BoatRiddle();
                   }
                   else{
                     MystIsland();
                   }
                }
                else if(waterLookAround == "go back"){
                    MystIsland();
                }
                else if(waterLookAround == "swim across"){
                  alert("the lake was infested with aligators, you DIE.");
                  //death sequence
                  inventory.deaths +=1;
                  inventory.keys = 0;
                  inventory.book = 0;
                  inventory.sword = 0;
                  alert("You have died "+inventory.deaths+" times. But, since this is fantasy, you can restart again at the library.");
                  Library();
                }
                else{
                  alert("I don't know what "+waterLookAround+" is!");
                  MystIsland();
                }
              break;
              case "swim across":
                alert("The lake was infested with aligators, you DIE.");
                //death sequence
                  inventory.deaths +=1;
                  inventory.keys = 0;
                  inventory.book = 0;
                  inventory.sword = 0;
                  alert("You have died "+inventory.deaths+" times. But, since this is fantasy, you can restart again at the library.");
                  Library();
              break;
              case "go back":
                alert("You decide to go back to the forest...");
                ForestPath();
              break;
              default:
                alert("I don't know what "+edgeOfWater+" is!");
                MystIsland();
              break;
            }
        function BoatRiddle(){
          var boatRiddle = prompt("What becomes wetter the more it dries? \write your answer in the box \nor write 'hint'").toLowerCase();
            if(boatRiddle == "hint" && inventory.book >= 1){
                alert("What do you use after taking a shower?");
                BoatRiddle();
            }
            else if(boatRiddle == "hint" && inventory.book !== 1){
                alert("You do not have the book of hints");
                BoatRiddle();
            }
            else{
            let chances = 5;
                while(chances > 0 && boatRiddle !== "a towell"){
                        alert("That's not the answer! Only "+chances+" chances left!");
                        var boatRiddle = prompt("What becomes wetter the more it dries? \write your answer in the box \nor write 'hint'");
                    chances--;
                }
                inventory.keys ++;
                alert("Anser: A towell. That's right. \n1 key added to inventory \nYou now have "+inventory.keys+" keys.");
                alert("You pull the boat out to the ocean and start paddling across.");
                MystIslandIsland();
        }
        
      }
    function MystIslandIsland(){
            var mystIsalndIsland = prompt("After rowing for what seems like thirty minutes, the boat hits sand. Excited, you jump out of the boat onto the island. You can see that the island is a mini tropical rainforest. You walk into the forest, wanting to know what is on the island, when a green basilisk jumps out of the trees. ‘I am Vrumier the Basilisk. Gobbler of humans, protector of the Myst key. What is your business on my island?’ \n"+Box+"attack Vrumier \n"+Box+"talk to Vrumier");
            if(mystIsalndIsland == "attack vrumier"){
              alert("You pull out your sword to attack him, but he is too quick and knocks the sword out of your hand. You run back to your boat and start rowing out to the ocean, thinking this will stop Vrumier, but you didn't know that basilisks can run on water. Vrumier catches up to you and kills you.")
              //death sequence
                  inventory.deaths +=1;
                  inventory.keys = 0;
                  inventory.book = 0;
                  inventory.sword = 0;
                  alert("You have died "+inventory.deaths+" times. But, since this is fantasy, you can restart again at the library.");
                  Library();
            }
            else if(mystIsalndIsland == "talk to vrumier"){
              alert("You explain your situation to Vrumier, and tell him you only want to make it home. Vrumier thinks for a bit and then says, 'I will give you five chances to answer my riddle, if you can do that, I will let you have my key and go in peace.");
              let riddle = confirm("Do you want to answer Vrumier's riddle?");
              if(riddle){
                VrumierRiddle();
              }
              else{
                alert("Deciding not to answer Vrumier, you pull out your sword to attack him, but he is too quick and knocks the sword out of your hand. You run back to your boat and start rowing out to the ocean, thinking this will stop Vrumier, but you didn't know that basilisks can run on water. Vrumier catches up to you and kills you.")
              //death sequence
                  inventory.deaths +=1;
                  inventory.keys = 0;
                  inventory.book = 0;
                  inventory.sword = 0;
                  alert("You have died "+inventory.deaths+" times. But, since this is fantasy, you can restart again at the library.");
                  Library();
              }
            }
            else{
              alert("I don't know what "+mystIsalndIsland+" is!");
              MystIslandIsland();
            }
    }
    function VrumierRiddle(){
       var vrumierRiddle = prompt("What can run but never walks, often murmurs, never talks, has a mouth but never eats, has a bed but never sleeps? \nwrite your answer in the box \nor write 'hint'");
            if(vrumierRiddle == "hint" && inventory.book >= 1){
                alert("You really are stupid. Try thining of bodies of water");
                VrumierRiddle();
            }
            else if(vrumierRiddle == "hint" && inventory.book !== 1){
                alert("You do not have the book of hints");
                VrumierRiddle();
            }
            else{
            let chances = 5;
                while(chances > 0 && vrumierRiddle !== "a river"){
                        alert("That's not the answer! Only "+chances+" chances left!");
                        var vrumierRiddle = prompt("What can run but never walks, often murmurs, never talks, has a mouth but never eats, has a bed but never sleeps? \nwrite your answer in the box \nor write 'hint'");
                    chances--;
                }
                inventory.keys ++;
                alert("Anser: A river. That's right. \n1 key added to inventory \nYou now have "+inventory.keys+" keys.");
                alert("Vrumier reluctantly hands over the key and rush back to your boat and paddle towards the other shore. Once there, you head back into the forest and start running...");
                ForestPath();
        }
    }
    }

    function CalterburryCitadel(){
        var calterburryCitadel = prompt("With no light of your own, you decide to follow the ominous glow of the only light available. You turn off of the forest path and start making your way towards it, only to realize that the light is not hanging from a tree, but shines from a tower on top of a citadel. \n"+Box+"go into citadel \n"+Box+"walk around \n"+Box+"go back").toLowerCase();
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
      var insideCalterburryCitadel = prompt("You walk through the inner walls and come to a huge circular room. As you walk towards the middle, huge swarms of ghosts encircle you. \n"+Box+"go upstairs \n"+Box+"look around \n"+Box+"leave citadel");
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
        var aroundInsideCalterburryCitadel = prompt("A figure rises up from the ocean of ghosts and says, ‘I am Demon Ditrak, necromancer of the Calterburry Citadel, defender of the ghost key. Give me one reason not to kill you’ \n"+Box+"anwer ditrak \n"+Box+"attack ditrak \n"+Box+"run away").toLowerCase();
        if(aroundInsideCalterburryCitadel == "answer ditrak"){
            alert("You start talking to Ditrak and explain how you need four keys to return home. Ditrak responds, ‘I take pity in your pitiful human story. So much pity that I will let you try to answer my riddle. Answer it, and I shall give you my key. Fail to, like all other mortals have, and I will let my ghosts devour you. Did I mention that my ghosts are the past mortals who have come my way?’");
            DitrakRiddle();
        }
        else if(aroundInsideCalterburryCitadel == "attack ditrak"){
            alert("That was a stupid decision! You pull out your sword to swing at Ditrak, and he just knocks it out of your hands with one swip of his demon claws. 'You're no match for me' he laughs as he opens his mouth and bites off your head.");
            //Death sequence
            inventory.deaths +=1;
            inventory.keys = 0;
            inventory.book = 0;
            inventory.sword = 0;
            alert("You have died "+inventory.deaths+" times. But, since this is fantasy, you can restart again at the library.");
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
        upstairsCalterburryCitadel = prompt("As walk to the second floor of the Citadel, a banshee comes up to you. ‘My name is Erebos the Banshee, and I have a potion that will let you go back to your home. Answer my riddle and I will give it to you. Fail, and you will become one of my ghosts forever. Do you want to answer my riddle?’ \n"+Box+"fight erebos \n"+Box+"talk to erebos \n"+Box+"go downstairs");
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
          var erebosRiddle = prompt("You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. What am I? \nwrite your answer in the box \nor write 'hint'");
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
                alert("Anser: A candle. That's right. \n11 key added to inventory \nYou now have "+inventory.keys+" keys.");
                alert("Glad to that you answered corectly, you walk downstairs and out of the Citadel, thinking it would be fine if you never see the Citadel ever again. You head back into the forest and start jogging, feeling a renewed amount of energy.");
                ForestPath();
        }
        
      }
    }
    }
    function AroundCalterburryCitadel(){
      var aroundCalterburryCitadel = prompt("You walk around the looming citadel and notice that it is smaller than what you first thought. The entire fortification takes up a 100 cubic feet clearing in the forest. The only light illuminating the outside battlements is a singular lamp on the front door. You notice a vial of purple liquid lying next to the door, its swirling contents glow a faint white. \n"+Box+"pick up vial \n"+Box+"go into citadel \n"+Box+"go back").toLowerCase();
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
        var silentHill = prompt("Who cares about paths, you are a trailblazer! You step off of the dirt path and forge your path through the twisted mangle of branches. Nearly invisible thorns pierce your skin as you crawl your way through the trees. After what seems like hours, the trees start to thin out and a looming hill comes into view. A sign at the bottom of the hill says, ‘Welcome to Silent Hill, Silent Hill, Silent Hill, SH, SH, SH’ \n"+Box+"climb hill \n"+Box+"walk around \n"+Box+"go back");
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
        var silentHillClimb = prompt("You climb the hill. At the top of the hill is a single deadly nightshade with an big night owl perched on the lowest branch. The owl starts speaking, ‘I am Nightfeather Owl, I stab out the eyes of those who trespass, but I’m also the defender of SH key. Who dares comes near me?’ \n"+Box+"attack Owl \n"+Box+"talk to Owl").toLowerCase();
        if(silentHillClimb == "attack owl"){
            alert("You pull out your sword to kill Nightfeather the Owl. She swoops back into the air. You chase her down and defeat her.");
            inventory.keys ++;
            alert("1 Key added to inventory.\nYou now have "+inventory.keys+" keys.");
            alert("Now armed with the SH Key, you hurry down the hill and back into the forrest when...");
            ForestPath();
        }
        else if(silentHillClimb == "talk to owl"){
            let owl = confirm("I have two riddles, answer them both and you will gain the SH key. Do you want to try?");
            if(owl){
              OwlRiddle();
            }
            else{
              alert("'Fine, then be that way.' Nightfeather Owl says and swoops in and eats you.");
              //death sequence
                  inventory.deaths +=1;
                  inventory.keys = 0;
                  inventory.book = 0;
                  inventory.sword = 0;
                  alert("You have died "+inventory.deaths+" times. But, since this is fantasy, you can restart again at the library.");
                  Library();
            }
        }
        else{
          alert("I don't know what "+silentHillClimb+" is!");
          SilentHillClimb();
        }
    
    }
    function OwlRiddle(){
          var owlRiddle = prompt("What is so fragile, even saying its name can break it? \nwrite your answer in the box \nor write 'hint'");
            if(owlRiddle == "hint" && inventory.book >= 1){
                alert("Silent Hill...SH...shhhhhhhh");
                OwlRiddle();
            }
            else if(owlRiddle == "hint" && inventory.book !== 1){
                alert("You do not have the book of hints");
                OwlRiddle();
            }
            else{
            let chances = 5;
                while(chances > 0 && owlRiddle !== "silence"){
                        alert("That's not the answer! Only "+chances+" chances left!");
                        var owlRiddle = prompt(" What is so fragile, even saying its name can break it? \write your answer in the box");
                    chances--;
                }
                inventory.keys ++;
                alert("Anser: Silence. That's right. \n1 key added to inventory \nYou now have "+inventory.keys+" keys.");
            let riddle2 = confirm("Are you ready for the next one?");
            if(riddle2){
              var owlRiddle2 = prompt("I never was, am always to be. No one ever saw me, nor ever will, and yet I am the confidence of all To live and breathe on earth. What am I? \nwrite your answer in the box \nor write 'hint'");
            if(owlRiddle2 == "hint" && inventory.book >= 1){
                alert("yesterday lives in memories, you live in the present, but ___, will always be in the future.");
                OwlRiddle();
            }
            else if(owlRiddle2 == "hint" && inventory.book !== 1){
                alert("You do not have the book of hints");
                OwlRiddle();
            }
            else{
            let chances = 5;
                while(chances > 0 && owlRiddle2 !== "tomorrow"){
                        alert("That's not the answer! Only "+chances+" chances left!");
                        var owlRiddle2 = prompt("I never was, am always to be. No one ever saw me, nor ever will, and yet I am the confidence of all To live and breathe on earth. What am I? write your answer in the box \nor write 'hint'");
                        if(owlRiddle2 == "hint"){
                        alert("yesterday lives in memories, you live in the present, but ___, will always be in the future.");
                        OwlRiddle();
                        }
                    chances--;
                }
                inventory.keys ++;
                alert("Anser: Tomorrow. That's right. \n1 key added to inventory \nYou now have "+inventory.keys+" keys.");
            }
            }
            else{
              alert("Just only wanting to answer one, you say goodbye to Nighfeather Owl and head back down the hill into the forest.");
              ForestPath();
            }
           alert("Glad to that you answered corectly, you walk back down the hill. You head back into the forest and start jogging, feeling a renewed amount of energy.");
            ForestPath();
            }
    }
    function SilentHillAround(){
      var silentHillAround = prompt("As you start to round the hill, you notice that it is looms 50 feet into the sky, and has a wooden staircase leading up to the top. Near the base of the hill there is a treasure chest half buried in the dirt. \n"+Box+"dig up chest \n"+Box+"climb the hill \n"+Box+"go back");
      if(silentHillAround == "dig up chest"){
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
                  inventory.deaths +=1;
                  inventory.keys = 0;
                  inventory.book = 0;
                  inventory.sword = 0;
                  alert("You have died "+inventory.deaths+" times. But, since this is fantasy, you can restart again at the library.");
                  Library();
                  }
              }
              else{
              alert("You decide to leave the chest and just to climb up the hill.");
              SilentHillClimb();
              }
            }
            else{
              alert("You decide to leave the chest and just to climb up the hill.");
              SilentHillClimb();
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
        var dallingtonForestDul = prompt("You decide that without a map, the easiest decision is to follow the dirt path that you can see. Your shoes crunch against the fallen black leaves as you continue your adventure. Suddenly, you hear the snap of a twing. You startle, and quickly turn around to determine what caused that sound, unaware of the looming shadow growing behind you. Deciding that you must have just heard something, you turn around, only to find a horrid beast standing before you! As you regain your ability to think, you realize that the mass of stone and slime standing before you is an orc! With a loud voice, the orc procalims, ‘I am Dul the Orc, guardian of Dallington Forest, protector of the forest key. What is your business in Dallington Forest?’ \n"+Box+"attack Dul \n"+Box+"talk to Dul").toLowerCase();
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
            var dulRiddle = prompt("I am not alive, yet I grow; I have no lungs, yet I need air; I have no mouth, yet I can drown. What am I? \n"+Box+"write your answer in the box \n"+Box+"or write 'hint' to recieve a hint");
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
                alert("Anser: A fire. That's right. \n1 key added to inventory \nYou now have "+inventory.keys+" keys.");
                inventory.keys ++;
                alert("Glad that you made it past Dul the Orc, you start walking back down the path. After a littleways you hear the flight of spooked beast and you start running.");
                ForestPath();
            }
        }
    }
    function TheEnd(){
      var theEnd = confirm("As you regain your bearings, yo notice with suprise that you have made it back to your great-uncle's office. There on the table is a very unusual book on a his desk. The title says, Land of Riddles. \n"+Box+"Do you want to open it?");
      if(theEnd){
        alert("You open it up, and suddenlly fall into the book!");
        inventory.keys = 0;
        inventory.book = 0;
        inventory.sword = 0;
        Library();
      }
      else{
        alert(Box+"Congradulations, you have beat the Land of Riddles!"+Box);
      }
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