let blue, red, green;

setInterval(function(){
    red = Math.floor(Math.random() * 255)
    green = Math.floor(Math.random() * 255)
    blue = Math.floor(Math.random() * 255)



    document.body.style.background = 'rgb('+ red + ',' + green + ',' + blue + ')'
},1000)