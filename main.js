// import './assets/sass/info.scss'

const modules = import.meta.glob(['./assets/sass/*.scss'], { eager: true })
console.log(modules)
export default modules
