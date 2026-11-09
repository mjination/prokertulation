const letters = {
    "open-letter": {
        title: "I've Got Something <br> To Tell ",
        message:
            "Hi! I am super proud that you finally completed this proker hohoho. I remember when the first time you talk about this event, tentang dana 11 juta itu wkwkkwkwkwk. You did so much things, and there's a lot struggle that you have to face. But look at you now! So, I would like to say thank you for all of your hard work and dedication! You did it my sfunds babyyyy <3. Don't forget to treat yourself. Semangat untuk semua hal yang akan datang ya, ci. You can always count on me whenever there's a problem. Love you ci."
    },

    "flower": {
        title: "Open To See <br> What I've Got For You",
        message:
            "https://bit.ly/4iG9Ft4"
    },

};

// fetching the letter name
const params = new URLSearchParams(window.location.search);
const letterId = params.get("letter");

const letter = letters[letterId];

if (letter) {
    document.getElementById("letter-title").innerHTML = letter.title;
    document.getElementById("letter-message").textContent = letter.message;
} else {
     document.getElementById("letter-title").textContent = "Letter not found.";
    document.getElementById("letter-message").textContent = "Hmm this letter doesn't seem to exist.";
}

const letterText = document.querySelector(".letter-text");
const gif = document.querySelector(".opening-gif");

setTimeout(() => {
    gif.src = "Images/letter-final.png";
    letterText.classList.remove("hidden");
}, 1200);