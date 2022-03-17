import { faker } from "@faker-js/faker";
import cherry from './cherry.jpg';


const testData=[
  {
    text: "typesetting industry. Lorem Ipsum has been the industrys",
    imgUrl: "https://www.urbanbrush.net/web/wp-content/uploads/edd/2020/11/urbanbrush-20201102111234985947.jpg"
  },{

  text: "Lorem Ipsum is simply dummy text of the printing and",
  imgUrl: "https://i.pinimg.com/originals/a7/da/33/a7da33c3d795acb917c6923415698f5b.png"
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and",
    imgUrl: "https://i.pinimg.com/originals/a7/da/33/a7da33c3d795acb917c6923415698f5b.png"
  }
]

//JSX
 
function DogMain(props) {
  const h1Element = <h1>{props.title} </h1>
  const imgElement = <img src={cherry} className="App-logo" alt="logo" />


  return (
    <>
        {h1Element}
        {imgElement}
        <p>
          체루체루체루체루체루앵두앵두앵두앵두앵두@!
        </p>
        <ul>
        {testData.map((contents)=>{
        return <div>
          <img src={faker.image.avatar()} alt="아바타 사진" />
          {contents.text}
          <img src={faker.image.cats()} alt="고양이 사진" />
        </div>
      })}
        </ul>
    </>
  );
}

export default DogMain;
