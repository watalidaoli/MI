$(function(){
	
	// header
	(function(){
		var $shop = $('#header .header_main_right_shop');
		var $hide = $('#header .header_main_right_shop_hide');
		$shop.hover(function(){
			$(this).addClass('hover');
			$hide.stop().slideDown();
		},function(){
			$(this).removeClass('hover');
			$hide.stop().slideUp();
		});
	})();

	//nav
	(function(){
		var $search = $('#nav .nav_search');
		var $s_right = $('#nav .nav_search_right');
		var $input = $('#nav .nav_search_left input');
		var $tip = $('#nav .nav_search_left_tip');
		var $hide = $('#nav .nav_search_hide');
		var $one = $('#nav .nav_main_one');
		var $product = $('#nav_wrap_product');
		var $productUl = $('.nav_wrap_product_main ul');

		$search.hover(function(){
			$(this).addClass('hover');
		},function(){
			$(this).removeClass('hover');
		});
		$s_right.hover(function(){
			$(this).addClass('hover');
		},function(){
			$(this).removeClass('hover');
		});
		$input.focus(function(){
			$search.addClass('focus');
			$tip.fadeOut(200);
			$hide.show();
		}).blur(function(){
			$search.removeClass('focus');
			$tip.fadeIn(200);
			$hide.hide();
		});
		$one.hover(function(){
			$product.stop().slideDown(300);
		},function(){
			$product.stop().slideUp(300);
		});
		$product.hover(function(){
			$(this).stop().show();
		},function(){
			$(this).stop().slideUp(300);
		});
		$one.hover(function(){
			var index = $(this).index();
			$productUl.eq(index).show().siblings().hide();
		});
	})();
	
	// banner
	(function(){
		var $tabLi = $('#banner .banner_main_tab li');
		var $picLi = $('#banner .banner_main_pic li');
		var $btnDiv = $('#banner .banner_main_btn div');
		var $banner_main = $('#banner .banner_main');
		var index = 0;
		var timer;
		var length = $tabLi.length;
		$tabLi.hover(function(){
			$(this).addClass('hover');
		},function(){
			$(this).removeClass('hover');
		}).click(function(){
			index = $(this).index();
			banner();
		});
		$btnDiv.hover(function(){
			$(this).addClass('hover');
		},function(){
			$(this).removeClass('hover');
		}).click(function(){
			var i = $(this).index();
			if ( i )
			{
				index ++;
				index %= length;
			}
			else
			{
				index --;
				if(index<0)index=length-1;
			}
			banner();
		});
		auto();
		$banner_main.hover(function(){
			clearInterval( timer );
		},function(){
			auto();
		});

		function auto(){
			timer = setInterval(function(){
				index ++;
				index %= length;
				banner();
			},3000);
		}

		function banner(){
			$tabLi.eq(index).addClass('click').siblings().removeClass('click');
			$picLi.eq(index).stop(true).fadeIn().siblings().stop(true).fadeOut();
		}
	})();

	//banner-nav-hide
	(function(){
		var $li = $('#banner .banner_nav>ul>li');
		$li.hover(function(){
			$(this).find('.banner_nav_hide').show();
		},function(){
			$(this).find('.banner_nav_hide').hide();
		});
	})();

	//recommend
	(function(){
		var $ul = $('#recommend .recommend_content');
		var $btn = $('#recommend .recommend_title_btn div');
		var $left = $('#recommend .recommend_title_btn_left');
		var $right = $('#recommend .recommend_title_btn_right');
		var liLength = miData.recommend.imgSrc.length;
		var ulIndex = true;
		var timer;
		for ( var i=0;i<liLength;i++ )
		{
			var oLi = document.createElement('li');
				oLi.className = 'recommend_content_list';
				oLi.style.borderTop = '1px solid '+miData.recommend.borderColor[i];

			var oA1 = document.createElement('a');
				oA1.className = 'recommend_content_list_img';
				oA1.href = '';
			var oA2 = document.createElement('a');
				oA2.className = 'recommend_content_list_title';
				oA2.href = '';
				oA2.innerHTML = miData.recommend.title[i];
			var oP1 = document.createElement('p');
				oP1.className = 'recommend_content_list_detail';
				oP1.innerHTML = miData.recommend.detail[i];
			var oP2 = document.createElement('p');
				oP2.className = 'recommend_content_list_price';
				oP2.innerHTML = miData.recommend.price[i];
			
			var oImg = new Image();
				oImg.src = miData.recommend.imgSrc[i];
				oImg.alt = '';
				oImg.width = '160';
				oImg.height = '160';
			$ul[0].appendChild( oLi );
			oLi.appendChild(oA1);
			oLi.appendChild(oA2);
			oLi.appendChild(oP1);
			oLi.appendChild(oP2);
			oA1.appendChild(oImg);
		};
		var $li = $('#recommend .recommend_content li');
		var margin = $li.eq(5).position().left;
		auto();
		$btn.click(function(){
			var index = $(this).index();
			if ( index )
			{
				if ( ulIndex )
				{
					ulIndex = !ulIndex;
					toggle();
					$ul.stop().animate({
						marginLeft : -margin +'px'
					},500);
					clearInterval( timer );
					auto();
				}
			}
			else
			{
				if ( !ulIndex )
				{
					ulIndex = !ulIndex;
					toggle();
					$ul.stop().animate({
						marginLeft : '0px'
					},500);
					clearInterval( timer );
					auto();
				}
			}
		});
		function toggle(){
			$left.toggleClass('click');
			$right.toggleClass('click');
		};
		function auto(){
			timer = setInterval(function(){
				if ( ulIndex )
				{
					ulIndex = !ulIndex;
					toggle();
					$ul.stop().animate({
						marginLeft : -margin +'px'
					},500);
				}
				else
				{
					ulIndex = !ulIndex;
					toggle();
					$ul.stop().animate({
						marginLeft : '0px'
					},500);
				}
			},6000);
		}
	})();

	// 智能硬件
	//smart
	(function(){
		var $new = $('.tag_new');
		var $div = $('<div class="new">新品</div>');
		$new.append($div);
	})();

	//macth
	(function(){
		
		var $content = $('#match .match_content .match_content_right');
		var data = miData.match;
		var $title = $('#match .match_title ul li');
			$title.eq(0).addClass('hover');
		for ( var i=0;i<data.length;i++ )
		{
			var $ul = $('<ul></ul>');
			$content.append($ul);
		}
		var $ul = $('#match .match_content .match_content_right ul');
		$ul.eq(0).css('display' , 'block');
		$ul.each(function(index){
			for ( var i=0;i<9;i++ )
			{
				if ( i<7 )
				{
					$li = $('<li class="match_content_bottom"><a href="javascript:;" class="match_content_img"><img src="img/match/'+data.attr[index]+'/'+(i+1)+'.jpg" alt="" width="150" height="150" /><a href="javascript:;" class="match_content_title">'+data[data.attr[index]].title[i]+'</a><p class="match_content_price">'+data[data.attr[index]].price[i]+'</p><p class="match_content_comment"><span>'+data[data.attr[index]].comment[i]+'</span>人评价</p><div class="match_content_hide"><span class="match_content_h_review">性价比非常高,强烈推荐!...</span><span class="match_content_h_author"> 来自于 王小明 的评价 </span></div></li>');
				}
				else if ( i == 7 )
				{
					$li = $('<li class="match_content_eight match_content_bottom"><a href="javascript:;">'+data[data.attr[index]].title[i]+'</a><p>'+data[data.attr[index]].price[i]+'</p><img src="img/match/'+data.attr[index]+'/'+(i+1)+'.jpg" alt="" width="80" height="80" /></li>');
				}
				else
				{
					$li = $('<li class="match_content_nine"><a href="javascript:;" class="match_content_n_more">浏览更多</a><a href="javascript:;" class="match_content_n_hot">热门</a><a href="javascript:;" class="match_content_n_arrow iconfont">&#x3435;</a></li>');
				}
				$(this).append($li);
			}
		});
		var $li = $('#match .match_content .match_content_right ul li');
		$li.hover(function(){
			$(this).find('.match_content_hide').show().css('opacity' , '0').stop().animate({
				opacity : 1,
				bottom : 0
			},500);
		},function(){
			$(this).find('.match_content_hide').stop().animate({
				bottom : '-75px',
				opacity : 0
			},500);
		});
		$title.hover(function(){
			var index = $(this).index();
			$(this).addClass('hover').siblings().removeClass('hover');
			$ul.eq(index).show().siblings().hide();
		});
	})();
	// 内容
	//content
	(function(){
		
		var $li = $('#content .content_content .content_content_li');
		var $btn = $("#content .content_content_btn div");
		var $tab = $('#content .content_content_tab li');
		var $boxWrap = $('#content .content_content .box_wrap');
		var length = $boxWrap.length;

		var color = '';
		$li.each(function(i){
			switch (i)
			{
				case 1:
					color = '#3f9';
					break;
				case 2:
					color = '#ec0000';
					break;
				case 3:
					color = '#00f';
					break;
			
			}
			$(this).css('borderColor' , color).find('h3').css('color' , color);
		});
		$boxWrap.each(function(){
			this.a = 0;
		});
		$li.hover(function(){
			$(this).find('.content_content_btn').show();
		},function(){
			$(this).find('.content_content_btn').hide();
		});

		$tab.click(function(){
			var index = $(this).index();
			var pIndex = $(this).parent().parent().parent().index();
			$boxWrap.eq(pIndex)[0].a = index;
			$(this).addClass('on').siblings().removeClass('on');
			$boxWrap.eq(pIndex).stop(true).animate({
				marginLeft : -$boxWrap.eq(pIndex)[0].a * 296 + 'px'
			},500);

		});

		$btn.click(function(){
			var i = $(this).index();
			var pIndex = $(this).parent().parent().index();
			if ( i )
			{
				if ( $boxWrap.eq(pIndex)[0].a < length-1 )
				{
					$boxWrap.eq(pIndex)[0].a ++;
					
				}else
				{
					return;
				}
			}
			else
			{
				if ($boxWrap.eq(pIndex)[0].a>0)
				{
					$boxWrap.eq(pIndex)[0].a --;
				}
				else
				{
					return;
				}
			}
			$('#content .content_content_tab').eq(pIndex).find('li').eq($boxWrap.eq(pIndex)[0].a).addClass('on').siblings().removeClass('on');
			$boxWrap.eq(pIndex).stop(true).animate({
				marginLeft : -$boxWrap.eq(pIndex)[0].a * 296 + 'px'
			},500);
		});
	})();

	/*video*/
	(function(){
		var $img = $('#video .video_content li img');
		var $span = $('#video .video_content li span');
		var $hide = $('#video .v_hide');
		var $li = $('#video .video_content li');
		var $close = $('#video .video_hide_content p .s2');

		$img.hover(function(){
			var index = $(this).parent().index();
			$span.eq(index).addClass('hover');
		},function(){
			var index = $(this).parent().index();
			$span.eq(index).removeClass('hover');
		});
		$span.hover(function(){
			$(this).addClass('hover');
		},function(){
			$(this).removeClass('hover');
		});
		hSize();
		$(window).resize(hSize);
		$li.click(function(){
			var html = $(this).find('.p1').html();
			$hide.find('.s1').html( html );
			$hide.fadeIn(500,function(){
				$(this).find('.video_hide_content').animate({
					opacity : 1
				},300,function(){
					$(this).animate({
						top : '50%'
					},300);
				});
			});
		});
		$close.click(function(){
			$(this).parent().parent().animate({
				top : '-30%',
				opacity : 0
			},300,function(){
				$hide.fadeOut(300);
			});
		});
		function hSize(){
			$hide.css({
				width : $(window).width() + 'px',
				height : $(window).height() + 'px'
			});
		}
		
		
	})();
	
});