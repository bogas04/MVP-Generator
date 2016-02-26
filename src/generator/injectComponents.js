export default (components) => {
  Object.keys(components).forEach(c => {
    fs.copy(components[c], __dirname)
    .then(() => {
      console.log(`App generated at ${__dirname}`, options);
    });
  });
}
