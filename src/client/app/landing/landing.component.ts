import { Component, AfterViewInit } from '@angular/core';

declare var jQuery: any;
declare var WOW: any;


/**
 * This class represents the lazy loaded landingComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-landing',
  templateUrl: 'landing.component.html',
  styleUrls: ['landing.component.css']
})
export class LandingComponent implements AfterViewInit {


  ngAfterViewInit(): void {

    //------------------------------------//
    //Navbar//
    //------------------------------------//
    var menu = jQuery('.navbar');
    jQuery(window).bind('scroll', function (element: any) {
      if (jQuery(window).scrollTop() > 140) {
        if (!menu.hasClass('open')) {
          menu.addClass('open');
        }
      } else {
        if (menu.hasClass('open')) {
          menu.removeClass('open');
        }
      }
    });
    //------------------------------------//
    //Scroll To//
    //------------------------------------//
    jQuery('.scroll').click(function (event: any) {
      event.preventDefault();
      var page: any = jQuery('html,body');
      jQuery(page).animate({ scrollTop: jQuery(this.hash).offset().top }, 800);

    });
    //------------------------------------//
    //Wow Animation//
    //------------------------------------//

    var wow = new WOW(
      {
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0,          // distance to the element when triggering the animation (default is 0)
        mobile: false        // trigger animations on mobile devices (true is default)
      }
    );
    wow.init();

  }
}
