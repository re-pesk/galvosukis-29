export function isvestiLentele(lentele, id = '#lentele') {
  const lenteleHtml = lentele.map(
    eilute => `<tr>${eilute.map(
      skaicius => `<td class="mark-${skaicius.mark}">${skaicius.val.toString()}</td>`
    ).join('')}</tr>`
  ).join('')
  document.querySelector(id).innerHTML = lenteleHtml
}

export function isvestiSkaicius(rasti, id = '#rasti') {
  const rastiHtml = rasti.map(
    eilute => { 
      console.log('Eilute: ', eilute)
      return `<tr>${[...eilute.keys()].map(
        skaicius => `<td class="${eilute.get(skaicius)}">${skaicius}</td>`
      ).join('')}</tr>`
    }
  ).join('')
  document.querySelector(id).innerHTML = rastiHtml
}

export function isvestiKontroliniusSkaicius(kontroliniaiSkaiciai, id = '#kontrole') {
  const suma = kontroliniaiSkaiciai.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.val), 0)
  console.log(suma)
  const kontroleHtml = `<tr>${kontroliniaiSkaiciai.map(
    skaicius => {
      console.log('Skaicius', skaicius)
      return `<td class="border">${skaicius.val}</td>`
    }
  ).join('<td> + </td>')}<td> = </td><td class="border">${suma}</td></tr>`
  document.querySelector(id).innerHTML = kontroleHtml
}