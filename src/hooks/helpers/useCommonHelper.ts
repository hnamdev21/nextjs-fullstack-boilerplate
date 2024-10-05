const useCommonHelper = () => {
  const download = async (objectUrl: string) => {
    const a = document.createElement("a");
    a.href = objectUrl;
    a.download = objectUrl;
    a.click();
    a.remove();
    URL.revokeObjectURL(objectUrl);
  };

  return { download };
};

export default useCommonHelper;
