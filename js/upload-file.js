const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarPhoto = document.querySelector('#avatar');
const avatarPreview = document.querySelector('.ad-form-header__image');

const housingPhoto = document.querySelector('#images');
const housingPreview = document.querySelector('.ad-form__photo-preview');

function uploadPhoto(upload, preview) {
  upload.addEventListener('change', () => {
    const file = upload.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      preview.src = URL.createObjectURL(file);
    }
  });
}

uploadPhoto(avatarPhoto, avatarPreview);
uploadPhoto(housingPhoto, housingPreview);


