/**
 * fetchModel - Fetch a model from the web server.
 *
 * @param {string} url
 * @returns {Promise}
 */
async function fetchModel(url) {
  const ENDPOINT = "https://jjznh5-8081.csb.app/api";
  try {
    const response = await fetch(ENDPOINT + url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Lỗi khi fetch data:", error);
    throw error;
  }
  // return fetch(ENDPOINT + url)
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     return response.json();
  //   })
  //   .catch((error) => {
  //     console.error("Lỗi khi lấy dữ liệu từ:", url, error);
  //     throw error;
  //   });
}

export default fetchModel;
