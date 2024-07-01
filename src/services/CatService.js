const apiUrl = 'https://cataas.com/api/cats?tags=cute';

const fetchCats = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch cats');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching cats:', error);
    throw error;
  }
};

export default {
  fetchCats,
};
