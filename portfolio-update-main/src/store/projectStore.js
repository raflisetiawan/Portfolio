import { defineStore } from "pinia";

export const useProjectStore = defineStore("projectStore", {
  state: () => ({
    projects: [
      {
        id: 1,
        name: "Nature Community Portfolio",
        image: new URL("../assets/featured/alam.png", import.meta.url).href,
        description:
          "It's my first time build website from scratch with only HTML, CSS and some Jquery for the scroll animation.",
        tech: ["HTML", "CSS", "Jquery"],
        link: "https://rafli7773.github.io/",
        featured: true,
      },
      {
        id: 2,
        name: "Barang App",
        image: new URL("../assets/featured/barang.png", import.meta.url).href,
        description:
          "This is my first Vue.js, firebase app and for the UI Framework using Vuetify.",
        tech: ["Vue.js", "Firebase", "Vuetify"],
        link: "https://admin-kuple.web.app/",
      },
      {
        id: 3,
        name: "Free Template App",
        image: new URL("../assets/featured/eden.png", import.meta.url).href,
        description:
          "This is PPT Marketplace app build with Vue3, Firebase, and Quasar",
        tech: ["Vue.js", "Firebase", "Quasar"],
        link: "https://eden-9da9e.web.app/",
        featured: true,
      },
      {
        id: 4,
        name: "My CRUD app with Firebase 9",
        image: new URL("../assets/featured/crud.png", import.meta.url).href,
        description:
          "This is my project when i learned firebase 9, Vue 3 with Bootstrap 5",
        tech: ["JS", "Vue", "Firebase", "Bootstrap"],
        link: "https://kuple-crud-vue.web.app/",
      },
      {
        id: 5,
        name: "Weather App",
        image: new URL("../assets/featured/weather.JPG", import.meta.url).href,
        description: "Weather App with Rain Probability",
        tech: ["JS", "Vue", "AccuWeather", "Quasar"],
        link: "https://weather-rafli.web.app/",
      },
    ],
  }),
  getters: {
    getAllProjects: (state) => state.projects,
    getFeaturedProjects: (state) =>
      state.projects.filter((project) => project.featured),
  },
});
