import { MantineThemeOverride, createTheme } from "@mantine/core";
import { components } from "./components";

export const theme: MantineThemeOverride = createTheme({
  primaryColor: "red",
  fontFamily: "Inter, sans-serif",
  headings: {
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
  },
  components,
});
