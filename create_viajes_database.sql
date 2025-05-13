-- Crear el esquema
CREATE SCHEMA viajes;

-- Usar el esquema (en PostgreSQL no se usa "USE", pero se puede definir el search_path)
SET search_path TO viajes;

-- Crear la tabla usuarios
CREATE TABLE viajes.usuarios (
  id SERIAL PRIMARY KEY,
  email VARCHAR(200) NOT NULL,
  pass VARCHAR(200) NOT NULL,
  administrador INT NOT NULL
);

-- Insertar datos en usuarios
INSERT INTO viajes.usuarios (email, pass, administrador) VALUES 
('admin@admin.com', 'adminadmin', 1);

-- Crear la tabla permisos
CREATE TABLE viajes.permisos (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(60) NOT NULL,
  pagina VARCHAR(60) NOT NULL
);

-- Insertar datos en permisos
INSERT INTO viajes.permisos (nombre, pagina) VALUES 
('admin', 'administracion.html'),
('usuario', 'home.html');

-- Crear la tabla permisosxusuario
CREATE TABLE viajes.permisosxusuario (
  usuario_id INT NOT NULL,
  permiso_id INT NOT NULL,
  PRIMARY KEY (usuario_id, permiso_id),
  CONSTRAINT fk_usuario FOREIGN KEY (usuario_id) REFERENCES viajes.usuarios(id) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_permiso FOREIGN KEY (permiso_id) REFERENCES viajes.permisos(id) ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- Insertar datos en permisosxusuario
INSERT INTO viajes.permisosxusuario (usuario_id, permiso_id) VALUES (1, 1);

-- Crear la tabla ofertas
CREATE TABLE viajes.ofertas (
  id SERIAL PRIMARY KEY,
  origen VARCHAR(60) NOT NULL,
  destino VARCHAR(60) NOT NULL,
  salida TIMESTAMP NOT NULL,
  llegada TIMESTAMP NOT NULL,
  precio DECIMAL(6,2) NOT NULL,
  cupos INT NOT NULL
);

-- Insertar datos en ofertas
INSERT INTO viajes.ofertas (origen, destino, salida, llegada, precio, cupos) VALUES 
('BUENOS AIRES', 'MADRID', '2023-06-30 07:25', '2023-07-01 11:00', 650.99, 250),
('BOGOTA', 'LOS ANGELES', '2023-07-12 09:50', '2023-07-12 19:00', 430.00, 200),
('RIO DE JANEIRO', 'PARIS', '2023-08-18 06:55', '2023-08-18 08:20', 580.99, 250);


SELECT * FROM ofertas
SELECT * FROM permisos
SELECT * FROM permisosxusuario
SELECT * FROM usuarios