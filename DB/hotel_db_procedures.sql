
USE hotel_db;

-- @block
delimiter // 
CREATE PROCEDURE getReservasUsuario(IN id INT) 
BEGIN
SELECT *
FROM reserva
WHERE usuarioId like id;
END // 

-- @block
delimiter // 
CREATE PROCEDURE getReservasHabitacion(IN id INT) 
BEGIN
SELECT *
FROM reserva
WHERE habitacionId like id;
END // 

-- @block
SHOW PROCEDURE STATUS
WHERE Db = DATABASE() AND Type = 'PROCEDURE';
