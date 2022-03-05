# Breeze
## Genral Info
The basic proejct setup is from another project from Markus and can be found [here](https://gitlab.com/interface-and-interaction-design/iid-project-design-a)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Dockerize

```
docker build -t breeze .
docker run -it -p 8080:80 --rm --name breeze breeze
```