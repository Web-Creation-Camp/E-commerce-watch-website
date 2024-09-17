

// watch1
$(".img-border3").hide();
$(".img-border2").hide();
$(".img-border1").show();


$(".rolex3").hide();
$(".rolex2").hide();
$(".rolex1").show();

$('.color1').click(function(){
    $(".img-border3").hide();
    $(".img-border2").hide();
    $(".img-border1").show();

    $(".rolex3").hide();
    $(".rolex2").hide();
    $(".rolex1").show(400);
})




$('.color2').click(function(){
    $(".img-border3").hide();
    $(".img-border1").hide();
    $(".img-border2").show();

    $(".rolex3").hide();
    $(".rolex1").hide();
    $(".rolex2").show(400);
})



$('.color3').click(function(){
    $(".img-border2").hide();
    $(".img-border1").hide();
    $(".img-border3").show();

    $(".rolex2").hide();
    $(".rolex1").hide();
    $(".rolex3").show(400);
})

// watch1




// watch 2////////////////////////////

$(".om-border3").hide();
$(".om-border2").hide();
$(".om-border1").show();


$(".omaega3").hide();
$(".omaega2").hide();
$(".omaega1").show();



$('.om-color1').click(function(){
    $(".om-border3").hide();
    $(".om-border2").hide();
    $(".om-border1").show();

    $(".omaega3").hide();
    $(".omaega2").hide();
    $(".omaega1").show(400);
})




$('.om-color2').click(function(){
    $(".om-border3").hide();
    $(".om-border1").hide();
    $(".om-border2").show();

    $(".omaega3").hide();
    $(".omaega1").hide();
    $(".omaega2").show(400);
})



$('.om-color3').click(function(){
    $(".om-border2").hide();
    $(".om-border1").hiomaega
    $(".om-border3").show();

    $(".omaega2").hide();
    $(".omaega1").hide();
    $(".omaega3").show(400);
})



// watch 3////////////////////////////


$(".tu-border3").hide();
$(".tu-border2").hide();
$(".tu-border1").show();


$(".tudor3").hide();
$(".tudor2").hide();
$(".tudor1").show();



$('.tu-color1').click(function(){
    $(".tu-border3").hide();
    $(".tu-border2").hide();
    $(".tu-border1").show();

    $(".tudor3").hide();
    $(".tudor2").hide();
    $(".tudor1").show(400);
})


$('.tu-color2').click(function(){
    $(".tu-border3").hide();
    $(".tu-border1").hide();
    $(".tu-border2").show();

    $(".tudor3").hide();
    $(".tudor1").hide();
    $(".tudor2").show(400);
})



$('.tu-color3').click(function(){
    $(".tu-border2").hide();
    $(".tu-border1").hide();
    $(".tu-border3").show();

    $(".tudor2").hide();
    $(".tudor1").hide();
    $(".tudor3").show(400);
})


// watch 4  ////////////////////////////


$(".ak-border3").hide();
$(".ak-border2").hide();
$(".ak-border1").show();


$(".akrivia3").hide();
$(".akrivia2").hide();
$(".akrivia1").show();



$('.ak-color1').click(function(){
    $(".ak-border3").hide();
    $(".ak-border2").hide();
    $(".ak-border1").show();

    $(".akrivia3").hide();
    $(".akrivia2").hide();
    $(".akrivia1").show(400);
})


$('.ak-color2').click(function(){
    $(".ak-border3").hide();
    $(".ak-border1").hide();
    $(".ak-border2").show();

    $(".akrivia3").hide();
    $(".akrivia1").hide();
    $(".akrivia2").show(400);
})



$('.ak-color3').click(function(){
    $(".ak-border2").hide();
    $(".ak-border1").hide();
    $(".ak-border3").show();

    $(".akrivia2").hide();
    $(".akrivia1").hide();
    $(".akrivia3").show(400);
})



// scrolling animatin0


function revealFunction(){
    window.sr = ScrollReveal({

     duration:1350,
     distance:'250px',
     easing:'ease-out',
  

    });

//   note
    // sr.reveal('.watches',{scale:1.2, interval:300, reset:true});
  
    // sr.reveal('.contact-text',{origin:'bottom', rotate:{x:1000,z:-1000},reset:false});

    // sr.reveal('.contact-input',{origin:'bottom', rotate:{x:1000,z:1000}, reset:false});

// note


    sr.reveal('.watches',{origin:'bottom', reset:false});
    sr.reveal('.contact-text',{origin:'top', reset:false, interval:0 , scale:0.9, distance:'150px' });
    sr.reveal('.contact-input',{origin:'bottom', reset:false, interval:0 , scale:0.9, distance:'150px'});
  

};




window.addEventListener('load',()=>{
    revealFunction();
})