let game = new WizardOrpheus('sk-test', `You are a friendly shopkeeper selling a magical item for $50.`)

game.variable('price', 'Current price', 50)

game.createUserAction({
  name: 'sendMessage',
  parameters: ['Message'],
  howBotShouldHandle: 'Respond to the user'
})

game.botAction('respond', 'Respond', { response: 'ok' }, data => {
  document.getElementById('conversation').innerHTML += `<p>${data.response}</p>`
})

document.getElementById('input').addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    let userInput = document.getElementById('input').value
    game.sendMessage(userInput)
    document.getElementById('conversation').innerHTML += `<p>You: ${userInput}</p>`
    document.getElementById('input').value = ''
  }
})