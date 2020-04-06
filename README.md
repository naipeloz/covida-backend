# Covida backend

https://covida-backend.herokuapp.com/zone 

# API
## Zonas
Barrios o departamentos de Uruguay
```
{
    name: {
        type: String,
        required: true
    }
}
```
- /zone {get} : Traer todas las zonas
- /zone/create {post} : Crear una zona 

## Secciones
También llamados segmentos, inicialmente se contemplan 3 (Personas vulnerables, Pymes y desempleados, Recursos para la cuarentena) 
```
{
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
}
```
- /section {get} : Traer todas las secciones
- /section/create {post} : Crear una zona 

## Categorias
Filtros disponibles para las iniciativas creadas en las diferentes secciones
```
{
    name: {
        type: String,
        required: true
    },
    color: {
        type: String
    },
    section: {
        type: ObjectId,
        ref: 'Section'
    },
}
```
- /category {get} : Traer todas las categorias
- /category/ {post} : Crear una categoria 
- /category/zone/:id {post} : Filtrar categorias por zona 

## Proyectos
Iniciativas, fundaciones, entidades gubernamentales que esten ofreciendo ayuda
```
{
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    zone: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Zone'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
}
```
- /project {get} : Traer todos los proyectos
- /project/create {post} : Crear un proyecto
- /project/createAll/ {post} : Crear varios proyectos a la vez, el input debe ser un json con un array de proyectos dentro de "project"
- /project/category/:id {post} : Filtrar proyectos por categorias

### .env
```
ENV = 
MONGODB_URI = 
AUTH0_DOMAIN =
API_IDENTIFIER =
```
### Installation
```sh
$ git clone git@github.com:naipeloz/covida-backend.git
$ cd covida-backend
$ npm install
$ node run start
```
