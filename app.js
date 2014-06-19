(function(){
	var app = angular.module('main', []);	
	app.controller('MainController', function(){
		this.products = gems;
	});

	app.controller('MainControllerGallery', function(){
		this.imageGallery = gallerys;
		
	});

	var gems = [
		{
			name:"Product-first",
			price: 2.95,
			description: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
			canPurchase: false,
			images:[
				{
					alt:'Tiger Image',
					full: './images/gallery-tiger-full.jpg',
					thumb: './images/gallery-tiger-thumb.jpg'
				}
			]
		},
		{
			name:"Product-1",
			price: 2.95,
			description: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
			canPurchase: false,
			images:[
				{
					alt:'Tiger Image',
					full: './images/gallery-tiger-full.jpg',
					thumb: './images/gallery-tiger-thumb.jpg'
				}
			]
		},
		{
			name:"Product-2",
			price: 2.95,
			description: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
			canPurchase: false,
			images:[
				{
					alt:'Tiger Image',
					full: './images/gallery-tiger-full.jpg',
					thumb: './images/gallery-tiger-thumb.jpg'
				}
			]
		},
		{
			name:"Product-3",
			price: 2.95,
			description: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
			canPurchase: false,
			images:[
				{
					alt:'Tiger Image',
					full: './images/gallery-tiger-full.jpg',
					thumb: './images/gallery-tiger-thumb.jpg'
				}
			]
		},
		{
			name:"Product-4",
			price: 2.95,
			description: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
			canPurchase: false,
			images:[
				{
					alt:'Tiger Image',
					full: './images/gallery-tiger-full.jpg',
					thumb: './images/gallery-tiger-thumb.jpg'
				}
			]
		}
	]

	var gallerys = {
			name:"Gallery-products",
			images:[
				{
					alt:'Tiger Image',
					full: './images/gallery-tiger-full.jpg',
					thumb: './images/gallery-tiger-thumb.jpg'
				},
				{
					alt:'Tiger Image',
					full: './images/gallery-tiger-full.jpg',
					thumb: './images/gallery-tiger-thumb.jpg'
				},
				{
					alt:'Tiger Image',
					full: './images/gallery-tiger-full.jpg',
					thumb: './images/gallery-tiger-thumb.jpg'
				},
				{
					alt:'Tiger Image',
					full: './images/gallery-tiger-full.jpg',
					thumb: './images/gallery-tiger-thumb.jpg'
				},
				{
					alt:'Tiger Image',
					full: './images/gallery-tiger-full.jpg',
					thumb: './images/gallery-tiger-thumb.jpg'
				},
				{
					alt:'Tiger Image',
					full: './images/gallery-tiger-full.jpg',
					thumb: './images/gallery-tiger-thumb.jpg'
				},
				{
					alt:'Tiger Image',
					full: './images/gallery-tiger-full.jpg',
					thumb: './images/gallery-tiger-thumb.jpg'
				}
			]
		}
})();