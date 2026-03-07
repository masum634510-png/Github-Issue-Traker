
const loadData = () => {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            displayData(data.data);

        })
}
/* "id": 1,
"title": "Fix navigation menu on mobile devices",
"description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
"status": "open",
"labels": [
"bug",
"help wanted"
],
"priority": "high",
"author": "john_doe",
"assignee": "jane_smith",
"createdAt": "2024-01-15T10:30:00Z",
"updatedAt": "2024-01-15T10:30:00Z" */
const displayData = (cards) => {
    const mainContainer = document.getElementById("mainContainer")
    mainContainer.innerHTML = "";

    cards.forEach((card) => {
        //console.log(card)
        const cardSection = document.createElement("div");
        cardSection.innerHTML = `
            <div class="${card.status == "open" ? "border-t-3 border-green-600" : " border-t-3 border-orange-400" } bg-white mt-auto flex flex-col h-full shadow-[0_0_15px_rgba(0,0,0,0.1)] m-3 p-4 rounded-md space-y-4">
                <div class="flex justify-between items-center">
                    <img class="w-[30px] h-[30px]" src="./assets/Open-Status.png" alt="">
                    <button class="px-6 py-1 bg-red-100 rounded-lg text-red-400">${card.priority}</button>
                </div>

                <h2 class="text-[16px] h-[40px] font-semibold">${card.title}</h2>
                <p class="text-gray-500 flex-grow line-clamp-2 h-[40px]">${card.description}</p>
               
                <div class="flex justify-between items-center">
                    <div class="flex justify-center items-center border border-red-300 gap-1 bg-red-100 py-1 px-2 rounded-lg ">
                        <img class="h-[16px] w-[16px] object-cover" src="./assets/Vector.png" alt="">
                        <button class=" text-red-400 ">BUG</button>
                    </div>
                    <div class="flex justify-center items-center gap-1 bg-[#D97706]/30 py-1 px-2 rounded-lg border border-orange-400 ">
                        <img class="h-[16px] w-[16px] object-cover" src="./assets/Lifebuoy.png" alt="">
                        <button class=" text-[#D97706] ">HELP WANTED</button>
                    </div>
                </div>
                <hr class=" border border-gray-300 mt-7 mb-5 -mx-4">

                <p class="text-gray-500">${card.id} by ${card.author}</p>
                <p class="text-gray-500">${new Date(card.createdAt).toLocaleDateString()} </p>
            </div>
    `;

        mainContainer.append(cardSection);

    })

}
loadData();

/* login btn */
 const userInput = document.getElementById("userNameBtn");
 const passwordInput = document.getElementById("passwordBtn");
 const singinButton = document.getElementById("singInBtn");
 
singinButton.addEventListener("click", () => {
   //alert("ami thik asi");
   const userValue = userInput.value;
   const passValue = passwordInput.value;
   if(userValue == "admin" && passValue == "admin123"){
    alert("login sucessfully");
    window.location.href = "home.html";
   }
   else{
    alert("invalid Number")
    return;
   }

 })
 
