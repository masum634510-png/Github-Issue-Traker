let allIssues = []
const allbutton = document.getElementById("allBtn")
const openbutton = document.getElementById("openBtn")
const closebutton = document.getElementById("closeBtn")
const totalIssue = document.getElementById("totalIssueCount");
const loadingSping = document.getElementById("loading-container");
 const showLoading = () => {
    loadingSping.classList.remove("hidden");
    loadingSping.innerHTML = "";
}
const hiddenLoading = () => {
    loadingSping.classList.add("hidden")
}  
/* api data fetch */
const loadData = () => {
    showLoading();
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            //console.log(data)
            hiddenLoading();
            allIssues = data.data
            displayData(allIssues);

        })
}

const displayData = (cards) => {
    totalIssue.innerText = `${cards.length} Issue`; // issue count
    const mainContainer = document.getElementById("mainContainer")
    mainContainer.innerHTML = "";

    cards.forEach((card) => {
        //console.log(card)
        const cardSection = document.createElement("div");
        cardSection.innerHTML = `
            <div class="${card.status == "open" ? "border-t-3 border-green-600" : " border-t-3 border-purple-600" } bg-white mt-auto flex flex-col h-full shadow-[0_0_15px_rgba(0,0,0,0.1)] m-3 p-4 rounded-md space-y-4">
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
                    <div class="flex justify-center items-center gap-1 bg-yellow-100 opacity-90 py-1 px-2 rounded-lg border border-yellow-300 ">
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


 // 3 button add the event listeiner
allbutton.addEventListener('click', () => {
    setColor(allbutton)
    displayData(allIssues)
})
openbutton.addEventListener('click', () => {
   setColor(openbutton)
   const openIssues = allIssues.filter(issue => issue.status === "open")
  
   displayData(openIssues)
})
closebutton.addEventListener('click', () => {
    setColor(closebutton)
   const closeIssue = allIssues.filter(issue => issue.status === "closed")
   displayData(closeIssue)
}) 
// all button click or color add
window.onload = () => {
    allbutton.style.backgroundColor = "blue";
    allbutton.style.color = "white";
};
const buttons = [allbutton, openbutton, closebutton];

const setColor = (clickedbtn) => {
      buttons.forEach(btn => {
        btn.style.backgroundColor = "";
        btn.style.color = ""

      })

      clickedbtn.style.backgroundColor = "blue";
      clickedbtn.style.color = "white"
}
//input search
 const searchBtn = document.getElementById("btnSearch").addEventListener('click', () => {
    const searchInput = document.getElementById("inputSearch");
    const searchValue = searchInput.value.trim().toLowerCase();
    console.log(searchValue);

    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`)
    .then((res) => res.json())
    .then((data) => {
        const allwords = data.data
        console.log(allwords);
        
         displayData(allwords)
    })
 }) 