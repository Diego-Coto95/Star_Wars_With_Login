const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],

			planets: [],

			favorites: []
		},
		actions: {
			loadPeople: async () => {
				const url = "https://swapi.dev/api/people/";
				const response = await fetch(url);
				const data = await response.json();
				console.table(data);
				setStore({ people: data.results });
			},

			loadPlanet: async () => {
				const url = "https://swapi.dev/api/planets/";
				const response = await fetch(url);
				const data = await response.json();
				console.table(data);
				setStore({ planets: data.results });
			}
			/*        features: [
				{
					name: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]*/
		}
	};
};

export default getState;
