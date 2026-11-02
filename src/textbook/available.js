// Subjects that have a textbook. Kept tiny and separate so the hub can show the "Textbook" button without
// downloading any textbook code. tests/textbook.test.mjs checks this list against the real books.
export const BOOK_SUBJECTS = ['physics', 'chemistry', 'economics', 'biology', 'maths', 'addmaths', 'cs', 'business', 'english'];
export const hasBook = (subjectId) => BOOK_SUBJECTS.includes(subjectId);
