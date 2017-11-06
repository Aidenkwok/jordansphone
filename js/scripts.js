$(document).ready(function(){
  setInterval(function () {
      var date = new Date();
      var time = date.getHours() + ":" + date.getMinutes();
      if (
        date.getHours() === 09 ||
        date.getHours() === 10 ||
        date.getHours() === 11 ||
        date.getHours() === 12 ||
        date.getHours() === 13 ||
        date.getHours() === 14 ||
        date.getHours() === 15 ||
        date.getHours() === 16 ||
        date.getHours() === 17 ||
        date.getHours() === 18 ||
        date.getHours() === 19 ||
        date.getHours() === 20 ||
        date.getHours() === 21 ||
        date.getHours() === 22 ||
        date.getHours() === 23 ||
        date.getHours() === 00
    ) {
      $(".video").replaceWith(
        '<iframe src="https://www.youtube.com/embed/bfUBz0-jjg4?rel=0&amp;controls=0&amp;showinfo=0?rel=0&autoplay=1&loop=1" frameborder="0" allowfullscreen style="position: relative; height: 100%; width: 100%;"></iframe>'
      )
    }
  }, 3000)

});
