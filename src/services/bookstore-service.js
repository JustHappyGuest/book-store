export default class BookstoreService{

    data = [
        {
            id: 1,
            title: 'Node in action!',
            autor: 'Someone J.Someone'
        },
        {
            id: 2,
            title: 'React in action!',
            autor: 'Someone J.Someone'
        }
    ];

    getBooks = () => {
        return new Promise((resolve) => {
            setTimeout(()=>resolve(this.data), 700)
        });
    }
}