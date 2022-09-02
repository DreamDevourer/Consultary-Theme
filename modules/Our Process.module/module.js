// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.process-tab-image').hide();
$('.process-tab-image:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.process-tab-image').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});