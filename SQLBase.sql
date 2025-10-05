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