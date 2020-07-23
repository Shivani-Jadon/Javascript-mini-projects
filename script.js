console.log("Welcome");

let ball_color = ['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick', 'crimson']

$("#button-container button").on('click', function(){
    let basket = $("#basket");
    let ball = $("<div></div>");
    

    // randomly selecting color for balls
    let color_no = Math.floor(Math.random()*ball_color.length);
    console.log(color_no);
    ball.css("background-color", ball_color[color_no]);
    ball.addClass("collect-ball");
    basket.append(ball);
})