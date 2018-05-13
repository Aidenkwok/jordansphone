$(document).ready(function(){
  var date = new Date();
  var time = date.getHours();

  var iframe1 =  '<iframe src="https://www.youtube.com/embed/';
  var iframe2= '?rel=0&amp;controls=0&amp;showinfo=0?rel=0&autoplay=1&loop=1" frameborder="0" allowfullscreen style="position: relative; height: 100%; width: 100%;"></iframe>';


  setInterval(function () {
    if(time >= 0 && time <= 8  || time >= 23 ){
      $(".video").replaceWith(iframe1 + "3Qnu30n-7Hw" +iframe2);
      console.log(time + "sleep")

      // GOING FOR A RUN
    }else if(time >= 09 && time <= 10){
      $(".video").replaceWith(iframe1 + "eeruN0CeJhU" +iframe2);
      console.log(time + "going for a run")

    // MEETING CLIENT
    }else if(time >=11 && time <= 12){
        $(".video").replaceWith(iframe1 + "8PRPiIhqEQc" +iframe2);
        console.log(time + "meetin client")

      // WORKING
    }else if(time >=13 &&  time <=16){
        $(".video").replaceWith(iframe1 + "AxMMOD97ObU" + iframe2);
        console.log(time + "working")

    // NETWORKING
    }else if(time >=17 && time <= 19){
        $(".video").replaceWith(iframe1 + "-Vq_RwpMyA4" +iframe2);
        console.log(time + "networking")


      // YOUTUBE
    }else if(time >= 20 && time <= 22){
        $(".video").replaceWith(iframe1 + "QgLdftgg9Jw" +iframe2);
        console.log(time + "youtube")
      }



    }, 2000);

  });
