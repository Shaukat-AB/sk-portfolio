import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from '../ui/dialog';
import Image, { ImageProps } from 'next/image';

export const ZoomableImage = ({
  src,
  alt,
  className,
}: Pick<ImageProps, 'src' | 'alt' | 'className'>) => {
  return (
    <Dialog>
      <DialogTitle className="sr-only">Zoom Image</DialogTitle>
      <DialogTrigger asChild>
        <Image
          width={0}
          height={0}
          src={src}
          alt={alt}
          className={`cursor-zoom-in w-full h-auto shadow-sm rounded-xl mb-2 object-contain ${className} hover:scale-101 transition-all`}
          sizes="(max-width: min(1440px, 100%)) 100vw"
        />
      </DialogTrigger>

      <DialogContent className="border-0 p-0 flex items-center justify-center">
        <div className="min-w-screen flex items-center justify-center">
          <div className="w-full h-[90vh] max-w-3xl relative min-w-0">
            <Image
              fill
              src={src}
              alt={alt}
              className={`object-contain rounded-xl ${className}`}
              sizes="(max-width: min(1440px, 100%)) 100vw"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
