function story(){
    var house, place, food, drink, car, idol, company, image;
    house = document.getElementById("house").value;
    place = document.getElementById("place").value;
    food = document.getElementById("food").value;
    drink = document.getElementById("drink").value;
    car = document.getElementById("car").value;
    idol = document.getElementById("idol").value;
    company = document.getElementById("company").value;

    document.getElementById("background").innerHTML= "Background: "
    document.getElementById("firstStory").innerHTML=
    "I grew up in a working class family. When I was 20 year old. " +
    "Once time, I bought a lottery ticket and won 200 millions dollar. And I won 7 times in a row "+
    " I suddenly become a billionair. " + "When I was a kid I would love to work in <span>"+ company +
    "</span>. As a result, I bought this company to become CEO. " +
     "I love to travel to <span>" + place +"</span>. So I bought entire this area and build <span>"+ house
     + "</span> for myself";

     document.getElementById("daily").innerHTML="Daily Routine: "
     document.getElementById("secondStory").innerHTML ="I woke up at 9 a.m. I drive <span>"+
     car+"</span> to <span>"+ idol + "</span> house to have breakfast. And then, we play golf together. "
     + " After that, I drive to my company to have a meeting. " +
      "At night, I would like to spend time alone. I drink <span>"
      + drink+ "</span> and eat <span>" + food +"</span>";
      document.getElementById("wakeUp").innerHTML=
      "The alarm suddenly ring, and I realize that is just a dream. :(";
}
