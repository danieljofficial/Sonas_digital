interface CloudinaryParams {
  width?: number;
  height?: number;
  quality?: "auto:eco" | "auto:good" | "auto:best" | number;
  format?: "auto" | "webp" | "avif" | "jpg" | "png";
  crop?: "fill" | "fit" | "limit" | "pad";
}

export function optimizeCloudinaryUrl(url: string, sliceAtIndex: number) {
  const prefix =
    "https://res.cloudinary.com/ddkv17ou7/image/upload/c_fill,w_400,h_400,q_auto,f_auto,dpr_auto/";
  const transformedUrl = prefix + url.slice(sliceAtIndex);
  return transformedUrl;
}

export const generateBlurDataUrl = (width: number, height: number) => {
  return `data:image/svg+xml;base64,${btoa(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect width="100%" height="100%" fill="#e5e7eb"/>
    </svg>`
  )}`;
};

// const newUrl = "https://res.cloudinary.com/ddkv17ou7/image/upload/c_fill,w_400,h_400,q_auto,f_auto,dpr_auto/v1744886491/gift-box_kxnpxv.png"

// const url = "https://res.cloudinary.com/ddkv17ou7/image/upload/v1744886491/gift-box_kxnpxv.png"

// function test(url, newUrl) {
//   const t = transform(url)
//   if (t === newUrl) {
//   console.log(newUrl)
//     console.log(true)
//     return
//   }

//   console.log(t)
//   console.log(false)
// }

// function transform(url, sliceAtIndex) {
//   const addition = "https://res.cloudinary.com/ddkv17ou7/image/upload/c_fill,w_400,h_400,q_auto,f_auto,dpr_auto/"
//   const transformed = addition + url.slice(50)
//   return transformed
// }

// test(url, newUrl)
