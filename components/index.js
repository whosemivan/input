import Tmp from "./template.js"
export default class InputField extends HTMLElement {
    static get observedAttributes() {
        return []
    }
    

    connectedCallback() {

        this.innerHTML = Tmp.render({bg: this.getAttribute("bg")});
        this.addEventListener("mouseup", this.handler);
    }

    handler(e) {
        switch (e.type) {
          
          case "mouseup":
    
                let i = document.querySelector(".input-form");
                let l = document.querySelector(".label-form");

                i.style.borderColor = "#fbe776";

                l.style.transform = "translateY(-22px)";
                l.style.transitionDuration = "500ms";
                l.style.color = "#81909b";
                l.style.display = "block";

                break;
        }
     
      }
    
}
