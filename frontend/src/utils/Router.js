import { LoginPage } from '../pages/LoginPage.js'
import { RegisterPage } from '../pages/RegisterPage.js'
import { Login } from './Loign.js'
import { Register } from './Register.js'
import { Navbar } from '../components/Navbar.js'
import { Footer } from '../components/Footer.js'
import { HomePage } from '../pages/HomePage.js'
import { BlogPage } from '../pages/BlogPage.js'
import { AboutPage } from '../pages/AboutPage.js'

export function Router() {
  const pathname = window.location.pathname
  const app = document.getElementById('app')

  if (pathname === '/login') {
    app.appendChild(LoginPage())
    Login()
  } else if (pathname === '/register') {
    app.appendChild(RegisterPage())
    Register()
  } else if (pathname === '/home') {
    app.appendChild(Navbar())
    app.appendChild(HomePage())
    app.appendChild(Footer())
  } else if (pathname === '/blog') {
    app.appendChild(Navbar())
    app.appendChild(BlogPage())
    app.appendChild(Footer())
  } else if (pathname === '/about') {
    app.appendChild(Navbar())
    app.appendChild(AboutPage())
    app.appendChild(Footer())
  } else {
    app.innerHTML = '<h1>404 Not Found</h1>'
  }
}
