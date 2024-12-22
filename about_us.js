document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("#nutritionTable tbody");
    const alertMessage = document.getElementById("alertMessage");

 
    fetch("about_us.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error('Ne mogu učitati JSON');
            }
            return response.json();
        })
        .then((plans) => {
            if (plans.length === 0) {
                throw new Error('JSON je prazan');
            }

            plans.forEach((plan) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${plan.name}</td>
                    <td>${plan.description}</td>
                    <td>${plan.benefits}</td>
                    <td>${plan.duration}</td>
                    <td>
                        <button class="edit-btn btn btn-success">Edit</button>
                        <button class="delete-btn btn btn-danger">Delete</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch((error) => {
            console.error("Greška prilikom učitavanja podataka:", error);
            alertMessage.textContent = "Došlo je do greške pri učitavanju podataka. Provjerite konzolu za više informacija.";
            alertMessage.className = 'alert error';
            alertMessage.style.display = "block";
        });

    tableBody.addEventListener("click", (event) => {
        const target = event.target;
        const row = target.closest("tr");

        if (target.classList.contains("edit-btn")) {
            const cells = row.querySelectorAll("td:not(:last-child)");
            cells.forEach((cell) => {
                const newValue = prompt(`Edit value for "${cell.textContent}":`, cell.textContent);
                if (newValue !== null) {
                    cell.textContent = newValue;
                }
            });

            showAlert("Nutrition plan successfully edited!", "success");
        } else if (target.classList.contains("delete-btn")) {
            if (confirm("Are you sure you want to delete this nutrition plan?")) {
                row.remove();
                showAlert("Nutrition plan deleted successfully!", "success");
            }
        }
    });

    function showAlert(message, type) {
        alertMessage.textContent = message;
        alertMessage.className = `alert ${type === 'success' ? '' : 'error'}`;
        alertMessage.style.display = "block";

        setTimeout(() => {
            alertMessage.style.display = "none";
        }, 3000);
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const blogContainer = document.getElementById("blog");
    const alertMessage = document.getElementById("alertMessage");


    fetch("about-us2.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error('Unable to load blog data');
            }
            return response.json();
        })
        .then((data) => {
            if (!data.content || data.content.length === 0) {
                throw new Error('Blog content is empty');
            }

          
            const title = document.createElement("h2");
            title.innerHTML = data.title;
            blogContainer.appendChild(title);

         
            const authorDate = document.createElement("p");
            authorDate.innerHTML = `<em>By: ${data.author}, ${data.date}</em>`;
            blogContainer.appendChild(authorDate);

        
            data.content.forEach((item) => {
                const element = document.createElement(item.type === 'heading' ? `h${item.level}` : 'p');
                if (item.type === 'list') {
                    const ul = document.createElement('ul');
                    item.items.forEach((listItem) => {
                        const li = document.createElement('li');
                        li.innerText = listItem;
                        ul.appendChild(li);
                    });
                    element.appendChild(ul);
                } else {
                    element.innerHTML = item.text;
                }
                blogContainer.appendChild(element);
            });
        })
        .catch((error) => {
            console.error("Error loading blog data:", error);
            alertMessage.textContent = "An error occurred while loading the blog content.";
            alertMessage.className = 'alert error';
            alertMessage.style.display = "block";
        });
});


