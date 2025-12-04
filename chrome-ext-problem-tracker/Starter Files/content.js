(function () {
    // Avoid duplicates if LeetCode does partial reloads
    if (document.getElementById("track-problem-btn")) return;

    const btn = document.createElement("button");
    btn.id = "track-problem-btn";
    btn.innerText = "Track Problem";

    // styling
    btn.style.position = "fixed";
    btn.style.top = "150px";
    btn.style.right = "20px";
    btn.style.padding = "10px 14px";
    btn.style.background = "#FFD43B";
    btn.style.borderRadius = "10px";
    btn.style.zIndex = "999999";
    btn.style.cursor = "grab";
    btn.style.fontSize = "14px";
    btn.style.fontWeight = "bold";
    btn.style.boxShadow = "0 2px 8px rgba(0,0,0,0.25)";
    btn.style.opacity = "0.75";
    btn.style.transition = "all 0.2s";

    btn.onmouseover = () => (btn.style.opacity = "1");
    btn.onmouseout = () => (btn.style.opacity = "0.75");

    document.body.appendChild(btn);

    // draggable behavior
    let isDragging = false, offsetX = 0, offsetY = 0;

    btn.addEventListener("mousedown", (e) => {
        isDragging = true;
        btn.style.cursor = "grabbing";
        offsetX = e.clientX - btn.getBoundingClientRect().left;
        offsetY = e.clientY - btn.getBoundingClientRect().top;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        btn.style.left = `${e.clientX - offsetX}px`;
        btn.style.top = `${e.clientY - offsetY}px`;
        btn.style.right = "auto";
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        btn.style.cursor = "grab";
    });

    // Extract problem title reliably
    function getProblemTitle() {
        // 1. New UI: <h3>  
        const h3 = document.querySelector("h3");
        if (h3 && /^\d+\./.test(h3.textContent.trim())) {
            return h3.textContent.trim();
        }

        // 2. Old UI:
        const oldTitle = document.querySelector("div[data-cy='question-title']");
        if (oldTitle) return oldTitle.textContent.trim();

        // 3. Fallback to URL slug:
        const slug = window.location.pathname.split("/")[2];
        if (!slug) return "Unknown Problem";

        const formatted =
            slug.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase());

        return formatted;
    }

    // Save problem
    btn.onclick = () => {
        const title = getProblemTitle();
        const url = window.location.href;

        chrome.storage.sync.get(["problems"], (data) => {
            let list = data.problems || [];

            // Avoid duplicates
            if (list.some((p) => p.url === url)) {
                alert("Already Saved!");
                return;
            }

            list.push({
                title,
                url,
                addedAt: new Date().toISOString()
            });

            chrome.storage.sync.set({ problems: list }, () => {
                alert("Saved: " + title);
            });
        });
    };
})();





