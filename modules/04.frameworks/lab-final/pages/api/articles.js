
export const db = [{
  slug: 'velit-eros',
  title: 'Ut velit eros',
  message: 'Vivamus ullamcorper arcu at odio iaculis fermentum. Sed dictum diam nunc, tempus venenatis orci dignissim in.'
}, {
  slug: 'ultricies-lacus',
  title: 'Et ultricies lacus pellentesque vel',
  message: 'Vehicula non lacus nec, fermentum interdum elit. Morbi porttitor tincidunt augue'
}, {
  slug: 'lacus-mauris',
  title: 'Nam quis lacus a mauris',
  message: 'Phasellus scelerisque condimentum finibus. Proin facilisis nisi eu finibus feugiat. Nam feugiat malesuada odio, sed pulvinar leo interdum eu. Cras at volutpat nibh, malesuada iaculis leo.'
}]

export default function handler(req, res) {
  res.status(200).json(db)
}
