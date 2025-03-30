import type { MantineThemeOverride } from "@mantine/core";

export const components: MantineThemeOverride["components"] = {
  Button: {
    defaultProps: {
      radius: "md",
      size: "md",
      variant: "filled",
    },
    styles: {
      root: {
        fontWeight: 600,
        textTransform: "uppercase",
      },
    },
  },

  TextInput: {
    defaultProps: {
      radius: "md",
      size: "md",
    },
  },

  PasswordInput: {
    defaultProps: {
      radius: "md",
      size: "md",
    },
  },

  Modal: {
    defaultProps: {
      centered: true,
    },
  },
};
