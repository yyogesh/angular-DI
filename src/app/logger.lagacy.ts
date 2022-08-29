import { Logger } from "./logger"

export const LagacyLogger: Logger = {
  prefix: "Lagacy Logger",
  log(message: string): void {
    console.log(`${this.prefix} LagacyLogger: ${message}`)
  }
}
