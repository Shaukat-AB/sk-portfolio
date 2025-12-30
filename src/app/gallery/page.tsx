import { ZoomableImage } from '@/components/server';
import { getAllProjectsImagePaths } from '@/lib/projects';

const { minLength, mobileImages, desktopImages } = getAllProjectsImagePaths();

const minusOne = (number: number) => (predicate: (number: number) => boolean) =>
  predicate(number) ? number - 1 : number;

const evenMinlength = minusOne(minLength)((n) => n % 2 !== 0);
const DesktopSliceStart = minusOne(desktopImages.length - minLength)(
  (n) => n % 2 === 0
);

export default function Gallery() {
  return (
    <>
      <div className="md:grid md:grid-cols-2 md:gap-x-2 relative">
        {Array.from({ length: evenMinlength }).map((_, i) => (
          <div
            className={`flex ${i % 2 === 0 ? 'flex-col' : 'flex-col-reverse'}`}
            key={i}
          >
            {desktopImages.length > i && desktopImages[i] && (
              <ZoomableImage
                className="aspect-video min-w-0"
                src={desktopImages[i]}
                alt={desktopImages[i]}
              />
            )}

            {mobileImages.length > i && mobileImages[i] && (
              <ZoomableImage
                className="aspect-9/16"
                src={mobileImages[i]}
                alt={mobileImages[i]}
              />
            )}
          </div>
        ))}
      </div>

      <div className="md:flex md:flex-wrap md:gap-2">
        {desktopImages.slice(DesktopSliceStart).map((image) => (
          <ZoomableImage
            key={image}
            className="md:w-87 aspect-video"
            src={image}
            alt={image}
          />
        ))}
      </div>
    </>
  );
}
