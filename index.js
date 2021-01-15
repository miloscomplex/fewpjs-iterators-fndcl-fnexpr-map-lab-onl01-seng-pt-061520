const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return text
}

let text = tutorials.map(tutorial => {
    let strArr = tutorial.split(" ")
    let upperCase = strArr.map(str => {
        return str.charAt(0).toUpperCase() + str.substring(1, str.length)
    })
    let joined = upperCase.join(' ')
    return joined
})
