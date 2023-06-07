import { gautiLentele, gautiSkaicius } from './js/ikelti-duomenis.js'
import { isvestiLentele, isvestiSkaicius, isvestiKontroliniusSkaicius } from './js/isvesti-duomenis.js'
import { apdorotiLentele } from './js/apdoroti-duomenis.js'

const pradineLentele = gautiLentele()
const pradiniaiSkaiciai = gautiSkaicius()

const [galutineLentele, galutiniaiSkaiciai, kontroliniaiSkaiciai] = apdorotiLentele(pradineLentele, pradiniaiSkaiciai)

isvestiLentele(galutineLentele)
isvestiSkaicius(galutiniaiSkaiciai)
isvestiKontroliniusSkaicius(kontroliniaiSkaiciai)

console.log(pradineLentele)
console.log(galutineLentele)
console.log(pradiniaiSkaiciai)
console.log(galutiniaiSkaiciai)
console.log(kontroliniaiSkaiciai)
