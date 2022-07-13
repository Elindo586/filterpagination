export const search = () => {
  let searching = document.activeElement.value;

  searching = searching.toString(searching);
  searching = searching.toLowerCase();
  searching = searching.trim(" ");

  if (searching.length === 0) {
    console.log("nope");
  } else {
    activeData.map((items) => {
      let refSearch = activeData.Reference;
      refSearch = refSearch.toString(refSearch);
      refSearch = refSearch.toLowerCase(refSearch);

      let desSearch = activeData.Description;
      desSearch = desSearch.toString(desSearch);
      desSearch = desSearch.toLowerCase(desSearch);

      let repSearch = activeData.Replacements;
      repSearch = repSearch.toString(repSearch);
      repSearch = repSearch.toLowerCase(repSearch);

      if (
        refSearch.match(searching) ||
        desSearch.match(searching) ||
        repSearch.match(searching)
      ) {
      }
    });
  }
};
