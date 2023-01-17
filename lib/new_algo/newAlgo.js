(() => {
  const arg = process.argv[2];
  if (!arg) require('./cmd/pedac');
  else {
    switch (arg) {
      case '--pedac':
        require('./cmd/pedac');
        break;
      case '--algo':
        require('./cmd/algo');
        break;
      default:
        console.log('\nInvalid argument\n');
    }
  }
})();
