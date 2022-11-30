import { html } from "../../node_modules/lit-html/lit-html.js";
import { editById, getDetails } from '../api/data.js';
import { createSubmitHandler } from '../util.js';

const editTemp = (offer, onEdit) => html`
<section id="edit">
<div class="form">
  <h2>Edit Offer</h2>
  <form @submit=${onEdit} class="edit-form">
    <input
      type="text"
      name="title"
      id="job-title"
      placeholder="Title"
    />
    <input
      type="text"
      name="imageUrl"
      id="job-logo"
      placeholder="Company logo url"
    />
    <input
      type="text"
      name="category"
      id="job-category"
      placeholder="Category"
    />
    <textarea
      id="job-description"
      name="description"
      placeholder="Description"
      rows="4"
      cols="50"
    ></textarea>
    <textarea
      id="job-requirements"
      name="requirements"
      placeholder="Requirements"
      rows="4"
      cols="50"
    ></textarea>
    <input
      type="text"
      name="salary"
      id="job-salary"
      placeholder="Salary"
    />

    <button type="submit">post</button>
  </form>
</div>
</section>`

export async function showEdit(ctx) {
    const id = ctx.params.id;
    const offer = await getDetails(id);

    ctx.render(editTemp(offer, createSubmitHandler(onEdit)));

    async function onEdit(data) {
        const {
            title,
            imageUrl, 
            category, 
            description, 
            requirements, 
            salary
          } = data;
          
        if (!title || !imageUrl || !category || !description || !requirements || !salary) {
            return alert('All fields are required!');
        }
        
        await editById(id, data)
        ctx.page.redirect(`/details/${id}`)
    }
}