const prisma = require('../../prismaClient');

// Crear usuario
async function createUser(data) {
  return await prisma.user.create({ data });
}

// Listar usuarios
async function getUsers() {
  return await prisma.user.findMany();
}

// Buscar usuario por id
async function getUserById(id) {
  return await prisma.user.findUnique({ where: { id: Number(id) } });
}

// Actualizar usuario
async function updateUser(id, data) {
  return await prisma.user.update({
    where: { id: Number(id) },
    data,
  });
}

// Eliminar usuario
async function deleteUser(id) {
  return await prisma.user.delete({ where: { id: Number(id) } });
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
