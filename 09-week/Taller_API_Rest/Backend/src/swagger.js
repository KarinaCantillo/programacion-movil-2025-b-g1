const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Usuarios - Taller Unidad 2",
      version: "1.0.0",
      description: "API REST para la gestión de usuarios con Express, Prisma y JWT",
    },
    servers: [
      { url: "http://localhost:3000/api" }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        }
      }
    },
    security: [{ bearerAuth: [] }]
  },
  apis: ["./src/routes/*.js"], // 👈 aquí escanea las rutas con los comentarios @swagger
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerUi, swaggerSpec };
