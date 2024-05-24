

 /* När användaren klickar på knappen, körs denna funktion */
document.getElementById(`fetchButton`).addEventListener(`click`, function() {
    
    /* Anropa API för att hämta data */
    fetch(`https://randomuser.me/api/`)
    .then(function(response) { 

    /* Konvertera svaret till JSON-format */
    return response.json();
    })
    .then(function(data) {

    /* Hämta användarinformation från data */
    var user = data.results[0];

    /* Uppdatera bild */
    document.getElementById(`userImage`).src = user.picture.large;
    
    /* Uppdatera namn */
    document.getElementById(`userName`).innerText = user.name.first;
    
    /* Uppdatera Efternamn */
    document.getElementById(`userLastName`).innerText = user.name.last;
    
    /* Uppdatera kön */
    document.getElementById(`userGender`).innerText = user.gender;
    
    /* Uppdatera e-post */
    document.getElementById(`userEmail`).innerText = user.email;
    
    /* Uppdatera telefonnummer */
    document.getElementById(`userPhone`).innerText = user.phone;
    
    /* Visa användarinformation */
    document.getElementById(`userInfo`).classList.remove(`hidden`);
    })
    .catch(function(error) {

    /* Om ett fel inträffar, skriv ut det i konsolen */
    console.error(`Error fetching data:`, error);
    });
    });


