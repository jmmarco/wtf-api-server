module.exports = {
  mapAndTransform: function (arr) {
    return arr.map((acr) => {
      const entry = Object.entries(acr)[0];
      return {
        acronym: entry[0],
        definition: entry[1],
      };
    });
  },
  randomAcronyms: function (arr, quantity) {
    if (isNaN(quantity)) {
      quantity = arr.length;
    } else {
      quantity = parseInt(quantity);
    }

    // Fisher-Yates Algorithm Shuffle https://bost.ocks.org/mike/shuffle/
    const shuffledArr = [...arr];
    let m = arr.length,
      t,
      i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = shuffledArr[m];
      shuffledArr[m] = shuffledArr[i];
      shuffledArr[i] = t;
    }

    return shuffledArr.slice(0, quantity);
  },
  paginatedResults: function(arr, from, limit, search) {
    console.log(from, limit, search )

    let filteredArr = arr.filter(acr => acr.acronym.indexOf(search.toUpperCase()) !== -1)

    console.log(filteredArr.length)
    
    return filteredArr
  },
  renderAcronyms: function (arr) {
    let result = "";
    arr.forEach((acr) => (result += `<p>${JSON.stringify(acr)}</p>`));
    return result;
  },
};