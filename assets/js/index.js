document.addEventListener("DOMContentLoaded", () => {
  console.log("document loaded");

  document.querySelector("#closer-form").addEventListener("click", () => {
    document.querySelector(".modal").classList.add("hidden");
  });

  document.querySelector(".login").addEventListener("click", () => {
    document.querySelector(".modal").classList.remove("hidden");
  });

  document
    .querySelector("#contact-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();

      const data = {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#description").value,
      };
      console.log(data);
      try {
        response = await axios.post("http://localhost:3000/form", data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
      document.querySelector(".modal").classList.add("hidden");
    });
});
