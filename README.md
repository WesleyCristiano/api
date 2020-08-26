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
      
   - **2)** Página de listagem de produtos
         
      **Requisitos Funcionais**
      
      - [ ] O usuário deve receber uma notificação que as entregas estão disponíveis apenas para determinada região (faixa de cep)
      
      - [ ] Com a serie escolhida, deve ser listado ao usuário uma sequência de páginas, dividio por categorias dos produtos(borrachas, apontadores, cadernos e etc) de acordo com a série escolhia. Um determinado número de produtos daquela categoria. A páginas deverão ser apresentadas conforme a **ordem em que aparecem na lista de materiais**.
      
      - [ ] O usuário deve ser capaz de ver uma ou mais fotos do produto em um carrocel de imagens.

      - [ ] Na lista de páginas renderizadas para o usuário ele deve ser capaz de colocar produtos no carrinho e estabelecer sua quantidade.
      
      - [ ] Ao adicionar o produto no carrinho o usuário deve ter um feedkback visual das alterações feitas no carrinho (quantidade de produto adicionado, e notificação produto adicionado- toast???).
      
      **Requisitos Não-Funcionais**

      **Regras de Negócio**
      
   - **3)** Carrinho do compra
   
      - [ ] O usuário deve ser capaz de conferir os produtos que foram adicionados no carrinho com suas respectivas quantidades, foto em miniatura, preço e valor total do pedido.
      
      - [ ] O usuário deve ser capaz de escolher outros produtos que lhe serão sugeridos (mochilas, estojos e outros produtos de maior valor agregado)
      
      - [ ] O usuário deverá ser capaz de alterar as quantidades dos produtos da lista.
      
      - [ ] O usuário deverá ser capaz de excluir produtos da lista.
      
      - [ ] O usuário deverá ser capaz de acessar um botão com os produtos excluídos para recuperá-los, caso deseje.
      
      - [ ] O usuário deve ser capaz de através de seu CEP verificar a disponibilidade de entrega do produto ou retirada na loja, com o respectivo valor da entrega.
      
      - [ ] Na listagem de produtos do carrinho, o usuário deverá ser capaz de clicar em um botão e ser direcionado para o check-out (página de identificação ou pagamento).
      
      **Requisitos Não-Funcionais**

      **Regras de Negócio**
      
   - **4)** Ckeck-out (identificação e posterior pagamento)
   
      - [ ] A partir da página de identificação/pagamento o usuário deve ser capaz de identificar atráves do header em que fase da compra se encontra.
   
      - [ ] Caso esteja logado, o usuário deve ser capaz de ser redirecionado para a página de pagamento.
      
      - [ ] Caso não esteja logado, o usuário deve ser capaz de realizar login na aplicação com seu email e senha.
      
      - [ ] Caso não possua conta, o usuário deve ser capaz de criar um conta com seus dados de email, cpf, senha, telefone, endereço etc.
      
      - [ ] Após o login(autorização) ou cadastro de usuário, o usuário deve ser redirecionado para a página de pagamento onde:
      
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


