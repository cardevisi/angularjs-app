(function(){
	var app = angular.module('main', ['store-products', 'services']);	
	
	app.controller('MainController', function(){
		this.products = gems;
	});

	app.controller('MainControllerGallery', function(){
		this.imageGallery = gallerys;
	});

	app.controller('PanelController', function(){
		this.panels = panels;
		this.productPanels = panels.products;
		this.productReviews = panels.reviews;
		this.tab = panels.tabInit;
		this.setTab = function(selectedTab) {
    		this.tab = selectedTab;
    	};
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});

	app.controller('ReviewController', function(){
		this.review = {};
		this.addReview = function(product) {
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
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

	var panels = {
		tabInit: 1,
		products:[
			{
				description:'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.'
			},
			{
				description:'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.'
			},
			{
				description:'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.'
			},
			{
				description:'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.'
			}
		],
		reviews: [
			{
		        	stars: 3,
		        	body: "I think this gem was just OK, could honestly use more shine, IMO.",
		        	author: "JimmyDean@example.org",
		        	createdOn: 1397490980837
		    }, 
		    {
		        	stars: 4,
		        	body: "Any gem with 12 faces is for me!",
		        	author: "gemsRock@example.org",
		        	createdOn: 1397490980837
	      	}
	    ]
	
	}

})();