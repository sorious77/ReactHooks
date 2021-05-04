export const useTabs = (initTab, allTabs) => {
  const [curIndex, setIndex] = useState(initTab);

  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    currentItem: allTabs[curIndex],
    changeItem: setIndex,
  };
};
