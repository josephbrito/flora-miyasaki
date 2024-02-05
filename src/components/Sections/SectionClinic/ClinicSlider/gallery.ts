import Gallery1 from 'assets/images/gallery/gallery-1.jpg'
import Gallery2 from 'assets/images/gallery/gallery-2.jpg'
import Gallery4 from 'assets/images/gallery/gallery-4.jpg'
import Gallery5 from 'assets/images/gallery/gallery-5.jpg'
import Gallery6 from 'assets/images/gallery/gallery-6.jpg'
import { StaticImageData } from 'next/image'

type GalleryItem = {
  id: number;
  src: StaticImageData;
  alt: string;
}

export const gallery: GalleryItem[] = [
  {
    id: 1,
    src: Gallery6,
    alt: 'Flora Miyazaki.'
  },
  {
    id: 2,
    src: Gallery2,
    alt: 'Flora Miyazaki.'
  },
  {
    id: 3,
    src: Gallery4,
    alt: 'Flora Miyazaki.'
  },
  {
    id: 4,
    src: Gallery5,
    alt: 'Flora Miyazaki.'
  },
  {
    id: 5,
    src: Gallery1,
    alt: 'Flora Miyazaki.'
  },
  
]
