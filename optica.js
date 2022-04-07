/*
https://www.tutorialesprogramacionya.com/mongodbya/detalleconcepto.php?punto=26&codigo=26&inicio=20
https://www.mongodb.com/docs/manual/
*/
/*
Revisar ids como crear...
*/

db = db.getSiblingDB('optica');
db.proveedores.drop();
db.proveedores.insertOne({
    _id: ObjectId("458525ff55ff55f48aaaaa00"),
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
    nif: "45555888Y",
    marcas: {
        _id: ObjectId("458525ff55ff55f48aaaaa01"),
        nombre:"Palomino",
        gafas: {
            _id: ObjectId("458525ff55ff55f48aaaaa02"),
            nombre_modelo:"Fashion 234",
            graduacion_d: 15.0,
            graduacion_i: 15.0,
            tipo_montura:"flotante",  /*flotante - pasta - metalica*/
            color_montura: "rojo fuego",
            color_vidrios: "transparente",
            precio: 180.50,                
        }
    }
});

/*
db.marcas.drop();
db.marcas.insertOne({
    _id: 1,
    nombre:"Palomino",
    id_proveedor: 1,
    nombre_proveedor:"Kebe SL"
});

db.gafas.drop();
db.gafas.insertOne({
    _id: 1,
    nombre_modelo:"Fashion 234",
    graduacion_d: 15.0,
    graduacion_i: 15.0,
    tipo_montura:"flotante",  
    color_montura: "rojo fuego",
    color_vidrios: "transparente",
    precio: 180.50,    
    marca: "Palomino",
    id_marca: 1, 
});
*/

db.clientes.drop();
db.clientes.insertMany([
    {
        _id: ObjectId("458525ff55ff55f48aaaaa03"), 
        nombre: "Luis Q",
        direccion: {
            calle: "micalle",
            numero_piso: 4,
            puerta: 1,
            ciudad: "Santako",
            cp: "08922",
            pais: "Españita"
        },
        telefono:"156852556",
        email: "holiwi@kiwi.com",
        fecha_reg: new Date("2022-03-25"),
    },
    {
        _id: ObjectId("458525ff55ff55f48aaaaa04"),
        nombre: "Luis Q",
        direccion: {
            calle: "micalle2",
            numero_piso: 4,
            puerta: 1,
            ciudad: "Badalona",
            cp: "08942",
            pais: "Españita"
        },
        telefono:"153762556",
        email: "holiwi2@kiwi.com",
        fecha_reg: new Date("2022-03-28"),
        cliente_recomendador: "Luis Q",
        id_cliente_recomendador: ObjectId("458525ff55ff55f48aaaaa03")  /*se que no haría falta, pero de cara a futuras consultas...*/
    }
]);