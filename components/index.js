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
                this.isDragging = false;
                //container
                let f = document.querySelector(".input-container");
                //input
                let i = document.querySelector(".input-form");
                //label
                let l = document.querySelector(".label-form");

                f.style.borderColor = "#fbe776"; 
                f.style.display = "block";

                l.style.transform = "translateY(5px)";
                l.style.transitionDuration = "500ms";
                l.style.color = "#81909b";
                l.style.display = "block";

                i.style.display = "block";
                break;
        }
     
      }
    
}
