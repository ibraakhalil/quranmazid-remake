export const getPost = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      cache: 'force-cache',
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
