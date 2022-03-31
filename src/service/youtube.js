export default class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
    // this.getRequestOptions = {
    //   method: 'GET',
    //   redirect: 'follow',
    // };
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 6,
      },
    });

    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        q: query,
        type: 'video',
      },
    });

    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
    // const response = await fetch(
    //   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&type=video&key=${this.key}`,
    //   this.getRequestOptions
    // );
    // const result_1 = await response.json();
    // return result_1.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}
