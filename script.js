const loadData = async () =>{
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
    const data = await res.json()
    showDisplay(data.meals)
}

const showDisplay = datas => {
    const cardContainer = document.getElementById('card-container');
    datas.forEach(element => {
        console.log(element.strInstructions);
        const newElement = document.createElement('div');
        newElement.classList.add('col-md-6');
        newElement.innerHTML = `
        <div class="card w-100">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="${element.strMealThumb}" class="img-fluid w-100 h-100 rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${element.strMeal}</h5>
                    <p class="card-text">${element.strInstructions}</p>
                    <button type="button" class="btn p-0 text-warning details-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    View Details
                    </button>
                </div>
                </div>
            </div>
        </div>
        `;
        cardContainer.appendChild(newElement);
    });
    
}

loadData();