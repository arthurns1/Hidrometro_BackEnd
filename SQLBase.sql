CREATE TABLE usuarios(
	login VARCHAR(20) NOT NULL,
	senha VARCHAR(20) NOT NULL,
	CONSTRAINT pk_login PRIMARY KEY (login)
);

CREATE TABLE caixas(
	id_caixa SERIAL, 
	capacidade FLOAT NOT NULL,
	marca VARCHAR(40) NOT NULL,
	login VARCHAR(20) NOT NULL,
	sensor VARCHAR(30) NOT NULL,
	ip_esp VARCHAR(30) NOT NULL,
	CONSTRAINT pk_id_caixa PRIMARY KEY (id_caixa),
	CONSTRAINT fk_login FOREIGN KEY (login) REFERENCES usuarios(login) ON DELETE CASCADE
);

CREATE TABLE dados(
	id_dado SERIAL,
	data_criacao DATE,
	altura FLOAT NOT NULL,
	id_caixa INTEGER NOT NULL,
	CONSTRAINT pk_id_dado PRIMARY KEY (id_dado),
	CONSTRAINT fk_id_caixa FOREIGN KEY (id_caixa) REFERENCES caixas(id_caixa) ON DELETE CASCADE
);

INSERT INTO usuarios (login, senha) VALUES ('Jairo', '123');
INSERT INTO usuarios (login, senha) VALUES ('Mario', '456');
INSERT INTO usuarios (login, senha) VALUES ('Chico', '321');
INSERT INTO usuarios (login, senha) VALUES ('Antonio', '654');

INSERT INTO caixas VALUES (DEFAULT, 10000, 'Fortlev', 'Jairo', 'Pressão', '255.255.255.255');
INSERT INTO caixas VALUES (DEFAULT, 1000, 'Fortlev', 'Jairo', 'Distancia', '251.253.255.255');
INSERT INTO caixas VALUES (DEFAULT, 2500, 'Amanco', 'Antonio', 'Distancia', '225.255.255.255');
INSERT INTO caixas VALUES (DEFAULT, 3000, 'Fortlev', 'Mario', 'Pressão', '254.255.215.255');
INSERT INTO caixas VALUES (DEFAULT, 2134, 'Tigre', 'Antonio', 'Pressão', '255.245.255.255');
INSERT INTO caixas VALUES (DEFAULT, 4000, 'Amanco', 'Antonio', 'Pressão', '215.255.255.255');
INSERT INTO caixas VALUES (DEFAULT, 1000, 'Amanco', 'Chico', 'Distancia', '255.205.225.255');
INSERT INTO caixas VALUES (DEFAULT, 9000, 'Tigre', 'Mario', 'Distancia', '255.255.255.255');
INSERT INTO caixas VALUES (DEFAULT, 7000, 'Amanco', 'Antonio', 'Pressão', '255.255.255.205');
INSERT INTO caixas VALUES (DEFAULT, 3000, 'Fortlev', 'Antonio', 'Pressão', '255.255.155.255');
