import './assets/styles/index.scss'

const modules = import.meta.glob(['./assets/styles/*.scss'], { eager: true })
console.log(modules)
export default modules
