
function changeItems(){
	if ($(window).width() <= '768'){
		$('.item3 p').html('Аккумуляторы и зарядные  устройства')
		$('.item5 p').html('Техника б/у')
		$('.item6 p').html('Колёса <span>индустриальные</span>')
		$('.item7 p').html('Электропогрузчики')
		$('.item8 p').html('Самоходные подъёмники')
		$('.item9 p').html('Навесное оборудование')
		$('.item10 p').html('Смазочные материалы')
		$('.item11 p').html('Доп. оборудование')
		$('button').click(function (){
			$('.images').addClass('opened')
			$(this).css('display', 'none')
		})
	} else {
		$('button').click(function (){
			$('.images').addClass('opened')
			$(this).css('display', 'none')
			$('.item1 p').html('Автопогрузчики')
			$('.item3 p').html('Самоходныe подъёмники')
			$('.item5 p').html('Электропогрузчики')
		})
	}
}

$(window).on('load resize', changeItems);