document.getElementById("addQuestion").onclick = function () {
    const container = document.getElementById("container");
    const section = document.getElementById("question-section");
    container.appendChild(section.cloneNode(true));
}