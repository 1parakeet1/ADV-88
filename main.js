var canvas = new fabric.Canvas("myCanvas");

player_x= 10;
player_y= 10;

block_image_height= 30 ;
block_image_width= 30;

var player_object= "";
var block_image_object= "";

function player_image (){
    fabric.Image.fromURL("player.png", function (Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);

        player_object.set({
            top:player_x,
            left:player_y
        });
    canvas.add(player_object);
    });

}

function block_image (get_image){
    fabric.Image.fromURL(get_image, function (Img){
        block_object=Img;
        block_object.scaleToWidth(block_image_height);
        block_object.scaleToHeight(block_image_width);

        block_object.set({
            top:player_x,
            left:player_y
        });
    canvas.add(block_object);
    });

}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed)
    
    if( e.shiftKey == true && keyPressed == '80' )
    {
        block_image_height = block_image_height + 10;
        block_image_width = block_image_width + 10;
        document.getElementById('sp1').innerHTML = block_image_width;
        document.getElementById('sp2').innerHTML = block_image_height;
    }

    if( e.shiftKey == true && keyPressed == '77' )
    {
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        document.getElementById('sp1').innerHTML = block_image_width;
        document.getElementById('sp2').innerHTML = block_image_height;
    }

    if(keyPressed == '38'){
        up();
    }

    if(keyPressed == '40'){
        down();
    }

    if(keyPressed == '37'){
        left();
    }

    if(keyPressed == '39'){
        right();
    }

    if(keyPressed == '84'){
      block_image("trunk.jpg");  
    }

    if(keyPressed == '68'){
        block_image("dark_green.png");}

        if(keyPressed == '76'){
            block_image("light_green.png");}

            if(keyPressed == '71'){
                block_image("ground.png");    }
                
                if(keyPressed == '87'){
                    block_image("wall.jpg");    }

                    if(keyPressed == '89'){
                        block_image("yellow_wall.png");    }

                        if(keyPressed == '82'){
                            block_image("roof.jpg");    }

                            if(keyPressed == '67'){
                                block_image("cloud.jpg");    }

                                if(keyPressed == '85'){
                                    block_image("unique.png");    }
  
}


function up(){
    if(player_y >=0){
        player_y = player_y - block_image_height;
        console.log("up")
        canvas.remove(player_object);
        player_image();
    }
}

function down(){
    if(player_y <=450){
        player_y = player_y + block_image_height;
        console.log("down")
        canvas.remove(player_object);
        player_image();
    }
}

function left(){
    if(player_x >=0){
        player_x = player_x - block_image_width;
        console.log("left")
        canvas.remove(player_object);
        player_image();
    }
}

function right(){
    if(player_x <=850){
        player_x = player_x + block_image_width;
        console.log("right")
        canvas.remove(player_object);
        player_image();
    }
}