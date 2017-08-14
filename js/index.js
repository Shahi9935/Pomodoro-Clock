var ss=25;
var bk=5;
var flag=0;
var sss=25*60*1000;
var radius=0;
var bbb=5*60000;
var current=1;
$(".add-session").on("click",function()
                    {
  
  ss++;
  sss=ss*60*1000;
  $(".ssdisp").html(ss);
  $(".myp").html(ss);
});
$(".sub-session").on("click",function()
                    {
  if(ss>1)
  {ss--;
  sss=ss*60*1000;
  }
  $(".ssdisp").html(ss);
  $(".myp").html(ss);
});
$(".add-break").on("click",function()
                    {
  bk++;
  bbb=bk*60000;
  $(".bkdisp").html(bk);
});
$(".sub-break").on("click",function()
                    {
  if(bk>1)
  bk--;
  bbb=bk*60000;
  $(".bkdisp").html(bk);
});
$(".mymain").on("click",function()
                {

  
  if(flag==0)
    {
      if(current==1)
    startsession();
      else
        startbreak();
    }
  else if(flag==1)
    {
      flag=0;
    }
});
function startbreak()
{
  $(".add-break").prop("disabled",true);
  $(".sub-break").prop("disabled",true);
  
      flag=1;
     var distance=bbb;
      var mnew=bk*60;
      mnew=200/mnew;
      
      var x = setInterval(function() {
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        $(".mymain").css("border-color","red");
        $(".mymain").css("border-width",3);
        $(".mymain").css("border-style","solid");
        
        $(".filler-red").css("width",radius);
        $(".filler-red").css("height",radius);
    radius+=mnew; 
    distance-=1000;
        if(flag==0)
          {
            clearInterval(x);
            bbb=distance;
          }
        if(hours>0)
    $(".myp").html(hours + "h "
    + minutes + "m " + seconds + "s ");
        else
        $(".myp").html(minutes + "m " + seconds + "s ");
     if (distance < 0) {
       var wav = 'https://dl.dropboxusercontent.com/s/3ikiysuxrsacajv/no.mp3?dl=0';
      var audio = new Audio(wav);
			audio.play();
       bbb=bk*60000;
       radius=0;
       $(".filler-red").css("width",0);
        $(".filler-red").css("height",0);
       current=1;
        clearInterval(x);
       $(".add-break").prop("disabled",false);
  $(".sub-break").prop("disabled",false);
        startsession();
    }
}, 1000);
  
  
}

function startsession()
{
  
  
      flag=1;
     var distance=sss;
      var mnew=ss*60;
      mnew=200/mnew;
      $(".add-session").prop("disabled",true);
  $(".sub-session").prop("disabled",true);
      var x = setInterval(function() {
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        $(".mymain").css("border-color","chartreuse");
        $(".mymain").css("border-width",3);
        $(".mymain").css("border-style","solid");
        
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        
        $(".filler-green").css("width",radius);
        $(".filler-green").css("height",radius);
    radius+=mnew; 
    distance-=1000;
        if(flag==0)
          {
            clearInterval(x);
            sss=distance;
          }
        if(hours>0)
    $(".myp").html(hours + "h "
    + minutes + "m " + seconds + "s ");
        else
        $(".myp").html(minutes + "m " + seconds + "s ");
     if (distance < 0) {
       
          var wav = 'https://dl.dropboxusercontent.com/s/3ikiysuxrsacajv/no.mp3?dl=0';
      var audio = new Audio(wav);
			audio.play();
       
      
       sss=ss*60000;
       radius=0;
       current=2;
       $(".filler-green").css("width",0);
        $(".filler-green").css("height",0);
        clearInterval(x);
       $(".add-session").prop("disabled",false);
  $(".sub-session").prop("disabled",false);
        startbreak();
    }
}, 1000);
  
}
$(".myreset").on("click",function()
                {
  ss=25;
  bk=5;
  sss=25*60*1000;
  bbb=5*60000;
  $(".ssdisp").html(ss);
  $(".bkdisp").html(bk);
  $(".myp").html(ss);
  flag=0;
  current=1;
  radius=0;
  $(".filler-green").css("width",radius);
        $(".filler-green").css("height",radius);
  $(".filler-red").css("width",radius);
        $(".filler-red").css("height",radius);
  $(".add-break").prop("disabled",false);
  $(".sub-break").prop("disabled",false);
  $(".add-session").prop("disabled",false);
  $(".sub-session").prop("disabled",false);
   
        $(".mymain").css("border-color","chartreuse");
        $(".mymain").css("border-width",3);
        $(".mymain").css("border-style","solid");
                 });