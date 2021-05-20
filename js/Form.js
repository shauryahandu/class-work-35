class Form{
    constructor(){


    }
    display(){
        var title=createElement('h2');
        title.html("CAR RACING GAME")
        title.position(150,20)
        var input=createInput("Enter your name")
        input.position(165,150);
        var button=createButton("play")
        button.position(195,200)
        var greeting=createElement('h3')
        greeting.position(185,250)

        button.mousePressed(function(){

            input.hide();
            button.hide();
            var name= input.value();

            playerCount+=1
            player.update(name);
            player.updateCount(playerCount)

            greeting.html("hello " + name);

        })
    }
}