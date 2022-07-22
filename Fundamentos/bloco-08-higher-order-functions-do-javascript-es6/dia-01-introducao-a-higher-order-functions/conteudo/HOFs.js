const wakeUp = () => 'Acordou!!';
const breakfest = () => 'Bora tomar café!!';
const goSleep = () => 'Partiu dormir!!';

const doingThings = (things) => {
    const result = things();
    console.log(result);
  };
doingThings(wakeUp);
doingThings(breakfest);
doingThings(goSleep);