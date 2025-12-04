chrome.storage.sync.get(["problems"], (data) => {
    const list = data.problems || [];
    const ul = document.getElementById("problem-list");

    list.forEach(p => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${p.url}" target="_blank">${p.title}</a>`;
        ul.appendChild(li);
    });
});
