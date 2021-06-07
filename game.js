class Game { 
    constructor(){

    }
    getState() {
        var gameStateRef;
        gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val()
        })  
 }
     updateState(state){
       database.ref("gameState").set({
           gameState:state
       })
      }
    start(){
        background(bgStart)
        form1 = new Form();
        form1.display();
        player1 = new Player();
        
    }
}