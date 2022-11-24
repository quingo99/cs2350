window.addEventListener("load", loadEventListener)
var timer;
var imgarray = new Array("HW9image/blue_sky_opt.jpg", "HW9image/gold_ice_opt.jpg", 
"HW9image/moraine_lake_opt.jpg", "HW9image/mountain_opt.jpg", "HW9image/ocean_opt.jpg",
"HW9image/worldmap_opt.jpg");
var picname = new Array("Name: ATMOSPHERE BLUE SKY", "Name: GOLD ICE",
 "Name: MORAINE LAKE CANVAS", "Name: MOUNTAIN VIEW", "Name: OCEAN TEXTURE",
 "Name: WORLD MAP CANVAS BLACK AND WHITE MARBLE");
var price = new Array("Price: 79.87$","Price: 74.97$", 
"Price: 134.97", "Price: 98.7$","Price: 82.47$", "Price: 125.89$");
var index = 0; 
function loadEventListener(){
    document.getElementById("previous").addEventListener("click", function(){
        if(index == 0){
            index = imgarray.length;
        }
        index--;
        document.getElementById("image").src=imgarray[index];
        document.getElementById("name").innerHTML= picname[index];
        document.getElementById("price").innerHTML = price[index];
    });
    document.getElementById("next").addEventListener("click", next);
    document.getElementById("play").addEventListener("click", play);
    document.getElementById("pause").addEventListener("click", function(){
        clearInterval(timer);
    })
}

function next(){
   
        if(index == imgarray.length-1){
            index =0;
        }
        index++;
        console.log(index)
        document.getElementById("image").src=imgarray[index];
        document.getElementById("name").innerHTML= picname[index];
        document.getElementById("price").innerHTML = price[index];
}
    
function play(){
    clearInterval(timer);
    timer = setInterval("next()", 2000);
}