
  //for kiosk image sliding
  setTimeout(function() {
    $(".media-object1").animate({left:'500px'});
  },900);
  //for kiosk heading
  setTimeout(function() {
    $("#menu1").animate({left:'-700px'});
  },900);
  // for faq collapse
  $(function() {
  $(".expand").on( "click", function() {
    $(this).next().slideToggle(200);
    $expand = $(this).find(">:first-child");
    if($expand.text() == "+") {
      $expand.text("-");
    } else {
      $expand.text("+");
    }
  });
});

//for part1 sliding
setTimeout(function() {
  $("#part1").animate({left:'700px'});
},900);
//for part-2 heading
setTimeout(function() {
  $("#part2").animate({left:'-1020px'});
},900);

//for part1
function myFunction1() {
  //var x = document.getElementById('myDIV4');
  if (document.getElementById("myDIV1").style.display === 'none') {
      document.getElementById("myDIV1").style.display = 'block';
      document.getElementById("myDIV2").style.display = 'none';
      document.getElementById("myDIV3").style.display = 'none';
      document.getElementById("myDIV").style.display = 'none';
    } else {
      document.getElementById("myDIV1").style.display = 'none';
  }
}
function myFunction2() {
  //var x = document.getElementById('myDIV4');
  if (document.getElementById("myDIV2").style.display === 'none') {
      document.getElementById("myDIV2").style.display = 'block';
      document.getElementById("myDIV1").style.display = 'none';
      document.getElementById("myDIV3").style.display = 'none';
      document.getElementById("myDIV").style.display = 'none';
    } else {
      document.getElementById("myDIV2").style.display = 'none';
  }
}
function myFunction3() {
  //var x = document.getElementById('myDIV4');
  if (document.getElementById("myDIV3").style.display === 'none') {
      document.getElementById("myDIV3").style.display = 'block';
      document.getElementById("myDIV1").style.display = 'none';
      document.getElementById("myDIV2").style.display = 'none';
      document.getElementById("myDIV").style.display = 'none';
    } else {
      document.getElementById("myDIV3").style.display = 'none';
  }
}
function myFunction4() {
  document.getElementById("myDIV").style.display = 'block';
  document.getElementById("myDIV1").style.display = 'none';
}
function myFunction5() {
  document.getElementById("myDIV").style.display = 'block';
  document.getElementById("myDIV2").style.display = 'none';
}
function myFunction6() {
  document.getElementById("myDIV").style.display = 'block';
  document.getElementById("myDIV3").style.display = 'none';
}

//Start of Tawk.to Script
//<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/596c2a611dc79b329518e9fe/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
//</script>
//End of Tawk.to Script
