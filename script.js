console.log("Welcome");

let ball_color = ['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick', 'crimson']
let balls = 0;

$("#ball-btn").on('click', function(){
    balls = $("#no_of_balls").val();
    console.log(balls);

    let playground_div = $("#playground");
    

    for(let count=0; count<balls; count++)
    {
        let ball = $("<div></div>");   
        // randomly selecting color for balls
        let color_no = Math.floor(Math.random()*ball_color.length);
        // console.log(color_no);
        ball.css("background-color", ball_color[color_no]);
        ball.addClass("collect-ball");
        playground_div.append(ball);
    }
})


{

    $("#put-ball").on('click', function(){
        let basket = $("#basket");
        let ball = $("<div></div>");   
    
        // randomly selecting color for balls
        let color_no = Math.floor(Math.random()*ball_color.length);
        // console.log(color_no);
        ball.css("background-color", ball_color[color_no]);
        ball.addClass("collect-ball");
        basket.append(ball);
    });

}


