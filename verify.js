export function verifyUserData() {
  if (JSON.parse(localStorage.getItem('user')).login != null) {
    return true
  } else {
    return false
  }
}