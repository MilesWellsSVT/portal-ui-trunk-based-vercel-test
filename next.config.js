/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    config.plugins.push(
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require("unplugin-icons/webpack").default({
        compiler: "jsx",
        jsx: "react",
        iconCustomizer: (collection, icon, props) => {
          props.height = "24px";
          props.width = "24px";
          props.className = "svt-color-black-pearl";
        },
      })
    );

    return config;
  },
};
