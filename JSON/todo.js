const loadData = () => {
  const url = "https://jsonplaceholder.typicode.com/todos#";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data));
};

// {
//     "userId": 5,
//     "id": 98,
//     "title": "debitis accusantium ut quo facilis nihil quis sapiente necessitatibus",
//     "completed": true
// }

const displayData = (datas) => {
  // 1. get the parent and keep it empty
  const parent = document.querySelector("#toDoContainer");
  // parent.innerHTML = "" // Make it empty

  datas.forEach((data) => {
    // 2. creating new div for each to do
    const newDiv = document.createElement("div");

    // 3. setting innerHtml
    newDiv.innerHTML = `
        <div class="flex gap-3 border-2 border-gray-400 items-center p-3 rounded-lg text-2xl ">
            ${
              data.completed == true
                ? `<i class="fa-solid fa-square-check"></i>`
               : `<i class="fa-regular fa-square-check"></i>`
            }
            
            <h3 class="text-justify"> ${data.title} </h3>
        </div>
        `;

    // 4. appending
    parent.append(newDiv);
  });
};

loadData();
