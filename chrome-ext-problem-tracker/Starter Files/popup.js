function loadProblems() {
    chrome.storage.sync.get(["problems"], (data) => {
        const problems = data.problems || [];
        const container = document.getElementById("problem-list");

        if (problems.length === 0) {
            container.innerHTML = "<p>No saved problems.</p>";
            return;
        }

        container.innerHTML = "";

        problems.forEach((p, index) => {
            const box = document.createElement("div");
            box.className = "problem-item";

            box.innerHTML = `
                <a href="${p.url}" target="_blank">${p.title}</a>
                <button class="delete-btn" data-index="${index}">X</button>
            `;

            container.appendChild(box);
        });

        // delete handler
        document.querySelectorAll(".delete-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                const idx = btn.getAttribute("data-index");
                problems.splice(idx, 1);
                chrome.storage.sync.set({ problems });
                loadProblems();
            });
        });
    });
}

document.addEventListener("DOMContentLoaded", loadProblems);
