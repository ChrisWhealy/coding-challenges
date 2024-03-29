const { parse } = require('./parser.js')

const results = [
  "Cardiff West, 11014, C, 17803, L, 4923, UKIP, 2069, LD",
  "Islington South & Finsbury, 22547, L, 9389, C, 4829, LD, 3375, UKIP, 3371, G, 309, Ind"
]

const main = () => {
  results.forEach(result => console.log(`${parse(result)}`))
}

main()
