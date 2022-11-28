const pxStringRemover = (pxString: string) => {
  return Number(pxString.split('p')[0]);
};

export default pxStringRemover;
