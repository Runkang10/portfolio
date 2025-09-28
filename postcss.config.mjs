const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        gradient: "gradient 5s ease infinite",
      },
    },
  },
};

export default config;
