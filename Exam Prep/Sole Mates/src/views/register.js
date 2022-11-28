import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from '../api/user.js'
import { createSubmitHandler } from '../util.js'

const registerTemp = (onRegister) => html`
<section id="register">
<div class="form">
  <h2>Register</h2>
  <form @submit=${onRegister} class="login-form">
    <input
      type="text"
      name="email"
      id="register-email"
      placeholder="email"
    />
    <input
      type="password"
      name="password"
      id="register-password"
      placeholder="password"
    />
    <input
      type="password"
      name="re-password"
      id="repeat-password"
      placeholder="repeat password"
    />
    <button type="submit">login</button>
    <p class="message">Already registered? <a href="./login">Login</a></p>
  </form>
</div>
</section>`

export function showRegister(ctx) {
    ctx.render(registerTemp(createSubmitHandler(onRegister)));

    async function onRegister(data) {
        if (!data.email || !data.password || !data['re-password']) {
            return alert('All fields are required!');
        }

        if (data.password !== data['re-password']) {
            return alert('Password don\'t match')
        }

        await register(data.email, data.password);
        ctx.updateNav();
        ctx.page.redirect('/dashboard')
    }
}