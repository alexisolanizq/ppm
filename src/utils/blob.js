export const imageFromBlob = (response, onLoadend) => {
  const reader = new FileReader();
  reader.readAsDataURL(response);
  reader.onloadend = () => onLoadend(reader.result)
}

export const blobToImage = (data) => {
  const blob = new Blob([data], { type: 'image/png' });
  return URL.createObjectURL(blob);
};