export default function useReaction() {
  function formatReaction(reactarr) {
    const count = {};
    reactarr.forEach((reaction) => {
      if (!count[reaction.text]) count[reaction.text] = 0;
      count[reaction.text]++;
    });
    console.log(count);
    return count;
  }

  return {
    formatReaction,
  };
}
