jQuery(document).ready(function($) {
  $(".email").focusin(function() {
    $('.submit').delay(500).addClass('focus').slideDown(250);
  });
  $('#mc-signup').ajaxChimp({
    url: 'http://getbsides.us3.list-manage1.com/subscribe/post?u=dddd8c2c3cb858b05fb634b1f&amp;id=e92dfb66e6',
    callback: function callbackFunction (resp) {
      if (resp.result === 'success') {
        $(".alert-success").slideDown();
      }
      else {
        $(".alert-failure").slideDown();
      }
    }
  });
});   
