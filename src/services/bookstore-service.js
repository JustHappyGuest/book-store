export default class BookstoreService{

    data = [
        {
            id: 0,
            title: 'Node in action!',
            autor: 'Someone J.Someone',
            price: 56
        },
        {
            id: 1,
            title: 'React in action!',
            autor: 'Someone J.Someone',
            price: 45
        }
    ];

    getBooks = () => {
        return new Promise((resolve) => {
            setTimeout(()=>resolve(this.data), 700)
        });
    }
}
