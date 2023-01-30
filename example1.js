const pets = ['Cat', 'Dog', 'Bird', 'Fish', 'Frog', 'Hamster', 'Pig', 'Horse', 'Lion', 'Dragon'];
// Print all pets
console.log(pets[0]);
console.log(pets[1]);
console.log(pets[2]);
console.log(pets[3]);
...

.cat {
  font-family: "Times New Roman", Times, serif;
  font-size: 1rem;
  color: #FFF;

}
.dog {
  font-family: "Times New Roman", Times, serif;
  font-size: 1rem;
  color: #000;
}
.dragon {
  font-family: "Times New Roman", Times, serif;
  font-size: 1rem;
  color: #009933;
}

This code is not dry. To ensure it is dry, it can be written like this. 

const pets = ['Cat', 'Dog', 'Bird', 'Fish', 'Frog', 'Hamster', 'Pig', 'Horse', 'Lion', 'Dragon'];

pets.forEach(item => {console.log(item)})

.cat, .dog, .dragon {
  font-family: "Times New Roman", Times, serif;
  font-size: 1rem;
  }

.cat {
   color: #FFF;

}
.dog {
   color: #000;
}
.dragon {
    color: #009933;
}
