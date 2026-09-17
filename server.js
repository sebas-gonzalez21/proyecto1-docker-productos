const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

// datos en memoria, arrancan con un par de productos de ejemplo
let productos = [
  { id: 1, nombre: 'Camiseta', precio: 45000 },
  { id: 2, nombre: 'Pantalon', precio: 89000 }
];

// listar todos
app.get('/productos', (req, res) => {
  res.json(productos);
});

// obtener uno por id
app.get('/productos/:id', (req, res) => {
  const producto = productos.find(p => p.id === parseInt(req.params.id));
  if (!producto) {
    return res.status(404).json({ mensaje: 'producto no encontrado' });
  }
  res.json(producto);
});

// crear uno nuevo
app.post('/productos', (req, res) => {
  const { nombre, precio } = req.body;
  const nuevoProducto = {
    id: productos.length ? productos[productos.length - 1].id + 1 : 1,
    nombre,
    precio
  };
  productos.push(nuevoProducto);
  res.status(201).json(nuevoProducto);
});

// actualizar uno existente
app.put('/productos/:id', (req, res) => {
  const producto = productos.find(p => p.id === parseInt(req.params.id));
  if (!producto) {
    return res.status(404).json({ mensaje: 'producto no encontrado' });
  }
  const { nombre, precio } = req.body;
  if (nombre !== undefined) producto.nombre = nombre;
  if (precio !== undefined) producto.precio = precio;
  res.json(producto);
});

// eliminar uno
app.delete('/productos/:id', (req, res) => {
  const index = productos.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ mensaje: 'producto no encontrado' });
  }
  productos.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto ${PORT}`);
});