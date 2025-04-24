// "use client";
// import { useEffect, useRef, useState } from "react";
// import Image, { ImageProps } from "next/image";
// import { optimizeCloudinaryUrl, generateBlurDataUrl } from "@/lib/image-utils";
// interface LazyImageProps extends Omit<ImageProps, "src"> {
//   src: string;
//   priority?: boolean;
//   cloudinaryParams?: {
//     width: number;
//     height: number;
//     quality?: "auto:eco" | "auto:good" | "auto:best" | number;
//   };
// }

// export const LazyImage = ({
//   src,
//   priority = false,
//   cloudinaryParams,
//   ...props
// }: LazyImageProps) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [hasError, setHasError] = useState(false);

//   useEffect(() => {
//     if (!ref.current || priority) {
//       setIsVisible(true);
//       return;
//     }

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { rootMargin: "200px" }
//     );

//     observer.observe(ref.current);

//     return () => observer.disconnect();
//   }, [priority]);

//   if (hasError) {
//     return (
//       <div ref={ref} className={props.className}>
//         {/* Fallback content */}
//       </div>
//     );
//   }

//   // const optimizedSrc = optimizeCloudinaryUrl(src, {
//   //   width: cloudinaryParams?.width || (props.width as number),
//   //   height: cloudinaryParams?.height || (props.height as number),
//   //   quality: cloudinaryParams?.quality,
//   //   crop: "fill",
//   // });

//   // console.log(optimizedSrc);

//   // https://res.cloudinary.com/ddkv17ou7/image/upload/c_fill,w_400,h_400,q_eco,f_auto,dpr_auto/v1744886491/gift-box_kxnpxv.png
//   https: return (
//     <div ref={ref} style={{ contain: "content" }}>
//       {isVisible && (
//         <Image
//           {...props}
//           // src={optimizedSrc}
//           // src={`${optimizedSrc} Test`}
//           // src={optimizedSrc}
//           src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRzWfWTRYVOeD_XZEhw6EIQgvbSejcnfO0145w7z_P2rbHK4BbPK849O3cDZDG3M-WDjbPnUgUad56ci3FxHrSsRspFxINMz3Sy3l7ooU6LBQ"
//           priority={priority}
//           loading={priority ? "eager" : "lazy"}
//           blurDataURL={generateBlurDataUrl(
//             Number(props.width),
//             Number(props.height)
//           )}
//           placeholder="blur"
//           onError={() => setHasError(true)}
//         />
//       )}
//     </div>
//   );
// };
