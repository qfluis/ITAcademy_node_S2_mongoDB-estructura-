db.articulos.drop()
for(i = 1; i <= 10; i++) {
  db.articulos.insertOne(
    {
      _id: i,  
      nombre: 'nombre'+i
    }
  )
}