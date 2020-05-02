let displace = 20;

document.addEventListener("keypress", move_ball);

function move_ball(event)
{
    let move = document.getElementById("ball");
    let ball_top = move.offsetTop;
    let ball_left = move.offsetLeft;
    let ball_width = move.offsetWidth;
    let ball_height = move.offsetHeight;

    //when w is pressed
    if((event.keyCode == 119 || event.keyCode == 87) && ball_top > screen.availTop)
    {
        console.log(event.keyCode);
        if(ball_top >= 20)
        {
            document.getElementById("ball").style.top  = (ball_top - 20)+"px";
        }else{
            document.getElementById("ball").style.top  = (0)+"px";
        }
        
    }

    //when s is pressed
    else if((event.keyCode == 115 || event.keyCode == 83) && (ball_height + ball_top)  < window.innerHeight)
    {
        console.log(event.keyCode);

        if(window.innerHeight - (ball_height + ball_top) >= 20)
        {
            document.getElementById("ball").style.top  = (ball_top + 20)+"px";
            
        }else{
            document.getElementById("ball").style.top  = (ball_top + (window.innerHeight - (ball_height + ball_top))) +"px";
        }
       
    }

    //when a is pressed
    else if((event.keyCode == 97 || event.keyCode == 65) && ball_left > screen.availLeft)
    {
        console.log(event.keyCode);

        if(ball_left >= 20)
        {
            document.getElementById("ball").style.left  = (ball_left - 20)+"px";
        }else{
            document.getElementById("ball").style.left  = (0)+"px";
        } 
    }

    //when d is pressed
    else if((event.keyCode == 100 || event.keyCode == 68) && (ball_width + ball_left) < window.innerWidth)
    {
        console.log(event.keyCode);

        if(window.innerWidth - (ball_width + ball_left) >= 20)
        {
            document.getElementById("ball").style.left  = (ball_left + 20)+"px";
        }else{

            document.getElementById("ball").style.left  = (ball_left + (window.innerWidth - (ball_width + ball_left))) +"px";
        }
     
    }
}

