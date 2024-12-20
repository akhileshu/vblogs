export function getFilteredArrayForMetadataSelector<
  T extends { title: string; id: string }
>(
  array: T[] | undefined | null,
  searchQuery: string,
  selectedTagIds?: string[],
  selectedId?: string | null
) {
    console.log("filteration happening")
  const filterOutSelectedTags = (itemId: string) => {
    return !selectedTagIds || !selectedTagIds.some((id) => id === itemId);
  };
  return array?.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      item.id !== selectedId &&
      filterOutSelectedTags(item.id)
  );
}
