USE farrukitos_db;
-- @block


INSERT INTO Usuario (Nombre, Apellido, CorreoElectronico, Contrasena, Direccion, Telefono)
VALUES
    ("Andres", "Castañeda", "andrec@gmail.com", "andcas", "Plan integral de reparaciones Av. 28 de Julio 878 1260 Miraflores - LIMA", "955477418"),
    ("Jesus", "Lujan", "jlujan@gmail.com", "jluaa", "Av. Salaverry 801  Jesús María. LIMA", "932215412"),
    ("John", "Doe", "hondoe@gmail.com", "jhondd", "AV De La Poesia 160, Biblioteca Nacional Urb. Las Torres De San Borja, San Borja, LIMA", "955674515"),
    ("Patricio", "Estrella", "patrickstart@gmail.com", "pstar", "Plaza 30 de Agosto s/n Urb. Corpac, San Isidro LIMA", "955674515"),
    ("Juan", "Quintana", "juanquintana@gmail.com", "jquintana", "AV P. de la República 3361, San Isidro, LIMA", "953469512"),
    ("Esmeralda", "Esquivel", "esmeesquivel@gmail.com", "eequiv", "Av. Abancay Cuadra 5 s/n, Cercado. LIM", "955674413"),
    ("Pedro", "Gutierres", "pgutier@gmail.com", "gutipedr", "Av. Paseo de la República. Palacio de Justicia, Cercado LIMA", "955674515");




INSERT INTO Pedido (ID_Usuario, ID_Sede, FechaHoraPedido, EstadoPedido)
VALUES
    (1, 1, '2023-06-01 10:30:00', 'Pendiente'),
    (2, 1, '2023-06-02 15:45:00', 'Entregado'),
    (3, 2, '2023-06-02 12:15:00', 'En proceso'),
    (4, 3, '2023-06-03 18:20:00', 'Pendiente'),
    (1, 2, '2023-06-03 13:00:00', 'Entregado'),
    (2, 3, '2023-06-04 11:30:00', 'En proceso'),
    (3, 1, '2023-06-04 16:10:00', 'Pendiente'),
    (5, 1, '2023-06-05 09:30:00', 'Pendiente'),
    (6, 2, '2023-06-06 14:15:00', 'En proceso'),
    (7, 3, '2023-06-07 16:45:00', 'Entregado');




INSERT INTO Sede (NombreSede, Direccion, Telefono, HorariosAtencion)
VALUES
    ('Farrukito''s House San Miguel', 'Calle Martín de Murúa 119 Int 7, San Miguel', '01 4006032', 'Lunes a Domingo: 8:00 AM - 10:00 PM'),
    ('Farrukito''s House Callao', 'Av. Callao 193, La Perla', '979776420', 'Lunes a Domingo: 8:00 AM - 10:00 PM'),
    ('Farrukito''s House San Isidro', 'Los Cedros 209, San Isidro', '921216703', 'Lunes a Domingo: 8:00 AM - 10:00 PM'),
    ('Farrukito''s House San Borja', 'Av. Joaquín Madrid N° 200, San Borja', '01 6125555', 'Lunes a Domingo: 8:00 AM - 10:00 PM');




INSERT INTO Producto (NombreProducto, Descripcion, Precio, Disponibilidad)
VALUES
    ('Porcion de Papas Nativas', 'Papas Nativas', 15, 'Disponible'),
    ('Aros de Cebolla', 'Rodajas de cebolla crujientes de masa frita', 17, 'Disponible'),
    ('Pan al Ajo', 'Acompañante de comidas italianas', 20, 'Disponible'),
    ('Pan al Ajo + Queso', 'Acompañante de pan al ajo con queso', 25, 'Disponible'),
    ('Nachos Libres', 'Tortilla de trigo fritas con queso rallado, guacamole, pico de gallo y jalapeños', 26, 'Disponible'),
    ('Nachos Chingones', 'De carne y pollo en salsa BBQ con queso rallado, guacamole, pico de gallo y jalapeños', 30, 'Disponible'),
    ('Orientales', 'Alitas de pollo marinadas en ingredientes orientales con miel y ajonjolí tostado', 27, 'Disponible'),
    ('BBQ', 'Alitas fritas bañadas en salsa BBQ', 27, 'Disponible'),
    ('Infernales', 'Alitas de pollo broaster picantes', 28, 'Disponible'),
    ('A la Finas Hierbas', 'Alitas de pollo marinadas con limón, naranja y hierbas aromáticas', 28, 'Disponible'),
    ('Hamburguesa Casera', 'La hamburguesa de toda la vida', 20, 'Disponible'),
    ('Hamburguesa Royal', 'Hamburguesa + queso cheddar + huevo', 24, 'Disponible'),
    ('Hamburguesa del Diablo', 'Hamburguesa + queso cheddar + huevo + verduras + salsa infernal', 27, 'Disponible'),
    ('La Toxica', 'Hamburguesa + queso cheddar + tocino + rodajas de piña', 28, 'Disponible'),
    ('La Guacha', 'Hamburguesa + chorizo + salsa chimichurri', 29, 'Disponible'),
    ('La Gringa', 'Pan de mantequilla de ajo + hamburguesa + queso cheddar + tocino', 30, 'Disponible'),
    ('El Infartito', 'Doble hamburguesa + doble queso cheddar + huevo + tocino + pickles', 33, 'No Disponible'),
    ('La Explosiva', '200 gr de hamburguesa rellena de queso mantecoso + tocino + pickles', 33, 'Disponible'),
    ('Chorizo Parrillero', 'Chorizo clásico en parrilla + papa', 20, 'Disponible'),
    ('Chorizo a las Finas Hierbas', 'Chorizo con una preparación de finas hierbas', 20, 'Disponible'),
    ('Filete de Pollo Marinado', 'Pollo + queso + huevo', 20, 'Disponible'),
    ('La Favorita de Mamachis', 'Filete de pollo marinado + cebolla + queso + champiñones', 26, 'Disponible'),
    ('Pa Despues del Gym', 'Pollo crocante + ensalada de col estilo KFC', 27, 'Disponible'),
    ('No te Hagas Paltas', 'Pollo crocante + salsa BBQ + deliciosa palta fresca', 27, 'Disponible');




INSERT INTO Detalle_Pedido (ID_Pedido, ID_Producto, Cantidad, Subtotal)
VALUES
    (1, 1, 2, 30),
    (1, 3, 1, 20),
    (2, 2, 3, 51),
    (2, 4, 2, 50),
    (3, 5, 1, 26),
    (3, 7, 2, 54),
    (4, 10, 3, 84),
    (4, 12, 1, 27),
    (5, 14, 2, 56),
    (5, 16, 2, 60),
    (6, 8, 1, 27),
    (6, 11, 1, 28),
    (7, 9, 2, 54),
    (7, 13, 3, 87),
    (8, 15, 1, 28),
    (8, 17, 2, 66),
    (9, 18, 1, 20),
    (9, 19, 2, 40),
    (10, 20, 3, 60),
    (10, 21, 1, 20);