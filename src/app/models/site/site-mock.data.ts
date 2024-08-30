import { Site } from './site.factory'

export const SITE_MOCK_DATA = [
    {
        name: 'Motionless Cent',
        url: 'https://motionless-cent.name',
        numAccounts: 2,
    },
    {
        name: 'Silent Thunder',
        url: 'https://silent-thunder.com',
    },
    {
        name: 'Vivid Horizon',
        url: 'https://vivid-horizon.net',
        numAccounts: 3,
    },
    {
        name: 'Eternal Echo',
        url: 'https://eternal-echo.org',
        numAccounts: 5,
    },
    {
        name: 'Gleaming Star',
        url: 'https://gleaming-star.edu',
        numAccounts: 6,
    },
    {
        name: 'Fading Ember',
        url: 'https://fading-ember.io',
    },
    {
        name: 'Radiant Aura',
        url: 'https://radiant-aura.com',
        numAccounts: 8,
    },
    {
        name: 'Celestial Wave',
        url: 'https://celestial-wave.net',
        numAccounts: 9,
    },
    {
        name: 'Nebula Drift',
        url: 'https://nebula-drift.org',
        numAccounts: 10,
    },
    {
        name: 'Stellar Forge',
        url: 'https://stellar-forge.edu',
        numAccounts: 3,
    },
    {
        name: 'Twilight Glow',
        url: 'https://twilight-glow.io',
        numAccounts: 11,
    },
    {
        name: 'Luminous Quest',
        url: 'https://luminous-quest.com',
    },
    {
        name: 'Echoing Realm',
        url: 'https://echoing-realm.net',
        numAccounts: 12,
    },
    {
        name: 'Glistening Dawn',
        url: 'https://glistening-dawn.org',
        numAccounts: 6,
    },
    {
        name: 'Dazzling Horizon',
        url: 'https://dazzling-horizon.edu',
        numAccounts: 8,
    },
    {
        name: 'Shadowed Peak',
        url: 'https://shadowed-peak.io',
        numAccounts: 5,
    },
].map((s) => new Site(s.name, s.url, s.numAccounts))
