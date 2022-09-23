module.exports = {
  sortByText: (text1, text2) => {
    if (text1.name > text2.name) {
      return 1;
    }
    if (text1.name < text2.name) {
      return -1;
    }
    return 0;
  },
};
