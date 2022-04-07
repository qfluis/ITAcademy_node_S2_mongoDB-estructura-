/*
https://www.tutorialesprogramacionya.com/mongodbya/detalleconcepto.php?punto=26&codigo=26&inicio=20
*/
/*
Revisar ids como crear...
*/

db = db.getSiblingDB('optica');
db.proveedores.drop();
db.proveedores.insertOne({
    _id: 1,
    nombre: "Luisete Quevedete SL",
    direccion: {
        calle: "micalle",
        numero_piso: 4,
        puerta: 1,
        ciudad: "Santako",
        cp: "08922",
        pais: "Españita"
    },
    telefono: "655888999",
    fax: "155558556",
    nif: "45555888Y"
});

db.marcas.drop();
db.marcas.insertOne({
    _id: 1,
    nombre:"Palomino",
    id_proveedor: 1,
    nombre_proveedor:"Luisete Quevedete SL"
});

db.gafas.drop();
db.gafas.insertOne({
    _id: 1,
    nombre_modelo:"Fashion 234",
    graduacion_d: 15.0,
    graduacion_i: 15.0,
    tipo_montura:"flotante",  /*flotante - pasta - metalica*/
    color_montura: "rojo fuego",
    color_vidrios: "transparente",
    precio: 180.50,
    id_marca: 1,
    marca: "Palomino",
});

db.clientes.drop();
