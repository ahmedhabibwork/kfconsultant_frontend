
try {
  const { useTopLoader } = require('nextjs-toploader');
  console.log('useTopLoader type:', typeof useTopLoader);
  // Ideally we could mock react but that's hard in a simple script. 
  // Let's just assume it's a hook.
} catch (e) {
  console.error(e);
}
