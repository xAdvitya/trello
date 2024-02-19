import { ID, storage } from '@/appwrite';

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    '6514a24705df656333fb',
    ID.unique(),
    file
  );

  console.log(fileUploaded);

  return fileUploaded;
};

export default uploadImage;
