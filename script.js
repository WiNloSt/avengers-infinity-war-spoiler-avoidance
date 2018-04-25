console.log('avoiding Avengers: Infinity Wars spoilers !!!')

var banList = ['avenger', 'infinity']
setInterval(function() {
  var a = document.querySelectorAll('[role="article"]')
  a.forEach(d => {
    banList.map(text => {
      if (d.innerText.toLocaleLowerCase().indexOf(text) >= 0) {
        console.log('removed')
        d.remove()
      }
    })
  })
}, 2000)
