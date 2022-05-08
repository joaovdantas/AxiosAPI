const ul = document.querySelector("ul");

async function getUser() {
  try {
    const response = await axios.get(
      "https://api.github.com/users/joaovdantas/repos"
    );

    const { data } = response

    data.map((item) => {
      let li = document.createElement("li");

      li.innerHTML = `<strong>${item.name.toUpperCase()} </strong>
        <span>URL: ${item.url}</span>
        <span>Data Criação:
          ${Intl.DateTimeFormat("pt-BR").format(new Date(item.created_at))}
        </span>`;

      ul.appendChild(li);
    });
  } catch (error) {
    console.log({ error });
  }
}

getUser();
