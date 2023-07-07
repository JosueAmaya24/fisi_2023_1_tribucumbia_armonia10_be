
CREATE DATABASE IF NOT EXISTS farrukitos_db;
USE farrukitos_db;


-- Creación de la tabla "Usuario"
CREATE TABLE IF NOT EXISTS Usuario (
    ID_Usuario INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Apellido VARCHAR(255) NOT NULL,
    CorreoElectronico VARCHAR(255) NOT NULL,
    Contrasena VARCHAR(255) NOT NULL,
    Direccion VARCHAR(255) NOT NULL,
    Telefono VARCHAR(255) NOT NULL
);


-- Creación de la tabla "Sede"
CREATE TABLE IF NOT EXISTS Sede (
    ID_Sede INT AUTO_INCREMENT PRIMARY KEY,
    NombreSede VARCHAR(255) NOT NULL,
    Direccion VARCHAR(255) NOT NULL,
    Telefono VARCHAR(255) NOT NULL,
    HorariosAtencion VARCHAR(255) NOT NULL
);


-- Creación de la tabla "Pedido"
CREATE TABLE IF NOT EXISTS Pedido (
    ID_Pedido INT AUTO_INCREMENT PRIMARY KEY,
    ID_Usuario INT NOT NULL,
    ID_Sede INT NOT NULL,
    FechaHoraPedido DATETIME NOT NULL,
    EstadoPedido VARCHAR(255) NOT NULL,
    FOREIGN KEY (ID_Usuario) REFERENCES Usuario(ID_Usuario),
    FOREIGN KEY (ID_Sede) REFERENCES Sede(ID_Sede)
);


-- Creación de la tabla "Producto"
CREATE TABLE IF NOT EXISTS Producto (
    ID_Producto INT AUTO_INCREMENT PRIMARY KEY,
    NombreProducto VARCHAR(255) NOT NULL,
    Descripcion VARCHAR(255) NOT NULL,
    Precio DECIMAL(10, 2) NOT NULL,
    Disponibilidad VARCHAR(255) NOT NULL
);


-- Creación de la tabla "Detalle_Pedido"
CREATE TABLE IF NOT EXISTS Detalle_Pedido (
    ID_Detalle INT AUTO_INCREMENT PRIMARY KEY,
    ID_Pedido INT NOT NULL,
    ID_Producto INT NOT NULL,
    Cantidad INT NOT NULL,
    Subtotal DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (ID_Pedido) REFERENCES Pedido(ID_Pedido),
    FOREIGN KEY (ID_Producto) REFERENCES Producto(ID_Producto)
);

