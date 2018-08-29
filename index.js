// Code your solution in this file.

const lowerCaseDrivers = drivers => drivers.map (driver => driver.toLowerCase())


const nameToAttributes = drivers => drivers.map (driver => {
     const firstName = driver.split(' ')[0]
     const lastName = driver.split(' ')[1]
    return {firstName: firstName, lastName: lastName}
  })


const attributesToPhrase = drivers => drivers.map (driver => `${driver.name} is from ${driver.hometown}`)
