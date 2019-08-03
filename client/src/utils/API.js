import axios from "axios";

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
    saveFavorite: function (id) {
        return axios.post("/api/favorites", {id: id});
    },
    // Get the saved favorite from the database
    savedFavorite: function () {
        return axios.get("/api/favorites");
    }
};

