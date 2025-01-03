# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Docker

build docker image

```
$ docker build -t student-web -f ./deploy/Dockerfile .
```

run [container](http://localhost:8080/)

```
$ docker run -d -p 8080:80 --name my-nginx-container student-web:latest
```
