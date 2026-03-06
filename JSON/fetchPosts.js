 // For Fetching Posts
const loadPosts = () => {
    const url = "https://jsonplaceholder.typicode.com/posts#"
    fetch(url)
        .then(response => response.json())
        .then(post => {
            displayPosts(post)
        })
}

// {
//     "userId": 9,
//     "id": 85,
//     "title": "dolore veritatis porro provident adipisci blanditiis et sunt",
//     "body": "similique sed nisi voluptas iusto omnis\nmollitia et quo\nassumenda suscipit officia magnam sint sed tempora\nenim provident pariatur praesentium atque animi amet ratione"
// }

const displayPosts = (posts) => {
    // 1. Get the parent and clear it
    const postContainer = document.querySelector("#postContainer");
    postContainer.innerHTML = ""; // Ensure it is empty initially

    posts.forEach(post  => {
        // 2. creating new div for each post
        const newDiv = document.createElement("div");

        // 3. setting newDiv's innerHtml
        newDiv.innerHTML = `
        <div class="shadow-lg border-2 border-[#ddd] p-6 rounded-xl h-full">
            <h1 class="font-extrabold text-xl">${post.id}|  ${post.title}</h1>

            <hr class="opacity-40 my-2">
            
            <p class="text-justify">${post.body}</p>
        </div>
        `

        // 4. appending 
        postContainer.append(newDiv)
    });
}