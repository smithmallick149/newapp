// export const BASE_URL = "http://content.guardianapis.com/search?api-key=test&amp;q=modi&amp;show-fields=thumbnail,headline&amp;page=1&amp;page-size=10";
// export const BASE_URL = 'https://api.punkapi.com/v2';
export const BASE_URL = "http://content.guardianapis.com";
export const fetchSearchResults = async (query, page = 1) => {
  console.log('quer', query, page)
  if (query && query.length > 0) {
    const parsedQuery = query.replaceAll(' ', '+');
    // const url = `${BASE_URL}/beers?beer_name=${parsedQuery}`;
    const url = `${BASE_URL}/search?api-key=test&amp;q=${query}&amp;show-fields=thumbnail,headline&amp;page=${page}&amp;page-size=10`
    console.log('url',url)
    const res = await fetch(url);
    const resJson = await res.json();
    console.log('res', resJson.response.results)
    const orResult = resJson?.response?.results;
    return orResult;
  } else {
    return [];
  }
};
// https://api.punkapi.com/v2/beers?beer_name=sasa