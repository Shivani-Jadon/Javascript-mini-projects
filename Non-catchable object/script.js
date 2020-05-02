let image = document.getElementById("image_cont");

image.addEventListener("mouseenter", function(){

    console.log("bunny");
    let img_top = image.offsetTop;
    let img_left = image.offsetLeft;

    let wide = window.innerWidth;
    let length = window.innerHeight;

    if((img_top <= length/2) && (img_left <= wide/2))
    {
        image.style.top = img_top + length/3 + "px";
        image.style.left = img_left + wide/4 + "px";
    }
    else if((img_top <= length/2) && (img_left >= wide/2))
    {
        image.style.top = img_top + length/3 + "px";
        image.style.left = img_left + wide/2 - "px";
    }
    else if((img_top >= length/2) && (img_left <= wide/2))
    {
        image.style.top = img_top - length/3 + "px";
        image.style.left = img_left + wide/3 + "px";
    }
    else if((img_top >= length/2) && (img_left >= wide/2))
    {
        image.style.top = img_top - length/4 + "px";
        image.style.left = img_left - wide/8 + "px";
    }

});