import { Site } from './site.factory'

export const SITE_MOCK_DATA = [
    {
        name: 'Google',
        url: 'https://www.google.com',
        numAccounts: 2,
    },
    {
        name: 'Facebook',
        url: 'https://www.facebook.com',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com',
        numAccounts: 3,
    },
    {
        name: 'Twitter',
        url: 'https://www.twitter.com',
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com',
        numAccounts: 6,
    },
    {
        name: 'GitHub',
        url: 'https://www.github.com',
        numAccounts: 5,
    },
    {
        name: 'YouTube',
        url: 'https://www.youtube.com',
        numAccounts: 8,
    },
    {
        name: 'Reddit',
        url: 'https://www.reddit.com',
        numAccounts: 9,
    },
    {
        name: 'Wikipedia',
        url: 'https://www.wikipedia.org',
        numAccounts: 10,
    },
    {
        name: 'Amazon',
        url: 'https://www.amazon.com',
        numAccounts: 3,
    },
    {
        name: 'Netflix',
        url: 'https://www.netflix.com',
        numAccounts: 11,
    },
    {
        name: 'Spotify',
        url: 'https://www.spotify.com',
        numAccounts: 6,
    },
    {
        name: 'Stack Overflow',
        url: 'https://stackoverflow.com',
        numAccounts: 12,
    },
    {
        name: 'Quora',
        url: 'https://www.quora.com',
    },
    {
        name: 'Pinterest',
        url: 'https://www.pinterest.com',
        numAccounts: 8,
    },
    {
        name: 'Slack',
        url: 'https://www.slack.com',
        numAccounts: 5,
    },
].map((s) => new Site(s.name, s.url, s.numAccounts))
