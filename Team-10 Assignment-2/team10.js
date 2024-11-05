const ipsumText = [
    "This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry!",
    "Anyhoo, your net-suits will allow you to experience Fry's worm-infested bowels as if you were actually wriggling through them.",
    "I just told you! You've killed me! Fry! Quit doing the right thing, you jerk!",
    "Michelle, I don't regret this, but I both rue and lament it.",
    "Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat."
];

function generateIpsum() {
    const paragraphs = document.getElementById('paragraphs').value;
    let outputText = '';

    for (let i = 0; i < paragraphs; i++) {
        outputText += `<p>${ipsumText[i % ipsumText.length]}</p>`;
    }

    document.getElementById('output').innerHTML = outputText;
}
