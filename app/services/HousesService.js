import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { saveState } from "../utils/Store.js";

function _saveHouses() {
    saveState('houses', AppState.houses)
}

class HousesService {
    deleteHouse(id) {
        let filteredHouses = AppState.houses.filter(house => house.id != id)
        AppState.houses = filteredHouses
        _saveHouses()

    }
    createHouse(formData) {
        let newHouse = new House(formData)
        AppState.houses.push(newHouse)
        AppState.emit('houses')
        _saveHouses()
    }



}

export const houseService = new HousesService()