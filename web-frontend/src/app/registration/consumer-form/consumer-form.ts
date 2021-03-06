export class ConsumerForm {
  public walletId: string
  public areaName: string
  public areaCode: string
  public meterId: string
  public consumption: number
  public houseSizeCode: string
  public consumeFrom: Date
  public consumeTo: Date

  constructor(walletId?: string, areaName?: string, meterId?: string, consumption?: number, houseSizeCode?: string, consumeFrom?: Date, consumeTo?: Date) {
    this.walletId = walletId
    this.areaName = areaName
    this.meterId = meterId
    this.consumption = consumption
    this.houseSizeCode = houseSizeCode
    this.consumeFrom = consumeFrom
    this.consumeTo = consumeTo
  }
}