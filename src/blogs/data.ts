import { BlogModel } from './types';

export const blogs: BlogModel[] = [
  {
    id: 1,
    title: 'things that able me',
    author: 'Christy Tending',
    date: '02/02/2023',
    images: {
      imageMain: 'https://i0.wp.com/longreads.com/wp-content/uploads/2023/01/ThingsThatAbleMeChristyTending.png?resize=1200%2C700&ssl=1',
      imageArray: [
        'https://www.etsy.com/img/13193818/r/il/943a9d/2047573025/il_794xN.2047573025_9yoo.jpg',
        'https://i.pinimg.com/736x/05/e1/a5/05e1a5fbaf2c66dc9259b1ae19b7a3ce.jpg',
      ],
    },
    views: 100,
  },
  {
    id: 2,
    title: 'something about the present',
    author: 'Devin Kelly',
    date: '26/01/2023',
    images: {
      imageMain: 'https://i0.wp.com/longreads.com/wp-content/uploads/2023/01/SomethingAboutThePresentAmbulanceLights.png?resize=1200%2C700&ssl=1',
      imageArray: [
        'https://i.pinimg.com/564x/d7/ac/f7/d7acf74579083ce454e1c4d18fb53587.jpg',
        'https://i.pinimg.com/564x/13/ab/41/13ab41a78bd48f9f030c5e0b17201215.jpg',
      ],
    },
    views: 200,
  },
  {
    id: 3,
    title: 'american ape',
    author: 'Longreads',
    date: '24/01/2023',
    images: {
      imageMain: 'https://i0.wp.com/longreads.com/wp-content/uploads/2023/01/nebraskaman_crop.jpg?resize=1200%2C800&ssl=1',
      imageArray: [
        'https://i.pinimg.com/564x/23/59/60/23596072d88dbec12c9ae0652aba0489.jpg',
        'https://i.pinimg.com/564x/e7/e7/af/e7e7af9c6d1163530088f904cd3697b9.jpg',
      ],
    },
    views: 300,
  },
  {
    id: 4,
    title: 'the heart wing',
    author: 'Heather Lanier',
    date: '10/01/2023',
    images: {
      imageMain: 'https://i0.wp.com/longreads.com/wp-content/uploads/2023/01/Untitled-design-55.png?resize=1200%2C600&ssl=1',
      imageArray: [
        'https://i.pinimg.com/564x/24/20/c5/2420c5c0e24f0bf3e4adb463f7b9b732.jpg',
        'https://i.pinimg.com/736x/00/10/bc/0010bc3a91f47ffd4f80aa9a479def29.jpg',
      ],
    },
    views: 400,
  },
  {
    id: 5,
    title: 'this old dog',
    author: 'Keshia Naurana',
    date: '19/07/2022',
    images: {
      imageMain: 'https://i0.wp.com/longreads.com/wp-content/uploads/2022/07/shandi-4-bw.png?resize=1200%2C600&ssl=1',
      imageArray: [
        'https://i.pinimg.com/564x/20/af/20/20af20c98be7cc5a6bcccc348576d1b8.jpg',
        'https://i.pinimg.com/564x/1e/2a/d5/1e2ad54543bbf82ed098b93e026ee442.jpg',
      ],
    },
    views: 500,
  },
  {
    id: 6,
    title: 'final girl, terrible place',
    author: 'Lesley Finn',
    date: '05/07/2022',
    images: {
      imageMain: 'https://i0.wp.com/longreads.com/wp-content/uploads/2022/06/gettyimages-603195908-scaled.jpg?resize=1200%2C795&ssl=1',
      imageArray: [
        'https://i.pinimg.com/564x/d9/69/cc/d969ccdd67fdf24c45c681a8fd4e2343.jpg',
        'https://i.pinimg.com/564x/42/cb/e2/42cbe226c7c56a1285f7ed2c48cb23da.jpg',
      ],
    },
    views: 600,
  },
  {
    id: 7,
    title: 'down and out in habersham',
    author: 'William Torrey',
    date: '04/05/2022',
    images: {
      imageMain: 'https://i0.wp.com/longreads.com/wp-content/uploads/2022/04/1.png?resize=1200%2C600&ssl=1',
      imageArray: [
        'https://i.pinimg.com/236x/b9/31/0f/b9310f43f5a4302b58ef5dfd4ad4f2b4.jpg',
        'https://i.pinimg.com/564x/24/1a/6a/241a6a1af669417e2ed8bbd0e08efb78.jpg',
      ],
    },
    views: 700,
  },
  {
    id: 8,
    title: 'finding a path in a broken system',
    author: 'Mailee Osten-Tan',
    date: '08/06/2022',
    images: {
      imageMain: 'https://i0.wp.com/longreads.com/wp-content/uploads/2022/06/mostentan-6_amy-in-her-hotel-room-in-bangkok-scaled.jpg?resize=1200%2C802&ssl=1',
      imageArray: [
        'https://i.pinimg.com/564x/ba/73/d2/ba73d25c75fb81f22cc201b5cccfa0cf.jpg',
        'https://i.pinimg.com/564x/16/04/77/1604776d8c0f99e7f2209fb7058e6367.jpg',
      ],
    },
    views: 800,
  },
  {
    id: 9,
    title: 'our braided bread',
    author: 'Benjamin DuBow',
    date: '19/05/2022',
    images: {
      imageMain: 'https://i0.wp.com/longreads.com/wp-content/uploads/2022/05/copy-of-braided-bread-6.png?resize=1200%2C600&ssl=1',
      imageArray: [
        'https://i.pinimg.com/564x/24/d0/b2/24d0b21f6403a815be5a1c6a33f2508b.jpg',
        'https://i.pinimg.com/564x/6a/76/ad/6a76ad07799d87d2285db1174df64fbe.jpg',
      ],
    },
    views: 900,
  },
  {
    id: 10,
    title: "'this wasn't his first time'",
    author: 'Longreads',
    date: '04/05/2022',
    images: {
      imageMain: 'https://i0.wp.com/longreads.com/wp-content/uploads/2022/04/crime-beyond-belief-image.jpeg?resize=1200%2C1718&ssl=1',
      imageArray: [
        'https://i.pinimg.com/564x/5f/4f/ce/5f4fce7787dc2fa0344828332cdedad6.jpg',
        'https://i.pinimg.com/564x/bc/11/ae/bc11ae068f4cf58c33d324d77b58450e.jpg',
      ],
    },
    views: 1000,
  },
  {
    id: 11,
    title: 'the emptying',
    author: 'Longreads',
    date: '20/04/2022',
    images: {
      imageMain: 'https://i0.wp.com/longreads.com/wp-content/uploads/2022/04/gettyimages-1322648313.jpg?resize=1200%2C800&ssl=1',
      imageArray: [
        'https://i.pinimg.com/564x/6d/27/4a/6d274a75bce1eb87bf9d1fc73d6387bd.jpg',
        'https://i.pinimg.com/564x/2e/2b/7b/2e2b7b5023c2cf0d184180f81dd33150.jpg',
      ],
    },
    views: 1100,
  },
  {
    id: 12,
    title: 'the cabin on the mountain',
    author: 'Colin Dickey',
    date: '29/03/2022',
    images: {
      imageMain: 'https://i0.wp.com/longreads.com/wp-content/uploads/2022/03/cabinonthemountain-scaled.jpg?resize=1200%2C675&ssl=1',
      imageArray: [
        'https://i0.wp.com/longreads.com/wp-content/uploads/2022/03/cabinonthemountain-scaled.jpg?resize=1200%2C675&ssl=1',
        'https://i.pinimg.com/564x/14/73/07/147307149629ee3f324e5e7000e488f0.jpg',
        'https://i.pinimg.com/564x/16/ca/4c/16ca4c27b05e6a98a733af24c767c61e.jpg',
      ],
    },
    views: 1200,
  },
];
