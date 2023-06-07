import { lenteleStr, skaiciaiStr } from '../data/duomenys.js'
import { range } from './helpers.js'

export function gautiLentele() {
  return lenteleStr
    .trim()
    .split("\n")
    .map(
      eilute => eilute
        .split('')
        .map(
          skaicius => ({ val: skaicius, mark: 0 })
        )
    )
}

export function gautiSkaicius() {
  const skaiciai = range(0, 9, 1).map(element => new Map())
  skaiciaiStr
    .trim()
    .split("\n")
    .forEach(
      skaicius => skaiciai[skaicius.charAt(0)].set(skaicius, '')
    );
  return skaiciai
}