
import faker from '@faker-js/faker';  //영문 버전의 fakerjs
import faker_ko from '@faker-js/faker/locale/ko';  //한글 버전의 fakerjs

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
    }
  


     export const makeUserDatas =(count) => {
        const userDatas = [];
  
        // images/1.jpeg ~ 5.jpeg
      
        while(userDatas.length < count){
          userDatas.push({
            avatar: `images/image${getRandomIntInclusive(1,5)}.jpg`,
            name: `${faker_ko.name.lastName()}${faker_ko.name.firstName()}`,
            email: faker.internet.email(),
            jobTitle: faker.name.jobTitle(),
            phoneNo: faker.phone.phoneNumber()
          })
        }

        return userDatas;
    } 
    export const paginate = (array, pageSize, pageNumber) => {
        return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
      }