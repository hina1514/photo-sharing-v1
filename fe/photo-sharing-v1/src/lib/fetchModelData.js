/**
 * fetchModel - Fetch a model from the web server.
 *
 * @param {string} url      
 * @returns {Promise}       
 */
function fetchModel(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Lỗi khi lấy dữ liệu từ:", url, error);
      throw error; 
    });
}

export default fetchModel;