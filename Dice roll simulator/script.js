document.getElementById("rollbutton").addEventListener("click", function() {
    const diceFaces = ["&#x2680;", "&#x2681;", "&#x2682;", "&#x2683;", "&#x2684;", "&#x2685;"];
    const randomFace = diceFaces[Math.floor(Math.random() * diceFaces.length)];
    document.getElementById("dice").innerHTML = randomFace;
});
