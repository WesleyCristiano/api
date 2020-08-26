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


## Funcionalidades disponíveis para o usuário-lojista.

   - **1)** Produtos
   
      **Requisitos Funcionais**
      
      - [ ] O usuário deve poder realizar o cadastramento de produtos.
      
      - [ ] O usuário deve pode realizar a listagem de produtos com as opções de editar ou excluir.
      
      - [ ] O usuário deve poder editar os produtos que cadastrou
      
      **Requisitos Não-Funcionais**
      
      **Regras de Negócio**
      
      - [ ] O usuário cadastrador de produtos não poderá realizar a criação de categorias.
      
      - [ ] O usuário somente poderá ou excluir ou atualizar produtos que ele mesmo criou.
      

   - **2)** Listas de materiais ( verificar a possibilidade desta funcionalidade estar disponível apenas para super-usuarios)
   
      - [ ] O usuário deve ser capaz de criar um lista de materias informando os campos: número do item (ex1,2,3...), descrição e categoria.
      
      - [ ] O usuário deve ser capaz de editar uma lista de materiais
      
      
      **Requisitos Não-Funcionais**
      
      **Regras de Negócio**
      
      - [ ] O usuário deverá escolher a escola e a serie previamente para criar a lista
      
      - [ ] O usuário **não poderá** criar mais de uma lista para a mesma serie de uma escola.


   - **3)** Perfil da loja
   
      - [ ] O usuário deve poder criar um conta de lojista
      
      - [ ] O usuário deve poder editar sua conta de lojista
      
      - [ ] O usuário deve poder escolher as opções de frete que disponibilizará para seus clientes.
      
      **Requisitos Não-Funcionais**
      
      **Regras de Negócio**
      
      - [ ] O usuário deverá escolher a escola e a serie previamente para criar a lista
      
   - **4)** Pedidos
   
      - [ ] O usuário deve poder listar seus pedidos
      
      - [ ] Na tela inicial do dashboard o usuário deve poder verificar facilmente os pedidos a serem preparados
      
      - [ ] O usuário deve poder filtrar seus pedidos por data, intervalo de data, e por status.
      
      - [ ] O usuário deve poder receber uma notificação quando for realizado um novo pedido
      
   - **4)** Requisitos de design do Dashboard
   
      - [ ] O Dashboard do usuário deve conter os menus: produtos, pedidos, minhas vendas
      
      - [ ] Na tela inicial do dashboard o usuário deve poder verificar facilmente os pedidos a serem preparados
      
      - [ ] O usuário deve poder filtrar seus pedidos por data, intervalo de data, e por status.
      

      
      


produtos, pedidos, vendas, perfil do usuário,

     
      



      
   
   
      
      
