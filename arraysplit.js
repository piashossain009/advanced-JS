const nums = [3,5,7,8,9,12,14,56,24,57];

const part= nums.slice(2,5); //start index theke end index porjonto katbe
console.log(part);
console.log(nums);

const splicepart = nums.splice(2,5,00); //splice er khttre start theke koita delete korbo seta ar , diye kono value dile seta add hobe
console.log(splicepart);
console.log(nums);

const joinpart = nums.join("ami ");
console.log(joinpart);