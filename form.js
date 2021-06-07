class Form { 
    constructor(){
        this.button = createButton("SaveTheWorld");
        this.input = createInput("SuperHeroName");
    }
    display(){
        this.button.position(600,300);
        this.input.position(600,250);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            var name =this.input.value();

            playerCount=playerCount+1;
            player1.update(name)
            player1.updateCount(playerCount);

            var greeting = createElement('h3');
            greeting.html("Get ready to save the World" + name + " waiting for your TeamMate " )
            greeting.position(130, 160) }); 
        
    }

    
    

}