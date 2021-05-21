// const teamsContainer = document.getElementById("teams-container")
const teamBase = new Team("http://localhost:3000")


document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    teamBase.getTeams()
});

