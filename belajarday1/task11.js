var instructor = {
  firstName: "Colt",
  sayHi: function(){
    setTimeout(function(){
      console.log('Hello ' + this.firstName)
    },1000)
  }
}
