export default {
    render() {
        return `
            ${this.css()}
            ${this.html()}
        `
    },
    html() {
        return `
        <form class="form">
        <label class="label-form">Name</label>
        <input class="input-form" id="Custom input element" >
        </form>   
        `
    },
    css() {
        return `
        <style>
        .form {
            position: relative;
        }
        .input-form{
            width: 80px;
            outline:none;
            padding:5px;
            border: none;
            width: 100px;
            border: 1px solid #d1d9db;
            border-radius: 4px;
            height: 30px;
            padding-top: 15px;
        }
        .label-form{
            font-family: sans-serif;
            color: #81909b;
            font-size:10px;
            padding:5px;
            position: absolute;
            top: 50%;
            transform: translate(0, -50%);
        }  
    </style>
        `
    }
}