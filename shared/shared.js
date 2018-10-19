(function($) {
'use strict';

/**
 * All of the code for your admin-facing JavaScript source
 * should reside in this file.
 *
 * Note: It has been assumed you will write jQuery code here, so the
 * $ function reference has been prepared for usage within the scope
 * of this function.
 *
 * This enables you to define handlers, for when the DOM is ready:
 *
 * $(function() {
 *
 * });
 *
 * When the window is loaded:
 *
 * $( window ).load(function() {
 *
 * });
 *
 * ...and/or other possibilities.
 *
 * Ideally, it is not considered best practise to attach more than a
 * single DOM-ready or window-load handler for a particular page.
 * Although scripts in the WordPress core, Plugins and Themes may be
 * practising this, we should strive to set a better example in our own work.
 */

$(() => {

	$(window).load(function() {
		// console.log('toggle loaded');
		$('.vl-accordion-theme-neptune input[type="checkbox"]').click(function(e) {
			// e.preventDefault();

			function accordionUpDown(ele, transformHeight, condition, eleHeight) {
				// console.log('lol');
				if (condition) {
					ele.css('transform', 'translateY(' + transformHeight + 'px)');
					if (eleHeight) {
						ele.parent().css('height', eleHeight);
						ele.css('margin-bottom', transformHeight);
					}
				} else {
					ele.css('transform', 'translateY(0)');
				}
			}

			//Get this element
			const el = $(this);

			// get checked status
			const checked = el.prop('checked');
			// console.log('checked', checked);

			// Get title wrapper, title, content wrapper, content elements
			const toggleTitle = el.parent().find('.vl-accordion__content-toggle__title');
			const toggleTitleChild = el.parent().find('.vl-accordion__content-toggle__title').children('p,ul,h1,h2,h3,h4,h5,h6');
			const toggleContentChild = el.parent().find('.vl-accordion__content-toggle__content').children('p,ul,h1,h2,h3,h4,h5,h6');
			const toggleContent = el.parent().find('.vl-accordion__content-toggle__content');

			// console.log('toggleTitle', toggleTitle);
			// console.log('toggleContent', toggleContent);

			// get wrapper heights
			const accordionTitleHeigth = parseInt(toggleTitle.css('height'));
			toggleTitle.css('height', accordionTitleHeigth);

			const accordionContentHeigth = parseInt(toggleContentChild.css('height'));
			toggleContent.css('height', accordionContentHeigth);

			accordionUpDown(toggleTitleChild, accordionTitleHeigth, checked);
			accordionUpDown(toggleContentChild, accordionTitleHeigth, checked, accordionTitleHeigth * 2 + accordionContentHeigth);

			// console.log('accordionTitleHeigth', accordionTitleHeigth);
			// console.log('accordionContentHeigth', accordionContentHeigth);

		})
	});


});



})(jQuery);
