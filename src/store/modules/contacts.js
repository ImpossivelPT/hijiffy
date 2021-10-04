

export default {
    state: {
        contacts: [
            {
                id: 1,
                name: 'Lindsey Stroud',
                email: 'lindsey.stroud@gmail.com',
                company: {
                    name: 'Hatchbuck',
                    role: 'Manager'
                },
                lastActivity: 'Apr 1, 2021',
                color: '#a1a1a1',
                colorContrast: '#FFF'
            },
            {
                id: 2,
                name: 'Nicci Troiani',
                email: 'nicci.troiani@gmail.com',
                company: {
                    name: 'Slack',
                    role: 'Manager'
                },
                lastActivity: 'Mar 25, 2021',
                color: '#a607f0',
                colorContrast: '#FFF'
            },
            {
                id: 3,
                name: 'George Fields',
                email: 'george.fields@gmail.com',
                company: {
                    name: 'Clockify',
                    role: 'CEO'
                },
                lastActivity: 'Mar 23, 2021',
                color: '#feca11',
                colorContrast: '#000'
            },
            {
                id: 4,
                name: 'Rebecca Moore',
                email: 'rebecca.moore@gmail.com',
                company: {
                    name: 'Upwork',
                    role: 'Manager'
                },
                lastActivity: 'Mar 14, 2021',
                color: '#f5fa14',
                colorContrast: '#000'
            },
            {
                id: 5,
                name: 'Jane Doe',
                email: 'jane.doe@gmail.com',
                company: {
                    name: 'Trello',
                    role: 'Engineer'
                },
                lastActivity: 'Mar 7, 2021',
                color: '#10ce51',
                colorContrast: '#000'
            },
            {
                id: 6,
                name: 'Janes Dermot',
                email: 'janes.dernot@gmail.com',
                company: {
                    name: 'Slack',
                    role: 'Developer'
                },
                lastActivity: 'Feb 19, 2021',
                color: '#f40000',
                colorContrast: '#FFF'
            },
            {
                id: 7,
                name: 'Sean Connery',
                email: 'sean.connery@gmail.com',
                company: {
                    name: 'Bond Tech',
                    role: 'CEO'
                },
                lastActivity: 'Jan 29, 2021',
                color: '#2878b7',
                colorContrast: '#FFF'
            },
            {
                id: 8,
                name: 'David Niven',
                email: 'david.niven@gmail.com',
                company: {
                    name: 'BondoGoodStuff Inc',
                    role: 'Sales Rep'
                },
                lastActivity: 'Dec 30, 2020',
                color: '#c2cfe0',
                colorContrast: '#000'
            },
            {
                id: 9,
                name: 'George Lazenby',
                email: 'george.lazenby@gmail.com',
                company: {
                    name: 'BondoGoodStuff Inc',
                    role: 'CEO'
                },
                lastActivity: 'Apr 1, 2021',
                color: '#32b353',
                colorContrast: '#FFF'
            },
            {
                id: 10,
                name: 'Roger Moore',
                email: 'roger.moore@gmail.com',
                company: {
                    name: 'Bond Night Club',
                    role: 'Bouncer'
                },
                lastActivity: 'Mar 25, 2021',
                color: '#a33bcb',
                colorContrast: '#FFF'
            },
            {
                id: 11,
                name: 'Timothy Dalton',
                email: 'timothy.dalton@gmail.com',
                company: {
                    name: 'The living daylights',
                    role: 'Manager'
                },
                lastActivity: 'Mar 23, 2021',
                color: '#02af98',
                colorContrast: '#000'
            },
            {
                id: 12,
                name: 'Pierce Brosnan',
                email: 'pierce.brosnan@gmail.com',
                company: {
                    name: 'GoldenEye',
                    role: 'CEO'
                },
                lastActivity: 'Mar 14, 2021',
                color: '#e2ab80',
                colorContrast: '#000'
            },
            {
                id: 13,
                name: 'Daniel Craig',
                email: 'daniel-craig@gmail.com',
                company: {
                    name: 'Casino Royale',
                    role: 'Dealer'
                },
                lastActivity: 'Mar 7, 2021',
                color: '#30a8ef',
                colorContrast: '#000'
            },
            {
                id: 14,
                name: 'Sundar Pichai',
                email: 'sundar.pichai@sapo.pt',
                company: {
                    name: 'Google',
                    role: 'CEO'
                },
                lastActivity: 'Feb 19, 2021',
                color: '#252c70',
                colorContrast: '#FFF'
            },
            {
                id: 15,
                name: 'Hugh Laurie',
                email: 'hugh.laurie@gmail.com',
                company: {
                    name: 'Plainsboro Princeton',
                    role: 'Doctor'
                },
                lastActivity: 'Jan 29, 2021',
                color: '#9a59a1',
                colorContrast: '#FFF'
            },
            {
                id: 16,
                name: 'Charon',
                email: 'charon@gmail.com',
                company: {
                    name: 'New York Continental Hotel',
                    role: 'Concierge'
                },
                lastActivity: 'Dec 30, 2020',
                color: '#a6daf5',
                colorContrast: '#000'
            },
        ]
    },
    getters: {
        getContactsFiltered: (state) => (filter) => {
            if(!filter || filter == 'all'){
                return state.contacts
            } else {
                return state.contacts.filter(contact => contact.company.name == filter)
            }
        },
        getContacts: (state, getters) => (itemsPerPage, currentPage, filter) => {
            return getters.getContactsFiltered(filter).slice(itemsPerPage * (currentPage-1), itemsPerPage * currentPage)
            // return getters.getContactsFiltered.slice(itemsPerPage * (currentPage-1), itemsPerPage * currentPage)
            
            // console.log(itemsPerPage)
            // console.log(currentPage)
            // return state.contacts
        },
        getContactsCount: (state, getters) => (filter) =>  {
            return  getters.getContactsFiltered(filter).length
        },
        // Get all companies without dupes
        getContactsCompanies: (state) => state.contacts.map((contact) => {
            return contact.company.name
        }).filter((v, i, a) => a.indexOf(v) === i),
    },
    actions: {},
    mutations: {},
}
