# 🧪 Proyecto Node + MySQL con Docker

Este proyecto contiene una API desarrollada en Node.js con base de datos MySQL, lista para ejecutarse con Docker y Docker Compose.

---

## ✅ Requisitos

* Tener instalado:

  * [Docker](https://docs.docker.com/get-docker/)
  * [Docker Compose](https://docs.docker.com/compose/install/)

---

## ⚙️ Setup

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

---

### 2️⃣ Crear archivo `.env`

```bash
cp .env.example .env
```

Podés editar el archivo `.env` para ajustar puertos, credenciales u otros valores.

---

### 3️⃣ Levantar la base de datos y la app

```bash
docker-compose up -d mysqldb app
```

Esto construye la imagen de Node, instala dependencias y levanta la base de datos MySQL.

---

### 4️⃣ Ejecutar migraciones y seeds

```bash
docker-compose run --rm app sh -c "npx sequelize db:create && npx sequelize db:migrate && npx sequelize db:seed:all"
```

Este paso crea la base de datos, aplica las migraciones y carga datos iniciales.

---

### 5️⃣ Acceder a la API

Abrí en tu navegador:

```
http://localhost:4000
```

> ⚠️ Verificá que el puerto `NODE_LOCAL_PORT` coincida con el que definiste en el archivo `.env`.

---

## 📂 Estructura principal

```
.
├── app.js
├── docker-compose.yml
├── Dockerfile
├── .env.example
├── src/
│   ├── routes/
│   ├── controllers/
│   └── models/
└── ...
```

---

## 🐳 Comandos útiles

* **Ver logs en tiempo real**:

  ```bash
  docker-compose logs -f app
  ```

* **Detener todos los servicios**:

  ```bash
  docker-compose down
  ```

