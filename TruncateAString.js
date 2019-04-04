function truncateString(str, num) {
  // Clear out that junk in your trunk
  return num >= str.length ? str : str.substr(0,num) +'...';
}
