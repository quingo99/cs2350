$(document).ready(function(){

    $('#flag').click(function(){
       
        $('h2').fadeOut();

        $('.france').animate({
            height: '0px',
            width: '0px',
            top: '20px',
            left: '1500px'
        }, function(){
            $(this).show();
        });
        $('.germany').animate({
            height: '0px',
            width: '0px',
            top: '20px',
            right: '1500px'
        }, function(){
            $(this).show();
        });
        $('.brazil').animate({
            height: '0px',
            width: '0px',
            top: '20px',
            left: '1500px'
        }, function(){
            $(this).show();
        });
        $('.argentina').animate({
            height: '0px',
            width: '0px',
            top: '20px',
            right: '1500px'
        }, function(){
            $(this).show();
        });

        $('.australia').animate({
            height: '0px',
            width: '0px',
            bottom: '20px',
            left: '1500px'
        }, function(){
            $(this).show();
        });

        $('.america').animate({
            height: '0px',
            width: '0px',
            bottom: '20px',
            right: '1500px'
        }, function(){
            $(this).show();
        });
        $('.cup').animate({
            height: '0px',
            width: '0px',
            top: '0px',
            left: '650px'
        }, function(){
            $(this).show();
        });
  
        $('.france').delay(1000).animate({
            height: '150px',
            width: '275px',
            top: '265px',
            left:'300px'
        }
         , 500, 'linear', function(){
            $(this).delay(7000).hide(1000);
        });
        $('.germany').delay(2000).animate({
            height: '150px',
            width: '275px',
            top: '265px',
            right:'300px'
        }
         , 500, 'linear', function(){
            $(this).delay(7400).hide(1000);
        });
        $('.brazil').delay(3000).animate({
            height: '240px',
            width: '275px',
            top: '400px',
            left:'300px'
        }
         , 500, 'linear', function(){
            $(this).delay(7900).hide(1000);
        });
        $('.argentina').delay(4000).animate({
            height: '150px',
            width: '275px',
            top: '415px',
            right:'300px'
        }
         , 500, 'linear', function(){
            $(this).delay(8300).hide(1000);
        });
        $('.australia').delay(5000).animate({
            height: '150px',
            width: '275px',
            bottom: '40px',
            left:'300px'
        }
         , 500, 'linear', function(){
            $(this).delay(8700).hide(1000);
        });
        $('.america').delay(6000).animate({
            height: '150px',
            width: '275px',
            bottom: '40px',
            right:'300px'
        }
         , 500, 'linear', function(){
            $(this).delay(9100).hide(1000);
        });
        $('.cup').animate({
            height: '368px',
            width: '329px',
            left: '600px',
            top:'300px'
        }
         , 700, 'linear', function(){
            $(this).delay(15500).fadeOut(1000);
        });
        $('h2').delay(17000).fadeIn(500);

        /*
        $('.germany').animate({
            height: '100px',
            width: '250px',
            top: '0px',
            right:'0px'
        }
         , 700, 'linear', function(){
            //$(this).hide();
        });
        /*  $('.cup').animate({
            height: '350px',
            width: '1000px',
        }
         , 700, 'linear', function(){
            //$(this).hide();
        });*/

    })
})
