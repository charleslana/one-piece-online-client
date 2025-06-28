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
