import Swal from 'sweetalert2';

export function showSuccess(title: string) {
  return Swal.fire({
    position: 'top-end',
    icon: 'success',
    title,
    timer: 2000,
    showConfirmButton: false,
  });
}

export function showError(title: string) {
  return Swal.fire({
    position: 'top-end',
    icon: 'error',
    title,
    timer: 2000,
    showConfirmButton: false,
  });
}

export function alertSuccess(title: string, text: string) {
  return Swal.fire({
    position: 'center',
    icon: 'success',
    title,
    text,
    customClass: {
      confirmButton: 'button is-link',
    },
    buttonsStyling: false,
  });
}

export function alertError(title: string, text: string) {
  return Swal.fire({
    position: 'center',
    icon: 'error',
    title,
    text,
    customClass: {
      confirmButton: 'button is-link',
    },
    buttonsStyling: false,
  });
}

export async function confirmDialog({
  title,
  text,
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  onConfirm,
}: {
  title: string;
  text: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
}) {
  const result_2 = await Swal.fire({
    title,
    text,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
    buttonsStyling: false,
    customClass: {
      confirmButton: 'button is-link',
      cancelButton: 'button is-danger ml-2',
    },
  });
  if (result_2.isConfirmed) {
    onConfirm();
  }
}

export async function confirmDialogWithLoading({
  title,
  text,
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  onConfirm,
}: {
  title: string;
  text: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => Promise<void> | void;
}) {
  await Swal.fire({
    title,
    text,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
    buttonsStyling: false,
    customClass: {
      confirmButton: 'button is-link',
      cancelButton: 'button is-danger ml-2',
    },
    allowOutsideClick: false,
    preConfirm: async () => {
      Swal.showLoading();
      try {
        await onConfirm();
      } catch (e) {
        Swal.showValidationMessage('Erro ao confirmar');
        console.error(e);
      }
    },
  });
}

export function formatDate(dateInput: string | Date): string {
  const date = new Date(dateInput);
  if (isNaN(date.getTime())) return 'Data inválida';
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export function formatDateTime(dateInput: string | Date): string {
  const date = new Date(dateInput);
  if (isNaN(date.getTime())) return 'Data inválida';
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${day}/${month}/${year} às ${hours}:${minutes}:${seconds}`;
}

export function getNewsImageUrl(fileName: string): string {
  return new URL(`../assets/images/news/${fileName}`, import.meta.url).href;
}

export const formatNumber = (number: number | string): string => {
  number = +number;
  return number.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

export function formatCompactNumber(number: number | string): string {
  number = +number;
  const formatter = new Intl.NumberFormat('en-US', { notation: 'compact' });
  return formatter.format(number);
}

export function getAvatarUrl(character: string, fileName: string): string {
  return new URL(`../assets/images/avatars/${character}/${fileName}`, import.meta.url).href;
}

export function getCharacterUrl(character: string, fileName: string): string {
  return new URL(`../assets/images/characters/${character}/${fileName}`, import.meta.url).href;
}

export function getCharacterBackgroundUrl(fileName: string): string {
  return new URL(`../assets/images/profile/backgrounds/${fileName}`, import.meta.url).href;
}

export function getCharacterPortraitUrl(fileName: string): string {
  return new URL(`../assets/images/profile/portrait/${fileName}`, import.meta.url).href;
}
