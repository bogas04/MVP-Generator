import fs from 'fs';

export default {
  savePhoto,
};

export function savePhoto(binaryObj, name) {
  const PUBLIC_DIR = `${__dirname}/web/img/`;
  
  fs.writeFile(PUBLIC_DIR, 'utf-8', binaryObj, (err, status) => {

  });
}
