document.body.children[4]
<p>​…​</p>​
let p = document.body.children[4]
undefined
p
<p>​…​</p>​
p.children
HTMLCollection [strong]
p.children[0]
<strong>​Texto com sombra​</strong>​
p.children[0].textContent
'Texto com sombra'
p.children[0].textContent = 'Marcelo foi cortado do campeonato'
'Marcelo foi cortado do campeonato'