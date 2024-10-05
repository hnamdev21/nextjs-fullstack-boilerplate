const useTwitterHelper = () => {
  const share = async (text: string) => {
    const encodedText = encodeURIComponent(text);
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}`;

    window.open(shareUrl, "_blank");
  };

  const shareWithImage = async (text: string, imageUrl: string) => {
    const encodedText = encodeURIComponent(text);
    const encodedImageUrl = encodeURIComponent(imageUrl);
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}&media=${encodedImageUrl}`;

    window.open(shareUrl, "_blank");
  };

  return { share, shareWithImage };
};

export default useTwitterHelper;
