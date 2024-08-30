import { iSite } from './site.interface'
import { v4 as uuidv4 } from 'uuid'

export class Site implements iSite {
    uid: string
    name: string
    url: string
    numAccounts: number

    constructor(name: string, url: string, numAccounts: number = 0) {
        ;[this.uid, this.name, this.url, this.numAccounts] = [
            uuidv4(),
            name,
            url,
            numAccounts,
        ]
    }
}
