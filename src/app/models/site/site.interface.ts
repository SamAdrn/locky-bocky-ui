/**
 * Represents a single website
 */
export interface iSite {
    /**
     * Unique Identifier for a Site
     */
    uid: string

    /**
     * The display name for a Site
     */
    name: string

    /**
     * The URL that leads to the Site
     */
    url: string

    /**
     * The number of account information saved for the Site
     */
    numAccounts: number
}
