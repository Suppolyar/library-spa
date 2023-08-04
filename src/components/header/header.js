import { DivComponent } from "../../common/div-component.js";
import './header.css'
export class Header extends DivComponent {
    constructor(appState) {
        super()
        this.appState = appState
    }

    render() {
        this.el.innerHTML = ''
        this.el.classList.add('header')
        this.el.innerHTML = `
            <div>
                <img src="/static/logo.svg" alt="logotype"/>
            </div>
            <div class="menu">
                <a class="menu__item" href="#">
                    <img src="/static/search.svg" alt="search"/>
                    <span class="menu__item-bold">Поиск книг</span>
                </a>
                <a class="menu__item" href="#favorites">
                    <img src="/static/favorites.svg" alt="favorites"/>
                    <span>Избранное</span>
                    <div class="menu__counter">
                        ${this.appState.favorites.length}
                    </div>
                </a>
            </div>
        `

        return this.el
    }
}
