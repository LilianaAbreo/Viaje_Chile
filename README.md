# Prueba Viajes Chile

## Elaborado por Liliana Abreo
## Enlace de la página https://lilianaabreo.github.io/prueba_Viajes/

# Para recordar.

## Para iniciar git.
```bash
    git init
 ```
## Para agregar todos los cambios.
```bash
    git --all
 ```
o
```bash
    git add.
 ```
## Para crear nuestra versión usamos commit
```bash
    git commmit -m "título del comit"
 ```
 o

 ## Para crear nuestra versión usamos commit solo para modificaciones, pero no para nuevo archivos.
```bash
    git commmit -am "título del comit"
 ```

## para regresar a estado normal pero con solo archivos modificados
```bash
    git reset --hard
 ```
## Para reconstruir todos los archivos sobre el último commit
```bash
    git checkout -- .
 ```
 ## Para verificar cuantos commit tengo
```bash
    git log
 ```
  ## Para crear una rama
```bash
     git branch nombre_rama
 ```
   ## Para cambiar a una rama
```bash
    git checkout nombre_rama
 ```
 ## Para crear y cambiar a la rama
```bash
    git checkout -b nombre_rama
 ```
  ## ver todo el listado de ramas
```bash
    git branch
 ```
  ## Para eliminar una rama
```bash
    git branch -d nombre_rama_a_eliminar
 ``` 
 #  github
 Para crear el repositorio remoto de git hub (Recomendación, copiar todo el link cuando creamos nuevo repositorio desde github)

```bash
    git remote ruta_del_github
 ```
 para subir a github
 ```bash
    git push -u origin rama_a_subir
 ```

 para saber si hay actualizaciones en el repositorio de github
  ```bash
    git fetch
 ```
 para descargar todas las actualizaciones pero especificaciones de una ramaque eseas (recomendaciones ubicarse en la rama que deseas descargar los cambios)
   ```bash
    git pull
 ```

# Configuracion del git

Para ver la versión del git
```bash
    git --version
 ``` 
 Para configurar nombre git
```bash
    git config --global user.name "Liliana Abreo"
 ``` 

 Para configurar correo git (recomendacion escibir la mim cuenta de corre de github)
```bash
    git config --global user.email "correo@gmail.com"
 ``` 