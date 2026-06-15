document.addEventListener("DOMContentLoaded", function () {
    
    // Real-time Live Footer Clock
    const timestampNode = document.getElementById("timestamp-val");
    if (timestampNode) {
        setInterval(() => {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            timestampNode.textContent = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        }, 1000);
    }
});
