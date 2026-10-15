# ⚡ TechStore - E-Commerce en React

¡Bienvenido a **TechStore**! Este es un proyecto de aplicación e-commerce desarrollado en **React** utilizando **Vite** como entorno de desarrollo rápido, **React-Bootstrap** para el diseño de interfaces responsivas y **React Router DOM** para la gestión dinámica de la navegación.

Este proyecto simula el flujo de compra completo de un rubro tecnológico, cumpliendo con una arquitectura limpia basada en componentes y un manejo global del estado del carrito mediante la API de Context de React.

---

## 🚀 Características Principales

*   **Catálogo Dinámico:** Filtrado de productos en tiempo real por categorías (Celulares, Laptops, Tablets) a través de la URL.
*   **Detalle del Producto:** Vista individualizada para consultar descripciones, imágenes y precios detallados.
*   **Gestión del Carrito:** Selector de cantidades dinámico con validaciones para agregar, actualizar o remover elementos del carrito.
*   **Estado Global Centralizado:** Contexto global para la gestión reactiva de totales de dinero y cantidad de ítems.
*   **Resumen de Compra:** Un desglose interactivo de los productos seleccionados previo a la confirmación de la orden.
*   **Simulación de API:** Llamadas asíncronas optimizadas mediante promesas simulando retardos de red reales.

---

## 🛠️ Tecnologías y Librerías Utilizadas

*   **React 18** (Hooks: `useState`, `useEffect`, `useContext`, `useParams`)
*   **Vite** (Entorno de desarrollo ágil)
*   **React Router DOM** (Navegación SPA)
*   **React Bootstrap** & **Bootstrap 5** (Layout y componentes de interfaz)
*   **Font Awesome** (Iconografía estilizada)
*   **Oxlint** / **ESLint** (Control de calidad de código y buenas prácticas)

---

## 📂 Estructura del Árbol de Componentes

La arquitectura de la aplicación se organiza de la siguiente manera para garantizar escalabilidad y modularidad:

```text
src/
├── context/
│   └── CartContext.jsx          # Contexto global y lógica de negocio del carrito.
├── mock/
│   └── asyncMock.js            # Simulación de llamadas de API asíncronas.
├── components/
│   ├── NavBar.jsx              # Barra de navegación superior con links a categorías.
│   ├── CartWidget.jsx          # Ícono del carrito flotante con indicador de cantidad.
│   ├── ItemListContainer.jsx   # Contenedor encargado de solicitar datos del catálogo.
│   ├── ItemList.jsx            # Mapeo y distribución de las cards de productos.
│   ├── Item.jsx                # Presentación visual individual de cada producto.
│   ├── ItemDetailContainer.jsx # Contenedor encargado de buscar el producto por ID en la URL.
│   ├── ItemDetail.jsx          # Vista detallada de un único producto.
│   ├── ItemQuantitySelector.jsx# Selector de unidades (+ / -).
│   ├── AddItemButton.jsx       # Botón de confirmación para agregar al Context.
│   ├── Checkout.jsx            # Vista final del proceso de compra.
│   └── Brief.jsx               # Desglose e informe del total de ítems en el Checkout.
├── App.jsx                     # Enrutador principal y layout global.
└── main.jsx                    # Punto de entrada de la aplicación e inyección de Bootstrap.
```

---

## 💻 Instalación y Configuración Local

Sigue estos pasos para clonar el repositorio y ejecutar la aplicación en tu entorno de desarrollo local:

### Prerrequisitos
Es necesario tener instalado **Node.js** (versión LTS recomendada) y su gestor de paquetes **npm**.

### Paso 1: Clonar el repositorio
```bash
git clone https://github.com
cd ecommerce-react
```

### Paso 2: Instalar las dependencias de software
```bash
npm install
```

### Paso 3: Iniciar el servidor de desarrollo local
```bash
npm run dev
```
*Una vez iniciado el comando, abre en tu navegador la dirección provista por la consola (generalmente `http://localhost:5173`).*

### Paso 4: Construir para producción (Build)
Si deseas compilar el código optimizado para su despliegue final:
```bash
npm run build
```

---
## 📝 Detalles de Implementación Técnica
1.  **Inmutabilidad del Estado:** En `CartContext.jsx`, las actualizaciones del arreglo de productos evitan mutaciones directas mediante el operador de propagación (`...`), forzando de manera segura los renderizados de React.
2.  **Sincronización:** Los componentes contenedores limpian e inicializan sus estados de carga (`loading`) para asegurar una experiencia de usuario fluida mediante animaciones de carga (`Spinners`).
3.  **Encapsulamiento del Brief:** El componente `Brief` se mantiene desacoplado de la lógica global y procesa estrictamente las operaciones mediante la inyección estructurada de propiedades (Props).

## 📝 Pantallas de salida
<img width="921" height="368" alt="image" src="https://github.com/user-attachments/assets/ae09cc99-d1b2-4e7b-ae7f-895d00738735" />

<img width="921" height="345" alt="image" src="https://github.com/user-attachments/assets/5f8976aa-2a3b-4a0b-a139-d3935b2d70c0" />

<img width="921" height="345" alt="image" src="https://github.com/user-attachments/assets/fa7963b5-7281-4ae8-98dc-0a06fcb6cf8c" />








