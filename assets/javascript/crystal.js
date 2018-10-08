var images=["assets/images/red.jpg", "assets/images/green.jpg","assets/images/orange.jpg","assets/images/purple.jpg"]
var randnumber;
var wins=0;
losses=0;
var total=0;


var audio = new Audio("assets/images/buzzer.wav");
var audiow = new Audio("assets/images/winner.mp3");
var reset= function() {
    $(".crystals").empty();
    $("#youwin").empty()
    $("#youlose").empty();
var number= document.getElementById("randnum");

 randnumber= Math.floor(Math.random()* 101)+19;


    number.textContent = "Target Number: "+randnumber;
   
    
    for( var i = 0; i < 4; i++){

    var random= Math.floor(Math.random()*11) +1;
       
    var crystal = $("<div>");
       crystal.attr({
            "class":'crystal', 
        "data-random":random 
    });
        crystal.css({

        "background-image": "url('"+ images[i] + "')"
        
    });

    $(".crystals").append (crystal);
}

$("#total").text("Total: "+ total);

}
 reset();
 


$(document).on('click',".crystal", function(){
        
        
        var num=parseInt($(this).attr("data-random"));
        total+=num;
        $("#total").text("Total: "+ total);


        if (total>randnumber){

            losses ++;
            $("#wins").text("Wins: " + wins);
            $("#losses").text("losses:" + losses);
            $("#youlose").text("You Lose");
            audio.play();
            
            total=0;
            setTimeout (function(){
                reset();
                },2000);

            
        }
        else if (total === randnumber){
            wins++;

            $("#wins").text("Wins: " + wins);
            $("#losses").text("losses:" + losses);
            $("#youwin").text("You Win");
            audiow.play();
            total=0;
          
            setTimeout (function(){
                reset();
                },2000);
            
        }





    });

