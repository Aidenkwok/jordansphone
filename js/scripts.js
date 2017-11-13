$(document).ready(function(){
  var date = new Date();
  var time = date.getHours() + ":" + date.getMinutes();
  var iframe1 =  '<iframe src="https://www.youtube.com/embed/';
  var iframe2= '?rel=0&amp;controls=0&amp;showinfo=0?rel=0&autoplay=1&loop=1" frameborder="0" allowfullscreen style="position: relative; height: 100%; width: 100%;"></iframe>';

  setInterval(function () {


      //YOUTUBE
      if (date.getHours() === 0) {
        $(".video").replaceWith(iframe1 + "uM5CjB5QZ8s" +iframe2);

      // ABOUT TO GO TO SLEEP
      }else if(date.getHours() < 0 && date.getHours() >2  ){
        $(".video").replaceWith(iframe1 + "PlJnqCtDqO8" +iframe2);


      // SLEEP
    }else if(date.getHours() > 1 && date.getHours() < 8 ){
      $(".video").replaceWith(iframe1 + "kRUH9dphNmI" +iframe2);


      // CHECKING SOCIAL MEDIA
    }else if(date.getHours() === 08){
      $(".video").replaceWith(iframe1 + "k-XpvvJC9FU" +iframe2);


      // AVALIBLE
    }else if(date.getHours() >8 &&  date.getHours() <13 ||  date.getHours() >13 && date.getHours() <18){
        $(".video").replaceWith(iframe1 + "lEzgTp7GNz0" + iframe2);

      // LUNCH
    }else if(date.getHours() === 13){
        $(".video").replaceWith(iframe1 + "_OXwJ2qhSTQ" +iframe2);

      // DO NO DISTURB
    }else if(date.getHours() >17 && date.getHours() < 20 || date.getHours() >20 && date.getHours() < 24){
        $(".video").replaceWith(iframe1 + "ZpIN7ENkn_Y" +iframe2);

      // DINNER
    }else if(date.getHours() === 20){
      $(".video").replaceWith(iframe1 + "7gn6OR2e-iY" +iframe2);
      }
    }, 2000);

  });
