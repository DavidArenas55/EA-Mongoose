# EA Node.js + TypeScript + Mongoose

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu sistema:

- [Node.js](https://nodejs.org/) (versión 14.x o superior)
- [MongoDB](https://www.mongodb.com/) (puede ser local o en la nube a través de MongoDB Atlas)
- [npm](https://www.npmjs.com/) 

Instalar TypeScript
```
npm install -g typescript
```

## Clonar el proyecto

```
git clone https://github.com/rocmeseguer/EA-Mongoose
cd EA-Mongoose
```

## Dependencias del proyecto

Instalar Mongoose y otras dependencias
```
npm install
```

## Estructura del proyecto

```
├── src
├── dist
├── package.json       # Configuración de las dependencias y scripts
├── tsconfig.json       # Configuración de TypeScript
├── node_modules
├── .gitignore
├── LICENSE
└── README.md
```

## Complilación y ejecución

Transpilar de TS a JS
```
tsc 
```

Ejecutar JS
```
node dist/mongoose.js
```

Referencias:
- https://www.youtube.com/watch?v=lWMemPN9t6Q&t=7s
- https://www.youtube.com/watch?v=gfP3aqV38q4
- ChatGPT
- Copilot dentro de visual studio code