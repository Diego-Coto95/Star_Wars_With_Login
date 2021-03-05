const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],

			planets: [],

			favorites: [],

			boolean: false
		},
		actions: {
			logout: () => {
				setStore({ boolean: false });
			},

			validateRegister: async (email, password) => {
				const url = "https://3000-indigo-duck-4s99l8l5.ws-us03.gitpod.io/register";
				// const response = await fetch(url,{method:"POST"});
				// const info = await response.json();
				// setStore({ data: info });
				const response = await fetch(url, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					//body: JSON.stringify(data)
					body: JSON.stringify({
						email: email,
						password: password
					})
				});
				const info = await response.json();
				console.log(info.msg);
			},

			validateLogin: async (email, password) => {
				const url = "https://3000-indigo-duck-4s99l8l5.ws-us03.gitpod.io/login";
				const response = await fetch(url, {
					method: "POST",
					headers: {
						"Content-Type": "application/json" //Lo que se va a enviar es json, por eso se pone el header
					},
					body: JSON.stringify({
						email: email,
						password: password
					}) //Convierte todo a un String , se envia como stringfy porque en el back end, se recibe como "email", "password"
				});
				const body = await response.json();
				console.log(body);
				if (body.status) {
					sessionStorage.setItem("u_token", body.token);
					sessionStorage.setItem("status", body.status);
					setStore({ boolean: true });
				} else {
					console.log("Siguelo intentando pa ...");
				}
			},

			// validateToken: async () => {
			// 	const url = "https://3000-indigo-duck-4s99l8l5.ws-us03.gitpod.io/profile";
			// 	const response = await fetch(url, {
			// 		method: "GET",
			// 		headers: {
			// 			"Content-Type": "application/json",
			// 			Authorization: "Bearer " + sessionStorage.getItem("u_token")
			// 		}
			// 	});
			// 	const info = await response.json();
			// 	//console.log(info);
			// 	//console.log("Success:", info.token);
			// 	sessionStorage.setItem("u_token", info.token);
			// },

			// Use getActions to call a function within a fuction
			loadPeople: async () => {
				const url = "https://3000-indigo-duck-4s99l8l5.ws-us03.gitpod.io/people";
				const response = await fetch(url);
				const info = await response.json();
				setStore({ people: info });
			},

			loadPlanet: async () => {
				const url = "https://3000-indigo-duck-4s99l8l5.ws-us03.gitpod.io/planets";
				const response = await fetch(url); // const response = await fetch(url,{method:"POST"}); funciona igual con DELETE PUT
				const info = await response.json();
				setStore({ planets: info });
			},
			addFavorite: (name, type) => {
				const store = getStore();
				let count = 0;
				store.favorites.map(each => {
					if (each.name == name) {
						count = 1;
					}
				});
				if (count == 0) {
					setStore({
						favorites: [
							...store.favorites,
							{
								name: name,
								type: type
							}
						]
					});
				}
			},

			deleteFavorite: id => {
				const store = getStore();

				const newFavorites = store.favorites.filter((item, i) => i !== id);
				setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;
