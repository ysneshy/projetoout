# empresas-API

Como projeto final do modulo 2 da formação em desenvolvimento full stack da kenzie academy, foi proposto o desenvolvimento de um sistema front-end de criação e gerenciamento de empresas e funcionários. O sistema possui uma pagina de login e cadastro de usuário, onde podem ser cadastrados usuários normais (dentro da aplicação do banco de dados já existe cadastrado o usuário admin, que é o user que tem permissão para realizar as operações das empresas). Ao fazer login, o usuário é redirecionado para uma pagina dashboard, de acordo com o tipo do usuário. O usuário admin é capaz de criar empresas, criar, editar e excluir departamentos dentro de uma empresa específica, contratar e demitir funcionários para um departamento específico de uma empresa, editar a modalidade de trabalho e a senioridade do funcionário, e excluir um usuário da plataforma. O usuário normal é capaz de visualizar os dados da empresa, departamento e dados dos funcionários empregadas no mesmo departamento, caso esteja empregado, e é capaz de editar suas informações como nome de usuário, email e senha.
Além disso, a aplicação ainda deveria ser desenvolvida usando os conceitos de git flow e conventional commits (encontram-se na aplicação original, no repositório privado da entrega). 
<br>
<br>
Login conta admin: email -> admin@mail.com senha -> admin
Login conta normal: -> criar uma nova conta junto ao formulário de cadastro e acessar com ela a plataforma.
<br>
<br>
O sistema funciona em conjunto com API e banco de dados local, que pode ser encontrado no link https://github.com/Jardel-Kenzie/m2-api-empresas. Para rodar o banco de dados: clonar o código da aplicação -> npm install -> npm run seed -> npm run dev. Para parar de rodar o banco de dados: ctrl + c.
