jQuery(document).ready(function($) {
  $(".container div#accordion:nth-child(2) .accordion-header").addClass("active-tab");
  $(".container div#accordion:nth-child(2) .accordion-body").addClass("active");
  $(".container div#accordion:nth-child(2) .accordion-header i").addClass("fa fa-minus"); 
  $(".container div#accordion .accordion-header i").addClass("fa fa-plus"); 
  
  
  $(".accordion-header").click(function(){
    $(".accordion-header").removeClass("active-tab");
    $(this).addClass("active-tab");
    
  if($(this).next("div").css("display") === 'none'){ 
      $(".container div#accordion .accordion-body").slideUp();
      $(".accordion-header").find("i").removeClass("fa-minus").addClass("fa-plus");
    
      $(this).next("div").slideDown();
      $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
  } else {
    $(this).removeClass("active-tab");
    $(this).next("div").slideUp();
    $(this).find("i").removeClass("fa-minus").addClass("fa-plus");
  };
  });
});