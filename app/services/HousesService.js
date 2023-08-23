import { AppState } from "../AppState.js";
import { House } from "../models/House.js";

class HousesService {
    deleteHouse(id) {
        let filteredHouses = AppState.houses.filter(house => house.id != id)
        AppState.houses = filteredHouses

    }
    createHouse(formData) {
        let newHouse = new House(formData)
        AppState.houses.push(newHouse)
        AppState.emit('houses')
    }



}

export const houseService = new HousesService()