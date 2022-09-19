export const trimDate = (inputDate: string): string => {
  let cleaneadDate: string = inputDate.substring(0, 10);
  let correctFormatDate: string = cleaneadDate.split("-").reverse().join("-");

  return correctFormatDate;
};

export const trimUpdateDate = (inputDate: string): string => {
  let cleaneadDate: string = inputDate.substring(0, 10);

  return cleaneadDate;
};
