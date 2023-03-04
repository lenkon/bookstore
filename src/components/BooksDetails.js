import React from 'react';
import BookList from './BookList';
import Form from './Form';

class BooksDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: 1,
          comments: [],
          completed: 64,
          category: 'Action',
          title: 'The Hunger Games',
          author: 'Suzzane Collins',
          chapters: 28,
          presentChapter: { chapter: 17, chapterTitle: '' },
        },
        {
          id: 2,
          comments: [],
          completed: 8,
          category: 'Science Fiction',
          title: 'Dune',
          author: 'Frank Herbert',
          chapters: 50,
          presentChapter: { chapter: 3, chapterTitle: 'A Lesson Learned' },
        },
        {
          id: 3,
          comments: [],
          completed: 0,
          category: 'Economy',
          title: 'Capital in the Twenty-First Century',
          author: 'Suzzane Collins',
          chapters: 15,
          presentChapter: { chapter: 1, chapterTitle: 'Introduction' },
        },
      ],
    };
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        <BookList books={books} />
        <Form />
      </div>
    );
  }
}

export default BooksDetails;
