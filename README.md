# Visão geral do software

O software é um sistema de cadastro de produtos em estoque, desenvolvido com React.js para o front-end e Node.js para o back-end. O banco de dados MySQL é utilizado para armazenar os dados. Esta documentação fornece instruções detalhadas sobre a instalação e configuração do software, incluindo os requisitos do sistema e os passos necessários para a instalação correta.

## Requisitos do sistema

Antes de prosseguir com a execução do projeto, verifique se o sistema atende aos seguintes requisitos mínimos:

- Node.js: versão 18.16.0 ou superior. Para instalar o Node.js, siga as instruções disponíveis em [https://nodejs.org/](https://nodejs.org/).
- MySQL: versão 8.0.33 ou superior. Faça o download e a instalação do MySQL a partir do site oficial: [https://dev.mysql.com/downloads/installer/](https://dev.mysql.com/downloads/installer/)
- Sistema operacional: Windows, macOS ou Linux

Certifique-se de ter instalado as dependências necessárias.

## Configuração do banco de dados

Após a instalação do MySQL, siga as etapas abaixo para configurar o banco de dados no projeto:

1. Abra o prompt de comando.
2. Navegue até o diretório raiz do projeto do back-end.
3. Execute o seguinte comando para instalar as dependências do projeto: `npm install`
4. Após a instalação, abra o arquivo `config/config.json` e verifique as configurações do banco de dados. Certifique-se de que as informações de `username`, `password`, `database` e `host` estejam corretas para o seu ambiente.

Exemplo de arquivo `config/config.json`:

```json
{
  "development": {
    "username": "root",
    "password": "123456",
    "database": "projetotask",
    "host": "localhost",
    "dialect": "mysql"
  }
}
```

5. Certifique-se de estar no diretório `src` do projeto do back-end.

6. No prompt de comando, execute o seguinte comando para criar o banco de dados: `npx sequelize-cli db:create`

Isso criará o banco de dados com base nas configurações fornecidas no arquivo `config.json`.

## Criação das Tabelas

Após a criação do banco de dados, você pode usar o Sequelize para criar as tabelas necessárias. Siga as etapas abaixo:

1. Certifique-se de estar no diretório `src` do projeto do back-end.

2. No prompt de comando, execute o seguinte comando para aplicar a migração e criar as tabelas no banco de dados: `npx sequelize-cli db:migrate`

Isso executará a migração pendente e criará as tabelas correspondentes no banco de dados de acordo com as definições fornecidas.

Após concluir essas etapas, o banco de dados será criado e as tabelas serão geradas usando o Sequelize. Agora você pode prosseguir com a execução do projeto.

## Execução do Projeto

Para executar o projeto completo (front-end e back-end), siga as etapas abaixo:

1. Abra dois prompts de comando.
2. No primeiro prompt, navegue até o diretório raiz (fora do `src`) do diretório do back-end.
3. Execute o seguinte comando para iniciar o servidor do Node.js: `nodemon index.js`
4. No segundo prompt, navegue até o diretório raiz do projeto do front-end.
5. Execute o seguinte comando para iniciar o servidor de desenvolvimento do React.js: `npm run dev`

O front-end React será iniciado e estará acessível em seu navegador através do endereço:
[http://localhost:3000/](http://localhost:3000/) ou em alguma porta diferente que pode ser visualizada no terminal.

O back-end Node.js estará rodando no endereço [http://localhost:5000/](http://localhost:5000/).

Certifique-se de que o banco de dados esteja em execução e de que todas as configurações estejam corretas para garantir o funcionamento adequado do software de cadastro de produtos em estoque.

## Conclusão

Ao seguir essas etapas, você configurará corretamente o banco de dados usando o Sequelize e poderá executar o projeto React com o back-end Node.js. Certifique-se de fornecer as informações relevantes sobre a configuração do banco de dados e quaisquer outras instruções adicionais que possam ser necessárias para o uso adequado do projeto.
