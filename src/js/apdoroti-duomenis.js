import { range } from './helpers.js'

const kryptys = [
  { x: 1, y: 0, k: 8 },   // 1000 - h
  { x: 1, y: 1, k: 2 },   // 0010 - d
  { x: 0, y: 1, k: 4 },   // 0100 - v
  { x: -1, y: 1, k: 1 },  // 0001 - 
  { x: -1, y: 0, k: 8 },  // 1000
  { x: -1, y: -1, k: 2 }, // 0010
  { x: 0, y: -1, k: 4 },  // 0100
  { x: 1, y: -1, k: 1 },  // 0001
]

export function apdorotiLentele(lentele, skaiciai) {
  const galutineLentele = []
  skaiciai.forEach((skaiciuGrupe, indeksas) => {
    console.log(`skaiciuGrupe ${indeksas} => `, skaiciuGrupe)
    lentele.forEach(
      (eilute, eilNum) => eilute.forEach(
        (skaicius, stulpNum) => {
          if (skaicius.val === `${indeksas}`) {
            console.log(`lentele(${stulpNum}, ${eilNum}) => ${skaicius.val}`)
            kryptys.forEach(
              kryptis => {
                console.log(kryptis)
                if (kryptis.x > 0 && stulpNum > 10) {
                  return;
                }
                if (kryptis.x < 0 && stulpNum < 6) {
                  return
                }
                if (kryptis.y > 0 && eilNum > 10) {
                  return;
                }
                if (kryptis.y < 0 && eilNum < 6) {
                  return;
                }
                console.log('+')
                const sk = range(0, 6, 1).map(skaitmensEilNum => lentele[eilNum + skaitmensEilNum * kryptis.y][stulpNum + skaitmensEilNum * kryptis.x].val).join('')
                if (!skaiciuGrupe.has(sk)) {
                  return
                }
                console.log(sk)
                skaiciuGrupe.set(sk, 'rastas')
                range(0, 6, 1).forEach(skaitmensEilNum => {
                  const naujasEilNum = eilNum + skaitmensEilNum * kryptis.y
                  const naujasStulpNum = stulpNum + skaitmensEilNum * kryptis.x
                  const mark = lentele[naujasEilNum][naujasStulpNum].mark
                  lentele[naujasEilNum][naujasStulpNum].mark = mark | kryptis.k
                })
                console.log(`skaiciuGrupe ${indeksas} => `, skaiciuGrupe)
              }
            )
          }
        }
      )
    )
  })
  const kontroliniaiSkaiciai = lentele.flat().filter(element => element.mark < 1)
  return [lentele, skaiciai, kontroliniaiSkaiciai]
}