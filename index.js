var getPixels = require("get-pixels")

getPixels("http://www.northern.co/wp-content/themes/northern/images/puzzle.png", function(err, pixels) {
  if(err) {
    console.log("Bad image path")
    return
  }

  // Get rid of 255 codes in array
  let newArray1 = pixels.data.filter(item => item !== 255)

  // Convert ASCII code array to a string of characters
  let hiddenMsg = String.fromCharCode(...newArray1)

  console.log(hiddenMsg)
})
