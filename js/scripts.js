$(document).ready(function(){
  setInterval(function () {
      var date = new Date();
      var time = date.getHours() + ":" + date.getMinutes();

      if (date.getHours() === 16
      // && date.getMinutes() === 30
    ) {
      $(".video").replaceWith(
        '<iframe src="https://www.youtube.com/embed/bfUBz0-jjg4?rel=0&amp;controls=0&amp;showinfo=0?rel=0&autoplay=1&loop=1" frameborder="0" allowfullscreen style="position: relative; height: 100%; width: 100%;"></iframe>'
      )
    }
  }, 3000)

});
