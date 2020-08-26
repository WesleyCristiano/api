# MakeList.com.br
- A aplicação consiste em uma papelaria online onde será possível ao cliente realizar a compra da lista de materiais de seu filho.

- A experiência de compra será feita de maneira personalidade, ou seja, para cada cliente serão apresentados os produtos de acordo com a lista esolhida, fazendo com que o cliente não perca tempo pesquisando os produtos. 



## Fluxo do cliente na loja

- A página inicial o cliente escolherá a escola e a série que seu filho estuda. Ao fazer isso será redirecionado para as páginas seguintes, onde em cada página escolherá os produtos na ordem em que são solicitados na lista de materiais de seu filho. 

- Ao final da lista, também será possível ao cliente comprar outros produtos da papelaria para seu filho que eventualmente não estão na lista de materias, como mochilas, estojos etc.

- Após o cliente será redirecionado para a página de carrinho, onde poderá:

    **1)** conferir a lista do produtos escolhidos.

    **2)** escolher a forma de entrega (receber no endereço deseja ou retirar na loja).

    **3)** realizar login ou criar uma conta caso não possua uma. 

    **4)** escolher a forma de pagamento (cartão de crédito/ boleto bancário /transferência)

- Após realizar o pagamento o cliente será redirecionado para uma página de obrigado com informações do pedido (número do pedido, status)

- Ao final o cliente receberá um email de confirmação de pedido.


## Fluxo do lojista na plataforma


- Após o cliente finalizar o pedido o lojista será notificado (email/notificação).

- Após a migração do pedido para o status "pagamento confirmado" o lojista imprimirá a lista de itens do pedido para a separação.

- Após a separação o lojista providenciará a entrega dos produtos (retirada ou entrega em endereço) e atualizará o status para 'produtos enviados' ou 'produto disponíveis para retirada'.

- Após a entrega o lojista deverá realizar a finalização do pedido anexando comprovante de entrega na plataforma(foto/pdf) e alterará o status para entregue.


- Ao cliente finalizar o pedido o lojista:


    **1)** vizualizará o pedido em sua Dashoboard com os possíveis status(Pedido Recebido ou Pagamento confirmado )

    **2)** após a confirmação do pagamento, imprimirá o pedido para a separação (relatório pdf).

    **2)** Realizará a entrega do pedido (ou retirada)


## Schema Visual do [Banco de Dados](https://whimsical.com/PZSTqGP7fPPR9m2iDRe66A)


## Funcionalidades disponíveis para o cliente.

   - **1)** Página de configuração de lista
   
      **Requisitos Funcionais**
      
      - [ ] O usuário deve poder escolher, dentre uma rol de escolas que possuem listas de materiais cadastradas, a escola em que o aluno está matriculado.
      
      - [ ] Para a escola escolhida, o usuário deve poder escolher a serie para qual a comprará a lista de materiais do aluno.
      
      **Requisitos Não-Funcionais**
      
      **Regras de Negócio**
      
   
      
         1. Confirmará e/ou alterá o endereço de entrega
         
         2. Confirmará e/ou alterá as opções de entrega (retirada ou entrega)
         
         3. Poderá vizualizar a lista de produtos escolhidos (breve descrição sem possibiidade de voltar para atualizar)
         
         4. Escolherá a forma de pagamento, informando os dados do cartão de crédito se for o caso.
            
      **Requisitos Não-Funcionais**

      **Regras de Negócio**
      
      - [ ] Não devem sem apresentados nenhuma informação que distraia o cliente a partir da página de identificação/pagamento (sem menus/buscas nos headers ou ofertas avulsas)
      
   - **5)** Recuperação de senha
   
      - [ ] Caso tenha esquecido sua senha, o usuário deve ser capaz de solicitar uma nova senha
      
      - [ ] O usuário deve receber um email com instruções de recuperação de senha
      
      - [ ] O usuário deve poder resetar sua senha

   

      
      
      
      
      

      
      
      **Requisitos Funcionais**
      
      **Regras de Negócio**
      

      



## Rotas da Aplicação

- **`POST /escolas`** : criar `escolas`


