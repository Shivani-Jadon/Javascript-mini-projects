$("#button-container button").on('click', function(){
    let basket = $("#basket");
    let ball = $("<div></div>");
    ball.className("collect-ball");
    basket.append(ball);
})