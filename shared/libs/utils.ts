export const formattedDate = (date: Date) => {
  const newDate = new Date(date);
  const option: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Intl.DateTimeFormat('en-US', option).format(newDate);
};

export const formattedPrice = (price: string) => {
  const amount = parseFloat(price);
  const option: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  };

  return new Intl.NumberFormat('en-US', option).format(amount);
};

export const formattedDuration = (duration: string) => {
  const times = parseFloat(duration);
  const hours = Math.floor(times / 60);
  const minutes = times % 60;

  return `${hours}h ${minutes.toString().padStart(2, '0')}m`;
};
