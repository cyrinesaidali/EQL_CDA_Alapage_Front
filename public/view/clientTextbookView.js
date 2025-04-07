export function displayAvailableTextbooksAttributes(item, select) {
    const divToCreate =  document.createElement('divToCreate');
    divToCreate.value = item.choice;
    divToCreate.textContent = item.choice;
    select.appendChild(divToCreate);
}


export function displayAvailableTextbooks(i, item) {
    const uniqueId = i;

    const elementHtmlToInsert = 
        `
        <div class="col-lg-12">
            <div class="card border-info d-flex flex-column mb-3 col-lg-7"> 
                <div class="card-header bg-primary text-light">
                    <label class="form-label mt-2" id="${uniqueId}" value="${item.titleTextbook}></label>
                </div>
                
                <div class="card-body">
                    <div class="d-flex justify-content-center align-items-center">
                        <img src="../resources/images/alapage-logo.png" alt="Logo" style="max-height: 50px;"/>
                    </div>

                    <div class="row">
                        <div class="col-6 offset-md-2 col-md-4 offset-xl-3 col-xl-3">
                            <label class="text-primary fw-bold me-2" for="ref-Textbook-${uniqueId}">Référence du manuel :</label>
                            <input class="form-control form-control-sm" type="text" readonly id="ref-Textbook-${uniqueId}" value="${uniqueId}">
                        </div>
                        <div class="col-6 col-md-4 col-xl-3 mb-3">
                            <label class="text-primary fw-bold me-2" for="isbn-Textbook-${uniqueId}">ISBN : </label>
                            <input class="form-control form-control-sm" type="text" readonly  id="isbn-Textbook-${uniqueId}" value="${item.isbn}>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6 offset-md-2 col-md-4 offset-xl-3 col-xl-3">
                            <label class="text-primary fw-bold me-2" for="education-Textbook-${uniqueId}">Classe : </label>
                            <input class="form-control form-control-sm"  type="text" readonly id="education-Textbook-${uniqueId}" value="${uniqueId}>
                        </div>
                        <div class="col-6 col-md-4 col-xl-3 mb-3">
                            <label class="text-primary fw-bold me-2" for="subject-Textbook-${uniqueId}">Sujet étudié : </label>
                            <input class="form-control form-control-sm" type="text" readonly  id="subject-Textbook-${uniqueId}" value="${uniqueId}  >
                        </div>
                    </div>
                    <div class="row justify-content-center align-items-center">
                        <div class="col-6 offset-md-2 col-md-4 offset-xl-3 col-xl-3">
                            <a href="registerPage.html">
                                <button type="button" class="btn btn-lg btn-primary rounded-4">Other</button>
                            </a>
                        </div>
                        <div class="col-6 offset-md-2 col-md-4 offset-xl-3 col-xl-3">
                            <span class="badge-lg rounded-2 bg-dark text-light col-md-4">Info</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     `;
        
        const divWhereToInsert = document.getElementById("displayAvailableTextbooks");
        divWhereToInsert.insertAdjacentElement("afterend", elementHtmlToInsert);
        //insertAdjacentHTML : https://developer.mozilla.org/fr/docs/Web/API/Element/insertAdjacentHTML
        //analyse le texte spécifié en tant que HTML ou XML et insère les noeuds résultants dans le DOM à la position spécifiée.
        
}