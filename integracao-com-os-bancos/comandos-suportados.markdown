---
title: Comandos suportados
date: 2018-01-30 17:49:00 -02:00
position: 5
---

Integrando-se aos bancos com a troca de arquivos e via webservices, o Boleto Simples envia e recebe diversos tipos de informações sobre os boletos.

Hoje, o serviço de webservice dos bancos permite o envio do **comando de registro** dos boletos. Isso torna possível registrar um boleto automaticamente assim que ele é gerado.

O restante dos comandos ainda depende da troca de arquivos de Remessa e Retorno:

* Na **Remessa**, dois comandos muito comuns são a *Entrada de Título* e o *Pedido de Baixa*, ou seja, as informações de quando um boleto é emitido e quando ele é cancelado ou pago.

* O arquivo de **Retorno** contém comandos importantes como *Entrada Confirmada* ou *Entrada Rejeitada*, que mostra o sucesso do envio das informações, e a *Liquidação*, que informa o pagamento do boleto.

Veja a lista completa de comandos suportados pela integração do Boleto Simples com os bancos:

### Comandos enviados no arquivo remessa

* Entrada de Título

* Pedido de Baixa

* Alteração do Vencimento

* Concessão de Abatimento

* Protestar

* Não Protestar

* Protesto para fins falimentares

* Alterar Nome do Pagador

* Alteração de endereço do pagador

* Alterar Cidade do pagador

* Alterar UF do pagador

* Sustar o protesto

* Alterar CPF/CNPJ do pagador

* Alterar Valor

* Alteração de outros dados

* Pago diretamente ao beneficiário

* Alterar CEP do pagador

* Não cobrar juros

* Solicitar negativação expressa

* Não negativar

* Excluir negativação expressa

* Cancelar negativação expressa

### Comandos lidos do arquivo retorno

* Entrada Confirmada

* Entrada Rejeitada

* Liquidação

* Baixa de Título Confirmada

* Baixa de Título Rejeitada

* Alteração do Vencimento Confirmada

* Alteração do Vencimento Rejeitada