import Gallery1 from 'assets/images/gallery/gallery-1.jpg'
import Gallery2 from 'assets/images/gallery/gallery-2.jpg'
import Gallery3 from 'assets/images/gallery/gallery-3.jpg'
import Gallery4 from 'assets/images/gallery/gallery-4.jpg'
import Gallery5 from 'assets/images/gallery/gallery-5.jpg'
import Gallery6 from 'assets/images/gallery/gallery-6.jpg'
import Gallery7 from 'assets/images/gallery/gallery-7.jpg'
import { StaticImageData } from 'next/image'

type GalleryItem = {
  id: number
  src: StaticImageData
  alt: string
}

export const gallery: GalleryItem[] = [
  {
    id: 1,
    src: Gallery1,
    alt: 'Flora Miyasaki.'
  },
  {
    id: 2,
    src: Gallery2,
    alt: 'Flora Miyasaki.'
  },
  {
    id: 3,
    src: Gallery3,
    alt: 'Flora Miyasaki.'
  },
  {
    id: 4,
    src: Gallery4,
    alt: 'Flora Miyasaki.'
  },
  {
    id: 5,
    src: Gallery5,
    alt: 'Flora Miyasaki.'
  },
  {
    id: 6,
    src: Gallery6,
    alt: 'Flora Miyasaki.'
  },
  {
    id: 7,
    src: Gallery7,
    alt: 'Flora Miyasaki.'
  }
]
