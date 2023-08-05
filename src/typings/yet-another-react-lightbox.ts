// Types taken from the yet-another-react-lightbox package so I could reference the types.
// I was not able to import these, I think because they weren't exported.
// NOTE: These will probably have to be updated whenever the package is updated.

interface SlideTypes {
    /** image slide type */
    image: SlideImage;
}

type SlideTypeKey = keyof SlideTypes;

interface GenericSlide {
    type?: SlideTypeKey;
}

interface SlideImage extends GenericSlide {
    /** image slide type */
    type?: 'image';
    /** image URL */
    src: string;
    /** image 'alt' attribute */
    alt?: string;
    /** image width in pixels */
    width?: number;
    /** image height in pixels */
    height?: number;
    /** `object-fit` setting */
    imageFit?: ImageFit;
    /** alternative images to be passed to the 'srcSet' */
    srcSet?: ImageSource[];
    /** title used by the Captions plugin - Added by Joe */
    title?: string;
    /** description used by the Captions plugin - Added by Joe */
    description?: string;
}
/** Image source */
interface ImageSource {
    /** image URL */
    src: string;
    /** image width in pixels */
    width: number;
    /** image height in pixels */
    height: number;
}

type ImageFit = 'contain' | 'cover';
