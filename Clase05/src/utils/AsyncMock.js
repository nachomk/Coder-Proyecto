const mockUsers = [
    {
        userId: 1,
        name: "Pedro",
        mail:"pedro@hotmail.com",
        online: false
    },{
        userId: 2,
        name: "Laura",
        mail:"laura@hotmail.com",
        online: true
    },{
        userId: 3,
        name: "Federico",
        mail:"fede@hotmail.com",
        online: false
    },{
        userId: 4,
        name: "Maria",
        mail:"mari@hotmail.com",
        online: true
    },
]

const mockComments = [
    {
        id: 123,
        comment: "prueba de comentario usuario 1",
    },
    {
        id: 456,
        comment: "prueba de comentario usuario 2",
    },
]

export const getUsers = () => {
    return new Promise ((res) => {
        setTimeout(() => {
            res(mockUsers)
        }, 2000)
    })
}

export const getComments = () => {
    return new Promise ((res) => {
        setTimeout(() => {
            res(mockComments)
        }, 2000)
    })
}