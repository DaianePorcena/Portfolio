
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/DaianePorcena/Portfolio_dio/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}