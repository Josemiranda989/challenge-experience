# 💼 API de Productos y Usuarios

Proyecto challenge_experience desarrollado con Node.js, Express y Sequelize. Esta API permite gestionar productos y usuarios, incluyendo sus relaciones (por ejemplo, un producto pertenece a una categoría y tiene un vendedor).

---

## 📦 Tecnologías utilizadas

- Node.js
- Express
- Sequelize (ORM)
- MySQL
- dotenv
- Docker

---

## ⚙️ Instalación

### Requisitos

- Node.js v18+
- MySQL
- Docker
- Docker compose

### Pasos sin docker

- Clonar repositorio
```bash
git clone https://github.com/Josemiranda989/challenge-experience
```

#### 🢟 para Windows

```bash
npm run first-step-win && npm start
```

#### 🐧 para Unix / Mac

```bash
npm run first-step-unix && npm start
```

### Pasos CON DOCKER

- Clonar repositorio
```bash
git clone https://github.com/Josemiranda989/challenge-experience
```

#### 🢟 para Windows
1- Correr comando para levantar las imagenes de node y mysql
```bash
docker-compose up -d mysqldb app
```


2- Correr comando para migrar db con seeders (solo por primera vez)
```bash
docker-compose run migrate  
```

Este script:

- Copia el archivo `.env.example` a `.env`
- Instala las dependencias (`npm i`)
- Crea la base de datos
- Ejecuta las migraciones
- Ejecuta los seeders

---

## 🚀 Scripts disponibles

| Comando           | Descripción                           |
| ----------------- | ------------------------------------- |
| `npm start`       | Inicia el servidor                    |
| `npm run dev`     | Inicia en modo desarrollo con nodemon |
| `npm run db:drop` | Elimina la base de datos              |

---

## 🌐 Endpoints

### Productos

| Método | Ruta                              | Descripción                                        |
| ------ | --------------------------------- | -------------------------------------------------- |
| GET    | `/api/products`                   | Lista todos los productos con categoría y vendedor |
| GET    | `/api/products/:id`               | Devuelve el detalle de un producto por su ID       |
| GET    | `/api/products/search?name=Phone` | Busca productos por nombre                         |

### Usuarios

| Método | Ruta         | Descripción                               |
| ------ | ------------ | ----------------------------------------- |
| GET    | `/api/users` | Lista todos los usuarios con asociaciones |

### Endpoint base

| Método | Ruta   | Descripción                    |
| ------ | ------ | ------------------------------ |
| GET    | `/api` | Bienvenida + rutas disponibles |

---

## 📄 Estructura general del proyecto

```

├── controllers/
├── database/
│   ├── config/
│   ├── migrations/
│   ├── models/
│   └── seeders/
├── routes/
├── app.js
├── .env.example
├── package.json
└── README.md
```

---

## ✍️ Autor

Este proyecto fue desarrollado con fines educativos. Puedes usarlo como base para tu propio backend o para practicar integraciones RESTful con Sequelize.
