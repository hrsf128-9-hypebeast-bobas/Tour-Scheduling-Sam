// const mongoose = require('mongoose');
const faker = require('faker');
const db = require('./TourSchedule.js');

const data = [];
for (let x = 0; x < 10; x += 1) {
  const set = {
    Address: faker.address.streetAddress(),
    Price: Number(faker.commerce.price()) * 3000,
    MainImg: faker.random.image(),
  };
  let gallery = [];
  const count = Math.floor(Math.random() * 10) + 5;
  for (let i = 0; i < count; i += 1) {
    gallery.push(faker.random.image());
  }
  set.Gallery = gallery;
  set.GalleryCount = count;
  data.push(set);
}

db.Tour.create(data)
  .then((results) => {
    console.log(true);
  })
  .catch((err) => {
    console.log(false, err);
  });
