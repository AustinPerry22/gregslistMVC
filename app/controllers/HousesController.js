import { AppState } from "../AppState.js"
import { houseService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { setHTML, setText } from "../utils/Writer.js"

function _drawHouses() {
    console.log('drawing')
    let houses = AppState.houses
    let content = ''
    houses.forEach(house => content += house.HouseTemplate)
    setHTML('houses', content)
}

export class HousesController {
    constructor() {
        console.log('house controller')
        _drawHouses()
        AppState.on('houses', _drawHouses)
    }

    createHouse() {
        window.event.preventDefault()
        const formEvent = window.event.target
        const formData = getFormData(formEvent)
        houseService.createHouse(formData)
    }

    deleteHouse(id){
        houseService.deleteHouse(id)
    }
}