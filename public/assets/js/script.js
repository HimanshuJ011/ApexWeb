(function ($) {
	"use strict";
	var Solar = {
		initialised: false,
		version: 1.0,
		Solar: false,
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}

			// Functions Calling
			
			this.blog_slider();
			this.testimonial_slider();
			this.ss_click();
			this.ss_toggle();
			this.ss_checkout();
			this.ss_subMenu();
			this.ss_checkout_two();
			this.ss_checkout_three();
			this.Video_popup();
			this.s_graph();
			this.counter();
			this.counter_two();
			this.product();
		},
			// --------team----------
			testimonial_slider: function () {
				var swiper = new Swiper('.ss_testimonial .swiper-container', {
					slidesPerView: 1,
					spaceBetween: 30,
					autoplay:true,
					speed: 1000,
					autoplay: {
						delay: 2000,
					},
					loop:true,
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					  },
				});
			},
			
			// --------menu bar----------
			ss_toggle: function () {
				$(".ss_menu_bar").on('click', function() {
					$(".ss_menu").toggleClass('ss_toggle');
				});
			},
			// --------checkout bar----------
			ss_checkout: function () {
				$(".show_c_one").on('click', function(e) {
					 e.preventDefault();
					$(".show_cart_one").addClass("show_checkout_page");
				});  
			},
			// --------checkout bar----------
			ss_checkout_two: function () {
				$(".show_c_two").on('click', function(e) {
					 e.preventDefault();
					$(".show_cart_two").addClass("show_checkout_page");
				});  
			},
			// --------checkout bar----------
			ss_checkout_three: function () {
				$(".show_c_three").on('click', function(e) {
					 e.preventDefault();
					$(".show_cart_three").addClass("show_checkout_page");
				});  
			},
			// --------checkout bar----------
			ss_subMenu: function () {
				$(".ss_menuP").on('click', function() {
					$(this).toggleClass("show_subMenu");
				});  
			},
			// ---------video popup---------
			Video_popup: function() {
				$('.ss_about_img .ss_video_popup').magnificPopup({
					type: 'iframe',
					iframe: {
						patterns: {
							youtube: {
							index: 'youtube.com/',
							id: function (url) { return url },
							src: '%id%'
							},
							vimeo: {
							index: 'vimeo.com/',
							id: function (url) { return url },
							src: '%id%'
							}
						}
					}
				});	
			},
			
			// --------counter----------
			counter: function() {
				if($('.ss_about_counter').length > 0){
					var a = 0;
					$(window).scroll(function() {

					  var oTop = $('#counter').offset().top - window.innerHeight;
					  if (a == 0 && $(window).scrollTop() > oTop) {
						$('.counter-value').each(function() {
						  var $this = $(this),
							countTo = $this.attr('data-count');
						  $({
							countNum: $this.text()
						  }).animate({
							  countNum: countTo
							},

							{

							  duration: 5000,
							  easing: 'swing',
							  step: function() {
								$this.text(Math.floor(this.countNum));
							  },
							  complete: function() {
								$this.text(this.countNum);
								//alert('finished');
							  }

							});
						});
						a = 1;
					  }

					});
				}
			},
			// --------counter----------
			counter_two: function() {
				if($('.ss_pv_two_right').length > 0){
				var a = 0;
					$(window).scroll(function() {

					  var oTop = $('#counter').offset().top - window.innerHeight;
					  if (a == 0 && $(window).scrollTop() > oTop) {
						$('.counter-value').each(function() {
						  var $this = $(this),
							countTo = $this.attr('data-count');
						  $({
							countNum: $this.text()
						  }).animate({
							  countNum: countTo
							},

							{

							  duration: 5000,
							  easing: 'swing',
							  step: function() {
								$this.text(Math.floor(this.countNum));
							  },
							  complete: function() {
								$this.text(this.countNum);
								//alert('finished');
							  }

							});
						});
						a = 1;
					  }

					});
				}
			},
			product: function() {
				$('#thumbs_img img').on('click', function(){
					$('#large_image').attr('src',$(this).attr('src').replace('thumb','large'));
					$('#thumbs_img ul li img.ss_active_bdr').removeClass('ss_active_bdr');
					$(this).addClass("ss_active_bdr");
				});
			},
			
	};	
	Solar.init();
	
	
})(jQuery);		

new WOW().init();

// Contact Form Submission
		function checkRequire(formId , targetResp){
			targetResp.html('');
			var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
			var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
			var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
			var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
			var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
			var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
			var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
			var check = 0;
			$('#er_msg').remove();
			var target = (typeof formId == 'object')? $(formId):$('#'+formId);
			target.find('input , textarea , select').each(function(){
				if($(this).hasClass('require')){
					if($(this).val().trim() == ''){
						check = 1;
						$(this).focus();
						$(this).parent('div').addClass('form_error');
						targetResp.html('You missed out some fields.');
						$(this).addClass('error');
						return false;
					}else{
						$(this).removeClass('error');
						$(this).parent('div').removeClass('form_error');
					}
				}
				if($(this).val().trim() != ''){
					var valid = $(this).attr('data-valid');
					if(typeof valid != 'undefined'){
						if(!eval(valid).test($(this).val().trim())){
							$(this).addClass('error');
							$(this).focus();
							check = 1;
							targetResp.html($(this).attr('data-error'));
							return false;
						}else{
							$(this).removeClass('error');
						}
					}
				}
			});
			return check;
		}
		$(".submitForm").on('click', function() {
			var _this = $(this);
			var targetForm = _this.closest('form');
			var errroTarget = targetForm.find('.response');
			var check = checkRequire(targetForm , errroTarget);
			
			if(check == 0){
			   var formDetail = new FormData(targetForm[0]);
				formDetail.append('form_type' , _this.attr('form-type'));
				$.ajax({
					method : 'post',
					url : 'ajaxmail.php',
					data:formDetail,
					cache:false,
					contentType: false,
					processData: false
				}).done(function(resp){
				    console.log(resp);
					if(resp == 1){
						targetForm.find('input').val('');
						targetForm.find('textarea').val('');
						errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
					}else{
						errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
					}
				});
			}
		});