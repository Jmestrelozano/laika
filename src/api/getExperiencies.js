const url = 'https://laikaserver.herokuapp.com/experiencias';

export const getExperiencies = async () => {
  let response = await fetch(url);

  try {
    return response.json();
  } catch (error) {
    console.log(error);
    return 'hubo un problema ';
  }
};
