// Show the first tab and hide the rest
$('#tabs-menu li:first-child').addClass('active');
$('.content-main-tab').hide();
$('.content-main-tab:first').show();

// Click function
$('#tabs-menu li').click(function(){
  $('#tabs-menu li').removeClass('active');
  $(this).addClass('active');
  $('.content-main-tab').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});




// $("#tabs-menu li").click(function(event) {
//   event.preventDefault();
//   $(this).addClass("active");
//   $(this).siblings().removeClass("active");
//   var tab = $(this).attr("href");
//   $(".content-main-tab").not(tab).css("display", "none");
//   $(tab).fadeIn();
// });



