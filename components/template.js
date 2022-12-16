export default {
    render() {
        return `
            ${this.css()}
            ${this.html()}
        `
    },
    html() {
        return `
        <div class="input-container">
        <label class="label-form">Name</label>
        <input class="input-form" id="Custom input element" placeholder="Имя">      
        </div>

        `
    },
    css() {
        return `
        <style>
        .input-container{
            display: flex;
            flex-direction: column;
            width: 100px;
            border: 1px solid #d1d9db;
            border-radius: 4px;
        }
        .input-form{
            width: 80px;
            outline:none;
            padding:5px;
            border: none;
            display: none;
        }
        .label-form{
            font-family: sans-serif;
            color: #81909b;
            font-size:10px;
            padding:5px;
        }  
    </style>
        `
    }
}