const useFacebookHelper = () => {
  const share = async (text: string) => {
    const encodedText = encodeURIComponent(text);
    const shareUrl = `https://facebook.com/sharer/sharer.php?u=${encodedText}`;

    window.open(shareUrl, "_blank");
  };

  const shareWithImage = async (text: string, imageUrl: string) => {
    const encodedText = encodeURIComponent(text);
    const encodedImageUrl = encodeURIComponent(imageUrl);
    const shareUrl = `https://facebook.com/sharer/sharer.php?u=${encodedText}&media=${encodedImageUrl}`;

    window.open(shareUrl, "_blank");
  };

  return { share, shareWithImage };
};

export default useFacebookHelper;
