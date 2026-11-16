
class XCenter extends HTMLElement {
    connectedCallback() {
        this.style.textAlign = "center";
        this.style.color = "purple";
        this.style.fontSize = "24px";
        this.style.display = "block";
    }
}

customElements.define("x-center", XCenter);

class XYear extends HTMLElement {
    connectedCallback() {
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", XYear);
 
