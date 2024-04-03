
export const getGif = async(category)=>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=y4ZoijIaAkUSdAs0pFVjoYnjHw0YSjg9&q=${category}&limit=5`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gif = data.map(img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized.url
    }))

    console.log(gif);
    return gif;
}