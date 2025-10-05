const prisma = require('../prismaClient');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

// Crear usuario
exports.createUser = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const usuario = await prisma.usuario.create({
      data: { nombre, email, password: hashedPassword }
    });

    res.status(201).json({ 
      id: usuario.id, 
      nombre: usuario.nombre, 
      email: usuario.email 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Listar usuarios
exports.getUsers = async (req, res) => {
  const usuarios = await prisma.usuario.findMany();
  res.json(usuarios);
};

// Obtener usuario por ID
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  const usuario = await prisma.usuario.findUnique({ where: { id } });
  usuario ? res.json(usuario) : res.status(404).json({ message: "Usuario no encontrado" });
};

// Actualizar usuario
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { nombre, email } = req.body;
  try {
    const usuario = await prisma.usuario.update({
      where: { id },
      data: { nombre, email }
    });
    res.json(usuario);
  } catch {
    res.status(404).json({ message: "Usuario no encontrado" });
  }
};

// Eliminar usuario
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.usuario.delete({ where: { id } });
    res.json({ message: "Usuario eliminado" });
  } catch {
    res.status(404).json({ message: "Usuario no encontrado" });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const usuario = await prisma.usuario.findUnique({ where: { email } });

  if (usuario && (await bcrypt.compare(password, usuario.password))) {
    const token = generateToken(usuario.id);
    res.json({ token });
  } else {
    res.status(401).json({ message: "Credenciales inválidas" });
  }
};
