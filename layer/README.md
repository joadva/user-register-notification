# Layer de Módulos Comunes

## Descripción

Este proyecto contiene un conjunto de módulos comunes que pueden ser compartidos entre diferentes proyectos de Serverless. Estos módulos incluyen funcionalidades genéricas que pueden ser útiles en varios contextos.

## Instalación

1. Dirígete a la carpeta `layersCommonModules/nodejs`.
2. Ejecuta `npm install` para instalar las dependencias del proyecto.

## Despliegue

Una vez que hayas instalado las dependencias, regresa a la raíz del proyecto y ejecuta el siguiente comando:

sls deploy


Esto desplegará el layer en tu cuenta de AWS y te proporcionará el ARN del layer que puedes utilizar en otros proyectos.

## Uso en Otros Proyectos

1. Copia el ARN del layer que obtuviste al desplegar el layer en el paso anterior.
2. Dirígete al proyecto en el que deseas utilizar este layer.
3. Abre el archivo `serverless.ts` o cualquier otro archivo de configuración de Serverless donde desees agregar el layer.
4. Agrega el ARN del layer en la sección `layers`, como se muestra a continuación:

```ts

    layers: ['arn:aws:lambda:us-east-1:123456789012:layer:myLayer:1']

Asegúrate de reemplazar arn:aws:lambda:us-east-1:123456789012:layer:myLayer:1 con el ARN del layer que obtuviste al desplegarlo.

