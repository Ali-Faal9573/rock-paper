// Helper function to prepend the correct base path for assets
export function getAssetPath(path: string): string {
  // In development or when not on GitHub Pages, use the path as is
  // In production on GitHub Pages, prepend the repository name
  const basePath =
    process.env.NODE_ENV === 'production' ? '/rock-paper-scissors' : '';
  return `${basePath}${path}`;
}
