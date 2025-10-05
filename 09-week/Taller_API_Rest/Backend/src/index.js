require('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const { swaggerUi, swaggerSpec } = require("./swagger");

app.use(express.json());

// Rutas API
app.use('/api', userRoutes);

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor en http://localhost:${PORT}\n📑 Swagger en http://localhost:${PORT}/api-docs`));
