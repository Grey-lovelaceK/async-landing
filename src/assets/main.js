const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCxPD7bsocoAMq8Dj18kmGyQ&part=snippet%2Cid&order=date&maxResults=10';

const content = null || document.getElementById('content'); // get the content div 

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'fc0db620b8msh372bf1f1d181c2bp1d4136jsneba259cdcbe1',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

// do that function call self to get the data
(async () => {
    try {
        const videos = await fetchData(url);
        let view = `${videos.items.map((video) => `
            <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank" class="group relative">
                <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </a>
        `).slice(0, 8).join('')}`;

        content.innerHTML = view;
    } catch (error) {
        console.error(error);
    }
})();