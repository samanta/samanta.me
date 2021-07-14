import "normalize.css";
import "../src/components/layout/styles.global.css";
import "../src/components/layout/styles.variables.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
