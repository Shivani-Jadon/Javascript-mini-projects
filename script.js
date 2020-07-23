console.log("Welcome");

let ball_color = ['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick', 'crimson']
let balls = 0;

$("#ball-btn").on('click', function(){
    balls = $("#no_of_balls").val();
    // console.log(balls);

    let playground_div = $("#playground");
    // removing previous balls
    playground_div.empty();

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
});


// adding ball in the basket 
    $("#put-ball").on('click', function(){
        if($("#no_of_balls").val() > 0)
        {
            let basket = $("#basket");
            let ball = $("<div></div>");   

            // balls in playground
            let playground_balls = $("#playground .collect-ball");
            // taking properties such as color
            let ball_color = playground_balls.eq(playground_balls.length - 1).css("background-color");
            ball.css("background-color", ball_color);
            ball.addClass("collect-ball");
            // appending to basket
            basket.append(ball);
            // removing from background
            playground_balls[playground_balls.length-1].remove();

            $("#no_of_balls").val($("#no_of_balls").val() - 1);
        }else{
            alert("Oops!! Out of balls");
        }
    });
    

// empty basket
$('#empty-basket').on('click', function(){
    let basket = $("#basket");
    basket.empty();
});
    



