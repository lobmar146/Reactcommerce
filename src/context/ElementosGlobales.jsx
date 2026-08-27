import { createContext, useState, useEffect } from 'react'
import { createTheme } from '@mui/material/styles'

export const ElementosGlobales = createContext({})

export default function ElementosGlobalesProvider(props) {
  const { children } = props

  // Productos
  const [products, setProducts] = useState([])

  // Estado de carga
  const [loading, setLoading] = useState(false)

  // Estado de error
  const [error, setError] = useState(null)

  // Tema
  const [darkMode, setDarkMode] = useState(true)

  // Tema de Material UI
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light'
    }
  })

  // Traer productos desde la API
  async function getProducts() {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch('https://dummyjson.com/products?limit=12')

      if (!response.ok) {
        throw new Error('No se pudieron obtener los productos')
      }

      const data = await response.json()

      setProducts(data.products)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const valoresGlobales = {
    products,
    loading,
    error,
    darkMode,
    setDarkMode,
    theme
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <ElementosGlobales.Provider value={valoresGlobales}>
      {children}
    </ElementosGlobales.Provider>
  )
}
