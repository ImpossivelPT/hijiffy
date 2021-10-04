

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
                name: 'Martin Merdces',
                email: 'martin.merces@gmail.com',
                company: {
                    name: 'Google',
                    role: 'Manager'
                },
                lastActivity: 'Jan 29, 2021',
                color: '#2878b7',
                colorContrast: '#FFF'
            },
            {
                id: 8,
                name: 'Franz Ferdinand',
                email: 'Franz.ferdinand@gmail.com',
                company: {
                    name: 'Facebook',
                    role: 'Manager'
                },
                lastActivity: 'Dec 30, 2020',
                color: '#c2cfe0',
                colorContrast: '#000'
            },
            {
                id: 9,
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
                id: 10,
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
                id: 11,
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
                id: 12,
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
                id: 13,
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
                id: 14,
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
                id: 15,
                name: 'Martin Merdces',
                email: 'martin.merces@gmail.com',
                company: {
                    name: 'Google',
                    role: 'Manager'
                },
                lastActivity: 'Jan 29, 2021',
                color: '#2878b7',
                colorContrast: '#FFF'
            },
            {
                id: 16,
                name: 'Franz Ferdinand',
                email: 'Franz.ferdinand@gmail.com',
                company: {
                    name: 'Facebook',
                    role: 'Manager'
                },
                lastActivity: 'Dec 30, 2020',
                color: '#c2cfe0',
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
