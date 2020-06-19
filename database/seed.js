const faker = require('faker');

const data = [];

for (let x = 0; x < 10; x += 1) {
  const set = {
    Address: faker.address.streetAddress(),
    Price: Number(faker.commerce.price()) * 3000,
    MainImg: faker.random.image(),
    Gallery: [],
  };
  const count = Math.floor(Math.random() * 30) + 30;
  for (let i = 0; i < count; i += 1) {
    set.Gallery.push(faker.random.image());
  }
  data.push(set);
  set.GalleryCount = count;
}
