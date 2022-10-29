import styled from "styled-components";
import AccordianItem from "./AccordianItem";

const menuList = [
  {
    id: 1,
    name: "react",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, soluta!",
  },
  {
    id: 2,
    name: "react accordian",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio nam quisquam iste asperiores ullam, quia quidem velit totam doloribus, veritatis enim eos nostrum. Sequi eius laudantium ducimus illum adipisci eaque!",
  },
  {
    id: 3,
    name: "react ui",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora doloremque vero nesciunt, consequuntur nihil, dicta laboriosam error similique consectetur odio eius accusantium aut omnis aliquam minima? Ex facilis iusto minus excepturi enim ipsa architecto, fugit odio molestias ea obcaecati, iste quibusdam quasi facere voluptas voluptatem? Culpa eos voluptas enim sunt.",
  },
];

function Accordian() {
  return (
    <Block>
      <h1>Accordian</h1>
      <ul>
        {menuList.map((menu) => (
          <AccordianItem key={menu.id} menu={menu} />
        ))}
      </ul>
    </Block>
  );
}

const Block = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 20px;
  background: #f7f7f7;

  ul {
    border: 1px solid #ddd;
    border-radius: 8px;
    width: 500px;
  }
`;

export default Accordian;
