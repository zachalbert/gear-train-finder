const params = {
  minTeeth: 8,
  maxTeeth: 24,
  minStages: 1,
  maxStages: 3,
  errorTolerance: 0.01,
}

// The targetRpm is relative to Mercury, which is mated to the drive shaft.
// E.G., Mercury revolves about 4x faster than the earth (a Mercurial year
// is equal to 0.2408425093 of an earth year). So Earth's targetRpm is 4.152090936
// (earth year / mercury year)
const planets = {
  "mercury" : {
    name: "Mercury",
    orbitalPeriod: 0.2408425093,
    targetRpm: 1,
  },
  "venus" : {
    name: "Venus",
    orbitalPeriod: 0.6151865558,
    targetRpm: 0.3914950792,
  },
  "earth" : {
    name: "Earth",
    orbitalPeriod: 1,
    targetRpm: 0.2408425093,
  },
  "mars" : {
    name: "Mars",
    orbitalPeriod: 1.880814874,
    targetRpm: 0.1280522143,
  },
  "ceres" : {
    name: "Ceres",
    orbitalPeriod: 4.599759964,
    targetRpm: 0.05235979947,
  },
  "jupiter" : {
    name: "Jupiter",
    orbitalPeriod: 11.86240859,
    targetRpm: 0.02030300233,
  },
  "saturn" : {
    name: "Saturn",
    orbitalPeriod: 29.44698562,
    targetRpm: 0.008178851052,
  },
  "uranus" : {
    name: "Uranus",
    orbitalPeriod: 84.01538413,
    targetRpm: 0.00286664772,
  },
  "neptune" : {
    name: "Neptune",
    orbitalPeriod: 164.7884527,
    targetRpm: 0.001461525401,
  },
  "pluto" : {
    name: "Pluto",
    orbitalPeriod: 248.0164845,
    targetRpm: 0.0009710746034,
  },
  "haumea" : {
    name: "Haumea",
    orbitalPeriod: 285.3950341,
    targetRpm: 0.0008438917309,
  },
  "makemake" : {
    name: "Makemake",
    orbitalPeriod: 309.8946078,
    targetRpm: 0.0007771755405,
  },
  "eris" : {
    name: "Eris",
    orbitalPeriod: 557.1903049,
    targetRpm: 0.0004322446159,
  },
}

/**
 * 1. For each planet in the planets object…
 * 2. Get as close to targetRpm as possible
 * 3. With the smallest number of teeth
 * 4. And the fewest stages
 */


// Figure out all possible ratios between 2 gears, within the min / max number of teeth
let possibleRatios = []

// Iterate through the input teeth
for( let input = params.minTeeth; input <= params.maxTeeth; input++ ) {
  
  // Iterate through the output teeth
  for( let output = params.minTeeth; output <= params.maxTeeth; output++ ) {
    
    possibleRatios.push({input, output, ratio: input/output});
    // outputHtml += input + ':' + output + ' = ' + input/output + '<br>'

  }
}
console.log('Possible Ratios between: ' + params.minTeeth + ' teeth and ' + params.maxTeeth + ' teeth: ', possibleRatios)


function getOutputRatios(input, output = possibleRatios.ratio) {
  let outputRatios = []
  for( let i = 0; i < input.length; i++ ) {
    for( let j = 0; j < output.length; j++ ) {
      outputRatios.push(input[i].ratio * output[j].ratio)
    }
  }
  return outputRatios
}

// NEXT
/**
 * We need to multiple all the possible ratios by themselves, up to 5 times,
 * and find the smallest amount of error
 */

let stage = []
// stage[0] = getOutputRatios(possibleRatios, possibleRatios)

// console.log(stage[0])


// for each planet's target rpm
// multiple each possible ratio by each possible ratio, 
for( planet in planets ) {
  const name = planets[planet].name
  const target = planets[planet].targetRpm
  let error = []
  let outputs = []

  console.log(name + "'s target is " + target)

  // for( let i = 0; i < possibleRatios.length; i++ ) {

  //   outputs.push(possibleRatios[i])
  //   error.push(possibleRatios[i].ratio - target);

  //   // stage 0
  //   if( error[i] < params.errorTolerance && error[i] > -(params.errorTolerance) ) {
  //     console.log(name + ' success! Error is ' + error[i] + ' with a train of ', possibleRatios[i])
  //   } else {
      
  //     // stage 1

  //   }
  // }

  // console.log(name, error)
}
