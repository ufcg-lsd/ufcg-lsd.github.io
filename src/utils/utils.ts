export const isColorLight = (color: string): boolean => {
  if (!color) return true;

  let r: number, g: number, b: number;

  // Handle hex color
  if (color.startsWith("#")) {
    let hex = color.replace("#", "");
    if (hex.length === 3) {
      hex = hex.split('').map(char => char + char).join('');
    }
    const bigint = parseInt(hex, 16);
    r = (bigint >> 16) & 255;
    g = (bigint >> 8) & 255;
    b = bigint & 255;
  }
  // Handle rgb color
  else if (color.startsWith("rgb")) {
    const rgbValues = color.match(/\d+/g);
    if (rgbValues) {
      [r, g, b] = rgbValues.map(Number);
    } else {
      return true; // Default for invalid rgb string
    }
  }
  // Handle color names
  else {
    // For a real-world app, a library might be better to handle all color names.
    const namedColors: { [key: string]: string } = {
      white: "#ffffff",
      purple: "#A020F0"
    };
    const hex = namedColors[color.toLowerCase()];
    if (hex) {
      return isColorLight(hex);
    }
    return true; // Default for unknown color names
  }

  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  return hsp > 220;
};

export const getRandomBrandColor = () => {
  const colors = [
    '#5474B7', 
    '#7069AE', 
    '#AD689E', 
    '#DE5764', 
    '#DD9356'
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  
  return colors[randomIndex];
}