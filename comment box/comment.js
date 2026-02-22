document.querySelector("#btn-post-comment")
.addEventListener("click" , function(){ 
    // Input value in textarea
    const clientCommets = document.querySelector("#client-comments").value;
    
    // Creating a new p into the comment section for adding the client comments
    const newParaElement = document.createElement("p");
    newParaElement.classList.add("comment");
    
    // Adding client Comments to newParaElemet
    newParaElement.innerText = clientCommets
    
    // appending to the comment section
    document.querySelector("#comment-Section").appendChild(newParaElement)
    
    // Clearning the input value in the text area while the btn is clicked
    document.querySelector("#client-comments").value = ""
});