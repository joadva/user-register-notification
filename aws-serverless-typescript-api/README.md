# Documentación del Proyecto

## Descripción

Este proyecto consta de operaciones CRUD para usuarios, junto con funcionalidades de inicio de sesión y registro utilizando AWS Cognito.

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando:

npm install


## Configuración

### AWS Layer

Antes de desplegar el proyecto, asegúrate de desplegar un AWS Layer que contenga las dependencias necesarias para ejecutar el proyecto. Utiliza el siguiente comando:

sls deploy 

en el proyecto del layer y obtener el arn despues de esto
valla al archivo serverless.ts 

layers:[]
 cambie el valor al del layer obtenido

### Variables de Entorno

Configura las siguientes variables de entorno en el archivo `serverlest.ts` 

- AWS_RDS_DBNAME: Nombre de la base de datos de Amazon RDS.
- AWS_RDS_PASSWORD: Contraseña de la base de datos de Amazon RDS.
- AWS_RDS_HOST: Host de la base de datos de Amazon RDS.
- AWS_RDS_DIALECT: Dialecto de la base de datos de Amazon RDS.
- AWS_RDS_PORT: Puerto de la base de datos de Amazon RDS.
- COGNITO_CLIENT_ID: ID del cliente de Amazon Cognito.
- COGNITO_USER_POOL_ID: ID del grupo de usuarios de Amazon Cognito.
- EMAIL_SEND: Dirección de correo electrónico desde la cual se enviarán los correos electrónicos.
- EMAIL_FROM: Dirección de correo electrónico a la cual se enviarán los correos electrónicos.
- AWS_REGION: Región de AWS en la cual se desplegará el proyecto.

## Ejecución Local

Para ejecutar el proyecto localmente, utiliza el siguiente comando:

sls offline

Esto iniciará el servidor local en http://localhost:3000.

## Despliegue

Para desplegar el proyecto en AWS, utiliza el siguiente comando:

sls dedploy


Este comando desplegará todas las funciones Lambda y configuraciones necesarias en tu cuenta de AWS.

## Documentación de 

Dejo una documentacion de consulta para postman

https://documenter.getpostman.com/view/6644749/2s9YypFiaT



Para obtener más detalles sobre los parámetros de solicitud y respuestas de cada endpoint, consulta el código fuente del proyecto.

