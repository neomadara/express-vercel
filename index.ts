import Logger from './src/utils/logger'
import App from "./src/app";

const port = process.env.PORT || 3000

App.listen(port, () => {
  Logger.info('express its a live!')
})
