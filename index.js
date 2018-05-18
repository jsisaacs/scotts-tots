const app = {
    init(selectors) {
        this.flicks = []
        this.max = 0
        this.list = document.querySelector(selectors.listSelector)
        this.template = document.querySelector(selectors.templateSelector)
        this.favorite = null
  
        document
            .querySelector(selectors.formSelector)
            .addEventListener('submit', ev => {
                ev.preventDefault()
                this.handleSubmit(ev)
            })
    },
  
    renderListItem(flick) {
        const item = this.template.cloneNode(true)
        item.classList.remove('template')
        item.dataset.id = flick.id
        item
            .querySelector('.flickName')
            .textContent = flick.name

        function indexInParent(node) {
            var children = node.parentNode.childNodes
            var num = 0
            for (var i=0; i<children.length; i++) {
                    if (children[i]==node) return num
                    if (children[i].nodeType==1) num++
            }
            return -1
        }

        const deleteButton = item.children[1].children[1]
        deleteButton
            .addEventListener('click', ev => {
                const indexToDelete = indexInParent(item)
                this.list.removeChild(item)
                this.flicks.splice(indexToDelete, 1)
            })

        const favoriteButton = item.children[1].children[0]
        favoriteButton
            .addEventListener('click', ev => {
                if (this.favorite == null) {
                    this.favorite = item
                    this.favorite.style.setProperty('border-left', '2px solid red')
                } else {
                    this.favorite.style.setProperty('border-left', '2px solid #69c')
                    this.favorite = item
                    this.favorite.style.setProperty('border-left', '2px solid red')
                }
            })
  
        return item
    },

    handleSubmit(ev) {
        const f = ev.target
        const flick = {
            id: ++this.max,
            name: f.flickName.value,
        }
  
        this.flicks.unshift(flick)
  
        const item = this.renderListItem(flick)
        this.list.insertBefore(item, this.list.firstElementChild)
  
        f.reset()
    },
  }
  
  app.init({
        formSelector: '#flickForm',
        listSelector: '#flickList',
        templateSelector: '.flick.template',
  })