
const authUrl = "https://localhost:7030";

const api_links = {
        product: {
            //GET
            getAll: {
                url: `${authUrl}/Product`,
                method: "GET",
            },

            //POST
            createNew: `${authUrl}api/Product`,

            ////////////////////// ELSE //////////////////////
            edit: {
                url: `${authUrl}api/Product`,
                method: "PUT",
                token: "",
                data: {}
            },

        },
    
}

export default api_links