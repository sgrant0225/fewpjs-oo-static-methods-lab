class Formatter {
  static capitalize (word) {
     return word.charAt(0).toUpperCase() + word.slice(1)
  }

  static sanitize (stringWords) {
    return stringWords.replace( /[^A-Za-z0-9 '-]/g, '' ) 
  }

  static titleize () {
    
  }
}