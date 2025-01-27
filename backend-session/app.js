import cors from 'cors'
import express from 'express'
import session from 'express-session'
import morgan from 'morgan'
import path from 'path'

import { database } from './db/database.js'
import { SECRET_KEY } from './db/config/config.js'

const app = express()
const PORT = process.env.PORT || 4000

const __dirname = path.resolve()

// Middlewares
app.use(
  cors({
    // Permitir solicitudes desde el front-end
    origin: ['http://localhost:5500', 'http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Habilitar envío de cookies
  })
)
app.use(morgan('dev'))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(
  session({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false, // true solo si usas HTTPS
      httpOnly: true, // evita acceso a cookie desde JavaScript del cliente
      // sameSite: 'lax' // permite envío de cookies en navegadores modernos
    },
  })
)

// Ruta para manejar el registro de usuarios
app.post('/register', async (req, res) => {
  const { username, password } = req.body

  try {
    const connection = await database()
    const [results] = await connection.query(
      'SELECT * FROM users WHERE username = ? ',
      [username]
    )
    const userExists = results.length > 0

    if (userExists) {
      return res.status(400).json({ message: 'El usuario ya existe' })
    }
  } catch (error) {
    console.log(error)
  }

  try {
    const connection = await database()
    const [results] = await connection.query(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, password]
    )
  } catch (error) {
    console.log(error)
  }
  return res.json({ message: 'Usuario creado exitosamente' })
})

// Ruta para manejar el inicio de sesión
app.post('/login', async (req, res) => {
  const { username, password } = req.body
  const connection = await database()
  // Buscar usuario
  const [results] = await connection.query(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [username, password]
  )
  const user = results[0]

  if (user) {
    // Guardar información del usuario en la sesión
    req.session.userId = user.id
    req.session.username = user.username

    return res.json({
      message: 'Inicio de sesión exitoso',
      user: { id: user.id, username: user.username },
    })
  } else {
    return res.status(401).json({ message: 'Credenciales incorrectas' })
  }
})

// Ruta para obtener los datos de la sesión
app.get('/session', (req, res) => {
  if (req.session.userId) {
    return res.json({
      loggedIn: true,
      user: { id: req.session.userId, username: req.session.username },
    })
  } else {
    return res
      .status(401)
      .json({ loggedIn: false, message: 'No hay sesión activa' })
  }
})

// Ruta para cerrar la sesión
app.post('/logout', (req, res) => {
  console.log(req.session)
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Error al cerrar la sesión' })
    }
    res.clearCookie('connect.sid') // Nombre de cookie por defecto para express-session
    return res.json({ message: 'Sesión cerrada exitosamente' })
  })
})

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}/`)
)
