async function generateIdea() {
    const result = document.getElementById("result")
    const activity = document.getElementById("activity")
    const type = document.getElementById("type")
    const screenshoot = document.getElementById("screenshoot")
    
    
    const url = "https://www.boredapi.com/api/activity"
    const respone = await fetch(url);
    const api = await respone.json();

    activity.textContent = api.activity
    type.textContent = api.type
    type.style.display = "block"

    let count = 0;

    screenshoot.addEventListener("click", function() {
        count && location.reload();

        html2canvas(result).then(callbacks => {
            screenshoot.setAttribute("href", callbacks.toDataURL("image/png"))
            screenshoot.textContent = "📩"
            count++
        });
    });
}