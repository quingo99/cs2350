window.addEventListener("load", addListeners)

function addListeners(){
    document.getElementById("program").addEventListener("change", function(event){
        if(document.getElementById(event.target.id).checked){
            
            feeCalculate();
        }
        var dates = document.getElementById("dates").value;
        var datesFee = 0;
        var total;
        if(isNaN(dates)){
            document.getElementById("livingCost").value = "0.00";
            document.getElementById("dates").value=0;
        }
        else if(dates == 0){
            document.getElementById("livingCost").value = "0.00";
        }
        else{
            if((document.getElementById("country1").checked)){
                datesFee = 16;
            }
            else if((document.getElementById("country2").checked)){
                datesFee = 41;
            }
            else if((document.getElementById("country3").checked)){
                datesFee = 31;
            }
            else if(document.getElementById("country4").checked){
                datesFee = 38;
            }
            else if(document.getElementById("country5").checked){
                datesFee= 48;
            }
            else if((document.getElementById("country6").checked)){
                datesFee = 56;
            }

            if(datesFee == 0){
                document.getElementById("livingCost").value = "0.00";
            }
            else{
                dates = parseInt(dates)
                total = dates * datesFee;
                document.getElementById("livingCost").value = total;
        }
        }
        feeCalculate();
    })
    document.getElementById("insuranceInfo").addEventListener("change", function(event)
    {
        if(document.getElementById(event.target.id).checked){
            
            feeCalculate();
        }
        else{
            feeCalculate();
        }
        
    })
    document.getElementById("insurance").addEventListener("change", function(){
        if(document.getElementById("insurance").checked){
            document.getElementById("insuranceInfo").style.display="block";
           

        }
        else{
            document.getElementById("insuranceInfo").style.display="none";
            document.getElementById("protection").checked = false;
            document.getElementById("medical").checked = false;
            document.getElementById("evacuation").checked = false;
            document.getElementById("gearProtect").checked = false;
            feeCalculate();
        }
    })
    
}
function feeCalculate(){
    var flightFee = 0;
    var insuranceFee = 0;
    var livingfee = 0;
    var tax =0;
    var subtotal =0;
    if((document.getElementById("country1").checked)){
        flightFee = 1300;
    }
    else if((document.getElementById("country2").checked)){
        flightFee = 2200;
    }
    else if((document.getElementById("country3").checked)){
        flightFee = 2142;
    }
    else if(document.getElementById("country4").checked){
        flightFee = 1386;
    }
    else if(document.getElementById("country5").checked){
        flightFee= 1973;
    }
    else if((document.getElementById("country6").checked)){
        flightFee = 1359;
    }

    if((document.getElementById("protection").checked)){
        insuranceFee = insuranceFee + 249.99;
    }
   
    if((document.getElementById("medical").checked)){
        insuranceFee = insuranceFee + 199.99;
    }
    
    if((document.getElementById("evacuation").checked)){
        insuranceFee = insuranceFee +  59.99;
    }
    
    if(document.getElementById("gearProtect").checked){
        insuranceFee = insuranceFee + 149.99;
    }

   
    livingfee = document.getElementById("livingCost").value;
    livingfee = parseFloat(livingfee)
    insuranceFee = parseFloat(insuranceFee)
    flightFee = parseFloat(flightFee)
    subtotal = livingfee + insuranceFee + flightFee;
    tax = subtotal * 0.08
    total = subtotal + tax;

    document.getElementById("insuranceCost").value = insuranceFee;
    document.getElementById("ticketCost").value = flightFee;
    document.getElementById("livingFee").value = livingfee;
    document.getElementById("tax").value = tax.toFixed(2);
   document.getElementById("total").value = total.toFixed(2);
}