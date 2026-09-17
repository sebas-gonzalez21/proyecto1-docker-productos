# API REST de Productos con Docker

API REST simple para gestionar productos de una tienda virtual, construida con Node.js y Express, empaquetada en una imagen Docker propia para poder correr en cualquier equipo sin instalar Node.

## Requisitos

- Docker instalado (Docker Desktop o Docker Engine)
- Opcional para desarrollo local sin contenedor: Node.js 20+

## Endpoints

| Método | Ruta              | Descripción                  |
|--------|-------------------|-------------------------------|
| GET    | /productos        | Lista todos los productos    |
| GET    | /productos/:id    | Obtiene un producto por id    |
| POST   | /productos        | Crea un producto nuevo        |
| PUT    | /productos/:id    | Actualiza un producto         |
| DELETE | /productos/:id    | Elimina un producto           |

## Cómo construir la imagen


docker build -t productos-api:v1 .


## Cómo ejecutar el contenedor


docker run -d --name productos-api-container -p 3000:3000 productos-api:v1


La API queda disponible en `http://localhost:3000`.

## Comandos útiles

docker ps                              # ver contenedores activos
docker logs productos-api-container    # ver logs
docker stop productos-api-container    # detener
docker start productos-api-container   # volver a iniciar
docker rm productos-api-container      # eliminar