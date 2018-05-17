const app = {
    init: function(formSelector) {
        this.count = 0
        document
            .querySelector(formSelector)
            .addEventListener('submit', (ev) => {
                ev.preventDefault()
                this.handleSubmit(ev)
            })
    },

    handleSubmit: function(ev) {
        const f = ev.target
        const flick = {
            id: ++this.count, 
            name: f.flickName.value,
        }
    },
}

app.init('#flickForm')