let googleUser = null

window.onload = () => {
    
    firebase.auth().onAuthStateChanged(user => {
        if(user)
        {
            console.log("logged in as: ", user.displayName)
            googleUser = user
        } else {
            console.log("not logged in")
        }
    })

}

const createNoteButton = document.querySelector("#createNoteButton")
createNoteButton.addEventListener("click", () => {
    console.log(createNoteButton)
})



