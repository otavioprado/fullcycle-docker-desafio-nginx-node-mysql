# fullcycle-docker-desafio-nginx-node-mysql

### Descrição do desafio
> A ideia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

### Requisitos
Gere o docker-compose de uma forma que basta apenas rodarmos: ```docker-compose up -d``` que tudo deverá estar funcionando e disponível na porta: 8080.

### Para rodar
```
git clone https://github.com/otavioprado/fullcycle-docker-desafio-nginx-node-mysql.git
cd fullcycle-docker-desafio-nginx-node-mysql
docker-compose up -d
```