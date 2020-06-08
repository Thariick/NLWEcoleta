//console.log("Hello World")


function populateUFs () {
    const ufSelect = document.querySelector ("select[name=uf]")
    fetch ("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then ( res => res.json() ) // função anônima que retorna um valor
    .then ( states => {
        for ( const state of states ) {
            ufSelect.innerHTML += `<option value = "${state.id}">${state.nome}</option>`

        }
    })
}

populateUFs()

function getCities (event) {
    const citySelect = document.querySelector ("[name=city]")
    const stateInput = document.querySelector ("[name=state]")
    const ufValue = event.target.value
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    citySelect.innerHTML = "<option value>Selecione a cidade</option>"
    citySelect.disabled = true
    fetch (url)
    .then ( res => res.json() ) // função anônima que retorna um valor
    .then ( cities => {
        for ( const city of cities ) {
            citySelect.innerHTML += `<option value = "${city.nome}">${city.nome}</option>`
        }
        citySelect.disabled = false
    })
}


document
    .querySelector ("select[name=uf]")
    .addEventListener ("change", getCities)



// items de coleta: (os clicks e tal)
// pegar todos li's
const itemsToCollect = document.querySelectorAll(".items-grid li")
for(const item of itemsToCollect) {
    item.addEventListener ("click", handleSelectedItem)
}
const collectedItems = document.querySelector ("input[name=items")
let selectedItems = []
function handleSelectedItem (event) {
    const itemLi = event.target
    // Add ou Remove uma classe com JS
    itemLi.classList.toggle("selected") //função de adicionar ou remover
    const itemID = itemLi.dataset.id
    //verificar se existem itens selecionados, se sim, pegar os itens selecionados
    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemID //qualquer erro talvez seja aqui (isso será um true ou false)
        return itemFound
    })
    // se já estiver selecionado, tirar da seleção
    if (alreadySelected >= 0) {
        //tirar da seleção
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemID
            return itemIsDifferent
        })
        selectedItems = filteredItems
    } else {
        // se não estiver selecionado, adicionar a seleção
    selectedItems.push(itemID)
    }
    // atualizar o campo escondido (hidden no html) com os dados selecionados
    collectedItems.value = selectedItems
}
