ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'root';
flush privileges;

CREATE TABLE people (
    nome VARCHAR(50)
);