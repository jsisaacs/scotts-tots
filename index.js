//takes the form output and bundles the properties as an object
function quoteGenerator() {

    const quoteObject = {
        'Character': document.querySelector('#character').value,
        'Rating': document.querySelector('#rating').value,
    }
    return quoteObject
}

const quoteArray = []

//takes a label and a value and builds the <li>
function renderListItem(label, value) {
    const li = document.createElement('li')
    
    const term = document.createElement('dt')
    term.textContent = label

    const description = document.createElement('dd')

    try {
        description.appendChild(value)
    } catch(e) {
        description.textContent += value
    }

    li.appendChild(term)
    li.appendChild(description)

    quoteArray.push(li)

    return li
}

function renderList(data) {
    const list = document.createElement('dl')
    Object.keys(data).forEach(label => {
        const item = renderListItem(label, data[label])
        list.appendChild(item)
    })

    console.log("RENDERED")
    return list
}

const handleSubmit = function(ev) {
    ev.preventDefault()
    const form = ev.target
    const user = quoteGenerator()
    const list = renderList(user)
    const users = document.querySelector('#list')
    users.appendChild(list)

}

const button = document.querySelector('#createButton')

button.addEventListener('click', handleSubmit)