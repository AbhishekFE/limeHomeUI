export const RESERVATION_FORM = {
    date: {
        name: 'date',
        displayName: 'Check-in/out dates',
        required: true,
        obj: {
            start: 'start',
            end: 'end'
        },
        type: 1
    },
    guests: {
        name: 'guests',
        displayName: 'Number of guests',
        required: true,
        type: 2
    },
    fname: {
        name: 'fname',
        displayName: 'First Name',
        required: true,
        type: 3
    },
    lname: {
        name: 'lname',
        displayName: 'Last Name',
        required: true,
        type: 3
    },
    address: {
        name: 'address',
        displayName: 'Billing Address',
        required: true,
        type: 3
    },
    country: {
        name: 'country',
        displayName: 'Billing Country',
        required: true,
        type: 4,
        options: [
            {
                name: 'Germany',
                id: 1
            },
            {
                name: 'USA',
                id: 2
            }
        ]
    },
    pcode: {
        name: 'pcode',
        displayName: 'Postal Code',
        required: true,
        type: 2
    },
    city: {
        name: 'city',
        displayName: 'City',
        required: true,
        type: 3
    },
    email: {
        name: 'email',
        displayName: 'Email',
        required: true,
        type: 3
    },
    phone: {
        name: 'phone',
        displayName: 'Phone Number',
        required: true,
        type: 2
    },
};