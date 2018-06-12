// Letter constructor
function Letter(underscore) {
    // setting underscores to represent letters to guess
    this.underscore = '_';
    this.correctGuess = function() {
      if (this.underscore === true) {
        console.log('hello world');
      }
    };
  }