$(window).load( function(){
  function preload(imageArray, index) {
          index = index || 0;
          if (imageArray && imageArray.length > index) {
              // var img = new Image ();
              img = images[index];
              img.onload = function() {
                  preload(imageArray, index + 1);
              }
              img.src = images[index]["url"];
            };
  };



    function preload_slider() {
        var re = document.getElementById("ourcount");



        console.log($(window).width());
        if($(window).width() <= 370) {
          re.style.backgroundImage = "url(images/slider_mobile.jpg)";
        }
        else{
          re.style.backgroundImage = "url(images/slider1_trimmed.jpg)";
        }

        re.style.backgroundAttachment = "fixed";
        re.style.backgroundSize = "cover";
    };



  images = new Array();

  for (i = 0; i < 18; i++){
    if (i==4){
      preload_slider();
      continue;
    }
    var name = "preload"+(i);
    var img = document.getElementById(name);
    if (img){
      if(i<14){
        img["url"] = "images/"+ name +".jpg";
      }
      else{
        img["url"] = "images/"+ name +".png";
      }
      images.push(img);
    }
  }

  preload(images);

});
