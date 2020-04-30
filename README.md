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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Section'
    },
    isVisible: {
        type: Boolean,
        default: true
    },
    wantsToHelp: {
        type: Boolean,
        default: false
    },
    needsHelp: {
        type: Boolean,
        default: true
    },
}
```
- /category {get} : Traer todas las categorias
- /category/ {post} : Crear una categoria 
- /category/section/:id {post} : Filtrar categorias por secciones 

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
    address: {
        type: String
    },
    waysHelp: {
        type: String
    },
    phone: {
        type: String
    },
    whatsapp: {
        type: String
    },
    facebook: {
        type: String
    },
    instagram: {
        type: String
    },
    twitter: {
        type: String
    },
    other: {
        type: String
    },
    email: {
        type: String
    },
    coordinates: {
        type: String
    },
    referenceAddress: {
        type: String
    },
    website: {
        type: String
    },
    image: {
        type: String
    },
    daysService: {
        type: String
    },
    schedule: {
        type: String
    },
    keywords: [{
        type: String
    }],
    nameResponsable: {
        type: String
    },
    phoneResponsable: {
        type: String
    },
    emailResponsable: {
        type: String
    },
    belongsProject: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    wantsToHelp: {
        type: Boolean,
        default: false
    },
    needsHelp: {
        type: Boolean,
        default: true
    },
    zone: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Zone'
    },
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }],
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
