import { DivComponent } from "../../common/div-component.js";
import './search.css'
export class Search extends DivComponent {
    constructor(state) {
        super()
        this.state = state
    }

    search() {
        const value = this.el.querySelector('input').value
        this.state.searchQuery = value
    }

    render() {
        this.el.classList.add('search')
        this.el.innerHTML = `
            <div class="search__wrapper">
                <img src="/static/search.svg" alt="search-icon" />
                <input 
                    type="text" 
                    placeholder="Найти книгу или автора...."
                    class="search__input"
                    value="${this.state.searchQuery ? this.state.searchQuery : ''}"
                >
            </div>
            <button aria-label="Искать" class="search__btn">
                <img 
                    src="/static/search-white.svg" 
                    alt="search-btn"
                />
            </button>
        `
        this.el.querySelector('button').addEventListener("click", this.search.bind(this))
        this.el.querySelector('input').addEventListener("keydown", (event) => {
            if (event.code === "Enter") {
                 this.search()
            }
        })
        return this.el
    }
}
