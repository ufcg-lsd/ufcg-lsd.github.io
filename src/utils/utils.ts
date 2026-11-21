const BRAND_COLORS = ["#5474B7", "#7069AE", "#AD689E", "#DE5764", "#DD9356"];

export const getRandomBrandColor = (colors: string[] = BRAND_COLORS) => {
  return colors[Math.floor(Math.random() * colors.length)];
};

export const getStableBrandColor = (seed: string, colors: string[] = BRAND_COLORS) => {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return colors[hash % colors.length];
}