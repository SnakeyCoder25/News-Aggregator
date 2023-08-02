document.getElementById("questionForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const responseContainer = document.getElementById("responseContainer");
    const wiseFunnyResponses = [
        "AMUNGUS", "SUS"
    ];
    const randomIndex = Math.floor(Math.random() * wiseFunnyResponses.length);
    responseContainer.innerHTML = "<p>" + wiseFunnyResponses[randomIndex] + "</p>";
    document.getElementById("questionInput").value = "";
});
