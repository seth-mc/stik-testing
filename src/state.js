const state = {
  top: 0,
  pages: 0,
  threshold: 4,
  mouse: [0, 0],
  content: [
    {
      tag: '',
      text: `stik/`,
      images: ['/images/gh4df.jpg', '/images/gh590.jpg', '/images/gh403.jpg'],
    },
    { tag: '01', text: `The world's \nbest balm.`, images: ['/images/gh4js.jpg', '/images/ghpk3.jpg', '/images/ghj3k.jpg'] },
    { tag: '02', text: `The Hiramic\nLegend`, images: ['/images/gh48s.jpg', '/images/gh41d.jpg', '/images/gh58s.jpg'] },
  ],
  depthbox: [
    {
      depth: 0,
      color: '#cccccc',
      textColor: '#ffffff',
      text: 'In a void,\nno one could say\nwhy a thing\nonce set in motion\nshould stop anywhere.',
      image: '/images/gh8tg.jpg',
    },
    {
      depth: -5,
      textColor: '#272727',
      text: 'For why should it stop\nhere rather than here?\nSo that a thing\nwill either be at rest\nor must be moved\nad infinitum.',
      image: '/images/gh9kd.jpg',
    },
  ],
  lines: [
    {
      points: [
        [-20, 0, 0],
        [-9, 0, 0],
      ],
      color: 'black',
      lineWidth: 0.5,
    },
    {
      points: [
        [20, 0, 0],
        [9, 0, 0],
      ],
      color: 'black',
      lineWidth: 0.5,
    },
  ],
}

export default state
