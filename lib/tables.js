
const mysql = require("mysql2");
const { config } = require("../config/conf");

const getAll = (table) => {
    return new Promise((resolve, reject) => {
        const conecction = mysql.createConnection({
            user: config.dbUser,
            host: config.dbHost,
            password: config.dbPassword,
            database: config.dbName,
        });

        conecction.query(`SELECT * FROM ${table}`, (err, results) => {
            if (err) return console.error(err.message);
            conecction.end();
            resolve(results);
        });
    });
};

const get = (table, id) => {
    return new Promise((resolve, reject) => {
        const conecction = mysql.createConnection({
            user: config.dbUser,
            host: config.dbHost,
            password: config.dbPassword,
            database: config.dbName,
        });

        conecction.query(`SELECT * FROM ${table} WHERE ${table + "ID"}=${id}`, (err, results) => {
            if (err) return console.error(err.message);
            conecction.end();
            resolve(results);
        });
    });
};

const create = async (table, entity) => {
    const conecction = mysql.createConnection({
        user: config.dbUser,
        host: config.dbHost,
        password: config.dbPassword,
        database: config.dbName,
    });

    let data = [];
    let valuesString = "";

    switch (table) {
        case "Usuario":
            data = [entity.Nombre, entity.Apellido, entity.CorreoElectronico, entity.Contrasena, entity.Direccion, entity.Telefono];
            valuesString = "(Nombre, Apellido, CorreoElectronico, Contrasena, Direccion, Telefono) VALUES(?, ?, ?, ?, ?, ?)";
            break;

        case "Sede":
            data = [entity.NombreSede, entity.Direccion, entity.Telefono, entity.HorariosAtencion];
            valuesString = "(NombreSede, Direccion, Telefono, HorariosAtencion) VALUES(?, ?, ?, ?)";
            break;

        case "Pedido":
            data = [entity.ID_Usuario, entity.ID_Sede, entity.FechaHoraPedido, entity.EstadoPedido];
            valuesString = "(ID_Usuario, ID_Sede, FechaHoraPedido, EstadoPedido) VALUES(?, ?, ?, ?)";
            break;

        case "Producto":
            data = [entity.NombreProducto, entity.Descripcion, entity.Precio, entity.Disponibilidad];
            valuesString = "(NombreProducto, Descripcion, Precio, Disponibilidad) VALUES(?, ?, ?, ?)";
            break;

        case "Detalle_Pedido":
            data = [entity.ID_Pedido, entity.ID_Producto, entity.Cantidad, entity.Subtotal];
            valuesString = "(ID_Pedido, ID_Producto, Cantidad, Subtotal) VALUES(?, ?, ?, ?)";
            break;

        default:
            break;
    }

    return new Promise((resolve, reject) => {
        conecction.query(`INSERT INTO ${table} ${valuesString}`, data, (err) => {
            if (err) {
                console.log(data);
                console.log(valuesString);
                return console.error(err.message, ":v ?");
            }
            console.log(`${table} creada`);
            resolve("done");
            conecction.end();
        });
    });
};


module.exports = { getAll, get, create };
