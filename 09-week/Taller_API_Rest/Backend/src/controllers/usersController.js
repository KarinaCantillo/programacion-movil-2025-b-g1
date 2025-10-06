const prisma = require('../prismaClient');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

// Crear usuario
exports.createUser = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const usuario = await prisma.user.create({
      data: { nombre, email, password: hashedPassword }
    });

    res.status(201).json({ 
      id: usuario.id, 
      nombre: usuario.nombre, 
      email: usuario.email 
    });

  } catch (error) {
    console.error("Error al crear usuario:", error);
    res.status(500).json({ error: error.message });
  }
};

// Listar usuarios
exports.getUsers = async (req, res) => {
  try {
    const usuarios = await prisma.User.findMany();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener usuario por ID
// Obtener usuario por ID
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const usuario = await prisma.User.findUnique({
      where: { id },
    });

    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar usuario
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { nombre, email, password } = req.body;

  try {
    // Verificamos si existe el usuario antes de actualizarlo
    const existeUsuario = await prisma.User.findUnique({
      where: { id },
    });

    if (!existeUsuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Si envía nueva contraseña, la encriptamos
    let dataToUpdate = { nombre, email };
    if (password) {
      const bcrypt = require("bcryptjs");
      const hashedPassword = await bcrypt.hash(password, 10);
      dataToUpdate.password = hashedPassword;
    }

    const usuarioActualizado = await prisma.User.update({
      where: { id },
      data: dataToUpdate,
    });

    res.json({
      message: "Usuario actualizado correctamente",
      usuario: usuarioActualizado,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Eliminar usuario
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await prisma.User.findUnique({ where: { id } });

    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    await prisma.User.delete({ where: { id } });

    res.json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const usuario = await prisma.User.findUnique({
      where: { email },
    });

    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const passwordValida = await bcrypt.compare(password, usuario.password);

    if (!passwordValida) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    const token = generateToken(usuario.id);
    res.json({ message: "Inicio de sesión exitoso", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
