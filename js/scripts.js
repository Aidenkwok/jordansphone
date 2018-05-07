$(document).ready(function(){
  var date = new Date();
  var time = date.getHours() + ":" + date.getMinutes();
  var iframe1 =  '<iframe src="https://www.youtube.com/embed/';
  var iframe2= '?rel=0&amp;controls=0&amp;showinfo=0?rel=0&autoplay=1&loop=1" frameborder="0" allowfullscreen style="position: relative; height: 100%; width: 100%;"></iframe>';

  setInterval(function () {
    if(date.getHours() < 0 && date.getHours() < 8  || date.getHours() > 23 ){
      $(".video").replaceWith(iframe1 + "3Qnu30n-7Hw" +iframe2);
      // GOING FOR A RUN
    }else if(date.getHours() > 08 && date.getHours() < 11){
      $(".video").replaceWith(iframe1 + "eeruN0CeJhU" +iframe2);
      // WORKING
    }else if(date.getHours() >11 &&  date.getHours() <15){
        $(".video").replaceWith(iframe1 + "AxMMOD97ObU" + iframe2);
      // MEETING CLIENT
    }else if(date.getHours() === 15){
        $(".video").replaceWith(iframe1 + "8PRPiIhqEQc" +iframe2);
      // YOUTUBE
    }else if(date.getHours() >17 && date.getHours() < 19){
        $(".video").replaceWith(iframe1 + "QgLdftgg9Jw" +iframe2);
      // NETWORKING
    }else if(date.getHours() >19 && date.getHours() < 23){
      $(".video").replaceWith(iframe1 + "-Vq_RwpMyA4" +iframe2);
      }
    }, 2000);

  });
