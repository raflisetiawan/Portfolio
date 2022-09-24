module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        squgily: "url('/src/assets/divider.svg')",
        topbar:
          "linear-gradient(to right, rgb(217, 70, 239), rgb(220, 38, 38), rgb(251, 146, 60))",
      },
    },
    colors: {
      p_text: "#eaeaea",
      head_text: "#5680e9",
      navbar_back: "none",
      item_back: "#5ab9ea",
      item_hover_back: "#5ab9ea",
      action_back: "#8860d0 ",
      action_border: "#363636",
      border_sm: "#6a1b9a",
      action_text: "#d9d9d9",
      btn_back: "#8860d0",
      btn_text: "#f6f6f6",
      link_text_hover: "#6366F1",
      link_border_hover: "#6a1b9a ",
      link_border: "#6c6c6c",
      link: "#d9d9d9",
      background: "#5ab9ea",
      selectionBack: "rgba(40,41,96)",
    },
    fontFamily: {
      logo: "Southam Demo",
      theme: ["MonoLisa", "Monaco", "Source Code Pro"],
      theme_bold: ["MonoLisaBold", "Monaco", "Source Code Pro"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      slg: "978px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
