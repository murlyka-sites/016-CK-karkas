$(document).ready(function() {
  svg4everybody();

	function range($range, $from, $to) {
		var $parent = $range.closest(".filter-settings__column"),
				$from = $parent.find(".filter-settings__field_from"),
				$to = $parent.find(".filter-settings__field_to");

        console.log($parent, $from, $to)

		$range.ionRangeSlider({
			type: "double",
			hide_from_to: true,
			onChange: function (data) {
				$from.val(data.from);
				$to.val(data.to);


			}
		});

		$to.change(function () {
			$range.data("ionRangeSlider").update({
				to: $(this).val()
			});

		})

		$from.change(function () {
			$range.data("ionRangeSlider").update({
				from: $(this).val()
			});

		})
	}
  range($($(".filter-settings__range")[0]));
  range($($(".filter-settings__range")[1]));

	$(".checkbox").styler();

  $(".reviews-prs").slick({
    slidesToShow: 5,
    centerMode: true,
    variableWidth: true,
    asNavFor: ".reviews-comments",
    responsive: [{
      breakpoint: 600,
      setting: {
        slidesToShow: 3
      }
    }]
  })

  $(".reviews-comments").slick({
    arrows: false,
    asNavFor: ".reviews-prs"
  })

  $(".item-gallery__prs").slick({
    arrows: false
  });

  $(".nav__burger").click(function() {
    $(this).toggleClass("nav__burger_open");
    $(".nav__list").toggleClass("nav__list_open");

    return false
  });

  $(".main-banner__items").slick({
    arrows: false,
    dots: true
  })

  $(".project-slider").slick({
    slidesToShow: 4,
    arrows: false,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1012,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1
      }
    }]
  })

  $(".articles-slider").slick({
    slidesToShow: 3,
    arrows: false,
    responsive: [{
      breakpoint: 1012,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }]
  })

  $(".filter-tags__tag").click(function() {
		$(this).toggleClass("filter-tags__tag_active");

		var checkbox = $(this).find("input[type=checkbox], input[type=radio]");

		checkbox.prop('checked', !checkbox.prop('checked'))
	});

  $(".item-gallery__more").click(function() {
    var $this = $(this);

    $(".item-gallery__grid_more").toggleClass("hidden");

    if($this.text() == $this.data('text')) {
      $this.text($this.data('toggle'))
    } else {
      $this.text($this.data('text'))
    }
  });

  $(".composition-tabs__link").click(function() {
    if($(this).parent().hasClass("active")) return

    $(this).closest(".composition-tabs").find(".composition-tabs__item_active").removeClass("composition-tabs__item_active");
    $(this).parent().addClass("composition-tabs__item_active");
  });

  $(".popular-project-tabs__link").click(function() {
    if($(this).parent().hasClass("active")) return

    $(this).closest(".popular-project").find(".popular-project-tabs__item_active").removeClass("popular-project-tabs__item_active");
    $(this).parent().addClass("popular-project-tabs__item_active");
  });

  $('[data-toggle="tooltip"]').tooltip()

  // $(".fancy").fancybox()
});
