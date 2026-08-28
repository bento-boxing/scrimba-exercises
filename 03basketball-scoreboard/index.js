const container = document.getElementById('container');

container.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        let teamSection = event.target.closest(".teamboard")
        let teamScoreboard = teamSection.querySelector('.scoreboard');
        
        if(event.target.textContent === 'reset') {
            teamScoreboard.textContent = "0"
        } else {
            let num = event.target.textContent.substring(1);
            teamScoreboard.textContent = String(Number(teamScoreboard.textContent) + Number(num))
        }
    }
})
