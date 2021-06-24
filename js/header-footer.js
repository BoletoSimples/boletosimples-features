import './validation';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

$(function() {
  /* Login Dropdown */

  $(".login-trigger").on('click', function(e) {
    e.preventDefault();
    $("#main-header nav .menu-menu").hide();
    $(".header-form").show();
    if(!$("#login_email").val()) { $("#login_email").focus(); }
    else { $("#login_password").focus(); }
  });

  $(".signup-trigger").on('click', function(e) {
    e.preventDefault();
    $("#main-header nav .menu-menu").hide();
    $(".header-form").show();
    if(!$("#signup_email").val()) { $("#signup_email").focus(); }
  });

  $(".back-arrow").on('click', function(e) {
    $(".header-form").hide();
    $("#main-header nav .menu-menu").show();
    e.preventDefault();
  });


  /* Mobile Nav */

  $("#menu-trigger").on('click', function() {
    $("#main-header nav .menu-menu").toggle();
    $(".header-form").hide();
  });

});