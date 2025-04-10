export function displayAvailableTextbooksAttributes(item, select) {
    console.log(item);
    
    const divToCreate =  document.createElement('divToCreate');
    divToCreate.value = item.choice;
    divToCreate.textContent = item.choice;
    select.appendChild(divToCreate);
    
}


export function displayAvailableTextbooks(i, item) {
    const uniqueId = i;
   

    const elementHtmlToInsert = 
        `
        <div class="d-flex flex-column align-items-center">
            <div class="card ali border-info mb-3 col-8"> 
                <div class="card-header bg-primary text-light">
                    <h5 class="mt-2 fw-bold">${item.titleTextbook}</h5>
                </div>
                
                <div class="card-body">
                    <div class="d-flex justify-content-center align-items-center">
                        <img src="${item.picture}" alt="pictureBook" style="max-height: 50px;"/>
                    </div>

                    <div class="row">
                        <div class="col-6 offset-md-2 col-md-4 offset-xl-3 col-xl-3">
                            <label class="text-primary fw-bold" for="refTextbook_${uniqueId}">Référence du manuel:</label>
                            <input class="form-control form-control-sm" id="refTextbook_${uniqueId}" value="${item.referenceTextbook}" type="text" readonly>
                        </div>
                        <div class="col-6 col-md-4 col-xl-3 mb-3">
                            <label class="text-primary fw-bold" for="isbn_${uniqueId}">ISBN : </label>
                            <input class="form-control form-control-sm" id="isbn_${uniqueId}" value="${item.isbn}" type="text" readonly>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6 offset-md-2 col-md-4 offset-xl-3 col-xl-3">
                            <label class="text-primary fw-bold" for="classTextbook_${uniqueId}">Classe : </label>
                            <input class="form-control form-control-sm" id="classTextbook_${uniqueId}" value="${item.educationLevelTextbook}" type="text" readonly>
                        </div>
                        <div class="col-6 col-md-4 col-xl-3 mb-3">
                            <label class="text-primary fw-bold" for="subjectTextbook_${uniqueId}">Sujet étudié : </label>
                            <input class="form-control form-control-sm" for="subjectTextbook_${uniqueId}" value="${item.subjectTextbook}" type="text" readonly>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6 offset-md-2 col-md-4 offset-xl-3 col-xl-3">
                            <label class="text-primary fw-bold" for="editorTextbook_${uniqueId}">Éditeur  : </label>
                            <input class="form-control form-control-sm" for="editorTextbook_${uniqueId}" value="${item.editorTextbook}" type="text" readonly>
                        </div>
                        <div class="col-6 col-md-4 col-xl-3 mb-3">
                            <label class="text-primary fw-bold" for="yearEdition_${uniqueId}">Année d'édition : </label>
                            <input class="form-control form-control-sm" for="yearEdition_${uniqueId}" value="${item.yearEditionTextbook}" type="text" readonly>
                        </div>
                    </div>
                    <div class="row justify-content-center align-items-center">
                        <div class="col-6 offset-md-2 col-md-4 offset-xl-3 col-xl-3">
                            <button type="button" class="btn btn-lg btn-primary fw-bold rounded-4 disabled">${item.priceTextbook} € </button>
                        </div>
                        <div class="col-6 col-md-4 col-xl-3 mb-3">
                            <span class="badge bg-success rounded-pill">☼ Disponible</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        `;
        const divWhereToInsert = document.getElementById("displayAvailableTextbooks");
        divWhereToInsert.insertAdjacentHTML("afterend", elementHtmlToInsert);
        //insertAdjacentHTML : https://developer.mozilla.org/fr/docs/Web/API/Element/insertAdjacentHTML
        //analyse le texte spécifié en tant que HTML ou XML et insère les noeuds résultants dans le DOM à la position spécifiée.
        
}