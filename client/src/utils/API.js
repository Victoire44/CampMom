import axios from "axios";

/**
 * Get the campgrounds by id.
 * 
 * A comma delimited list of park codes (each 4-10 characters in length).
 */
function getCampgroundById(parkCode) {
    return axios
        .get(`https://developer.nps.gov/api/v1/campgrounds?parkCode=${parkCode}&api_key=O4VdhmolNStlPLj2bo2DfPKWks3F8J9xfihpGqTf`)
        .then(result => result.data);
}

export default {
    // National park Service data
    getCampground: function (query) {
        return axios.get(`https://developer.nps.gov/api/v1/campgrounds?q=${query}&api_key=O4VdhmolNStlPLj2bo2DfPKWks3F8J9xfihpGqTf`);
    },
    // OpenWeather data
    getWeather: function (lat, lon, cnt) {
        return axios.get(`api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${cnt}`)
    },


    // Save Favorites
    // Deletes the favorite with the given id
    deleteFavorite: function (id) {
        return axios.delete("/api/favorites/" + id);
    },
    // Saves a favorite to the database
    saveFavorite: function (parkCode, id) {
        return axios.post("/api/favorites", { parkCode: parkCode, id: id });
    },
    // Get the saved favorite from the database
    getFavorites: function () {
        return axios.get("/api/favorites").then(result => result.data)
    },
    // Get the saved favorite enriched (name, description...) from NPS data
    getFavoriteCampgrounds: function () {
        return this.getFavorites().then(favorites => {
            const campgroundPromises = favorites.map(favorite => {
                return getCampgroundById(favorite.parkCode)
                    .then(result => result.data.find(campground => campground.id === favorite.campgroundId))
            });
            //Go from array of promises to a promise of array of results
            return Promise.all(campgroundPromises)
        })
    }
};
