/*
  GALLERY DATA
  ─────────────────────────────────────────────────────────────────
  Each entry in GALLERY_SECTIONS is one horizontal carousel strip.

  FIELDS
  ──────
  title   : Section heading shown above the carousel  (e.g. "2012 · Delhi")
  subtitle: Optional one-liner shown below the title  (e.g. "Yamuna sediment coring expedition")
  photos  : Array of photo objects  →  { file, caption? }
              file    – filename inside src/assets/gallery/   (e.g. "delhi_01.jpg")
              caption – optional short label under the photo

  HOW TO ADD A NEW SECTION
  ─────────────────────────
  1. Drop your images into  src/assets/gallery/
  2. Copy one of the objects below, change title/subtitle/photos.
  3. Append it to the GALLERY_SECTIONS array.
*/

export const GALLERY_SECTIONS = [
  {
    title:    '2012 · Delhi',
    subtitle: 'Yamuna river sediment coring expedition',
    photos: [
      { file: 'yama dixit.png', caption: 'Core extraction at Yamuna bank' },
      { file: 'delhi_2012_02.jpg', caption: 'Lab setup at base camp'         },
      { file: 'delhi_2012_03.jpg', caption: 'Team briefing — Day 1'          },
      { file: 'delhi_2012_04.jpg', caption: 'Sediment layering — 4 m depth'  },
      { file: 'delhi_2012_05.jpg', caption: 'Packing cores for transport'     },
    ],
  },
  {
    title:    '2014 · Bangalore',
    subtitle: 'Annual paleoclimate workshop & field sampling',
    photos: [
      { file: 'blr_2014_01.jpg', caption: 'Workshop keynote session'          },
      { file: 'blr_2014_02.jpg', caption: 'Poster presentations'              },
      { file: 'blr_2014_03.jpg', caption: 'Field sampling — Deccan plateau'   },
      { file: 'blr_2014_04.jpg', caption: 'Sample preparation in the field'   },
      { file: 'blr_2014_05.jpg', caption: 'Group dinner — closing evening'    },
      { file: 'blr_2014_06.jpg', caption: 'Lab tour at IISc'                  },
    ],
  },
  {
    title:    '2017 · Uttarakhand',
    subtitle: 'High-altitude glacier retreat survey',
    photos: [
      { file: 'uk_2017_01.jpg', caption: 'Base camp at 3 800 m'               },
      { file: 'uk_2017_02.jpg', caption: 'Glacier terminus mapping'            },
      { file: 'uk_2017_03.jpg', caption: 'Ice core extraction'                 },
      { file: 'uk_2017_04.jpg', caption: 'Weather station installation'        },
    ],
  },
  {
    title:    '2021 · Rann of Kutch',
    subtitle: 'Palaeolake sediment survey — remote sensing validation',
    photos: [
      { file: 'kutch_2021_01.jpg', caption: 'Salt flat traverse'               },
      { file: 'kutch_2021_02.jpg', caption: 'Sediment auger at 2 m depth'     },
      { file: 'kutch_2021_03.jpg', caption: 'Drone survey setup'               },
      { file: 'kutch_2021_04.jpg', caption: 'Team at palaeolake boundary'      },
      { file: 'kutch_2021_05.jpg', caption: 'Evening camp'                     },
    ],
  },
]
