$('button').click(function (){
	$('.images').addClass('opened')
	$(this).css('display', 'none')
	$('.item1 p').html('Автопогрузчики')
	$('.item3 p').html('Самоходныe подъёмники')
	$('.item5 p').html('Электропогрузчики')
	$('.item3 img').attr('src','img/img3-2.png')
	$('.item5 img').attr('src','img/img5-2.png')
})