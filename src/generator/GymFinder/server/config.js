export default {
    PORT: 1337,
    DB: {
      SERVER: "postgres",
      NAME: "gymfinder",
      HOST: "localhost",
      USER: "divjotsingh",
      PASSWORD: "",
    },
    APP_NAME: "GymFinder",
    bootstrap: {"bootswatch":"readable"},
    search: [{"by":"trainers","type":"+linear"},{"by":"description","type":"string"},{"by":"equipments","type":"enum","options":["tredmil","leg press","leg extension","cycle","arc runner"]}],
    //TODO
    FAVICON: 'http://dogeminer.se/favicon.ico', 
    PASSWORD_HASH_ROUNDS: 10,
    SERVER_SIDE_RENDERING: false,
    JWT_SECRET: 'QWERTYUIOP~!@#$%^&*()_+ASDFGHJKL:"~!@#$%^&*()_+ZXCVBNM<>?~!@#$%^&*()_+"',
    JWT_EXPIRES_IN: '30 days',
  }