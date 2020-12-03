$(document).ready(function () {
  // $(".nav-tabs a").click(function () {
  //   $(this).tab('show');
  // });
  $('#sidebarCollapse').on('click', function () {
    $('.sidenav').toggleClass('active');
  });
});