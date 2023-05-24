const BASE_URL = 'https://6460b470ca2d89f7e75d061e.mockapi.io';

export const getContacts = async () => {
  try {
    const data = await fetch(`${BASE_URL}/contacts`);
    if (data.statusText === 'OK') {
      return await data.json();
    }
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
};

export const createContact = async data => {
  // console.log('createContact data -> ', data);

  // const res = await fetch(`${BASE_URL}/contacts`, {
  //   method: 'POST',
  //   headers: { 'content-type': 'application/json' },
  //   // Send your data in the request body as JSON
  //   body: JSON.stringify(data),
  // });
  // return await res.json();

  try {
    await fetch(`${BASE_URL}/contacts`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      // Send your data in the request body as JSON
      body: JSON.stringify(data),
    });

    const response = await fetch(`${BASE_URL}/contacts`);
    if (response.statusText === 'OK') {
      return await response.json();
    }
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
};

export const deleteContact = async id => {
  // const res = await fetch(`${BASE_URL}/contacts/${id}`, { method: 'DELETE' });

  // return await res.json();
  try {
    await fetch(`${BASE_URL}/contacts/${id}`, { method: 'DELETE' });
    const data = await fetch(`${BASE_URL}/contacts`);
    if (data.statusText === 'OK') {
      return await data.json();
    }
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
};
