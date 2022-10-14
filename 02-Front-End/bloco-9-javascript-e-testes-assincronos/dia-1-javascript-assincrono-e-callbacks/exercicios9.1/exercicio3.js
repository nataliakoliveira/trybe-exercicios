getPlanet = () => {
    setTimeout(() => {
    const mars = {
      name: 'Mars',
      distanceFromSun: {
        value: 227900000,
        measurementUnit: 'kilometers',
      },
    };
    console.log('Returned planet: ', mars);
 
}, 4000); 
};
  getPlanet(); // Imprime Marte depois de 4 segundos