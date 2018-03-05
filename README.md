# Boleto Simples Features

A página de [Funcionalidades do Boleto Simples](http://features.boletosimples.com.br)

1. Baixe a documentação

	```sh
	git clone https://github.com/BoletoSimples/boletosimples-features.git
	```

1. Atualize as dependências

	```sh
	cd boletosimples-features
	bundle install
	```

1. Rode o servidor

	```sh
	foreman start
	```

1. Acesse pelo navegador

	[http://localhost:4000](http://localhost:4000)

1. Para atualizar o Header e Footer

	```sh
	CONFIRM=true LOCAL=true ./update-header-footer && foreman start
	```
