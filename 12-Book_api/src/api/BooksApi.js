export const getBooks = async (query) => {
  const apiKey = 'AIzaSyBJUYuvS7EUShTQBvizWUOKUZsMFDtwNtw';
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();

  if (data.items) {
    return data.items.map(item => {
      const volumeInfo = item.volumeInfo;
      return {
        title: volumeInfo.title,
        authors: volumeInfo.authors || ['Unknown'],
        publishedDate: volumeInfo.publishedDate,
        description: volumeInfo.description,
        pageCount: volumeInfo.pageCount,
        previewLink: volumeInfo.previewLink,
        imageLinks: volumeInfo.imageLinks,
      };
    });
  } else {
    return [];
  }
};
