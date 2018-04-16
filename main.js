

const fragment = document.createDocumentFragment()

const message1 = document.createElement("section")
message1.textContent = "ducks are considered water fowl"
const messageClass1 = document.createAttribute('class')
messageClass1.value = 'right'
message1.setAttributeNode(messageClass1)
fragment.appendChild(message1)

const message2 = document.createElement("section")
message2.textContent = "I like bats"
const messageClass = document.createAttribute('class')
messageClass.value = 'left'
message2.setAttributeNode(messageClass)
fragment.appendChild(message2)

const message3 = document.createElement("section")
message3.textContent = "you my friend are rude, bats are mammals"
const messageClass3 = document.createAttribute('class')
messageClass3.value = 'right'
message3.setAttributeNode(messageClass3)
fragment.appendChild(message3)

const message4 = document.createElement("section")
message4.textContent = "go eat a duck!"
fragment.appendChild(message4)

const message5 = document.createElement("section")
message5.textContent = "I've had enough of this abuse!! plus I'm vegan!!!"
fragment.appendChild(message5)


document.querySelector ("#messages").appendChild(fragment)

  



