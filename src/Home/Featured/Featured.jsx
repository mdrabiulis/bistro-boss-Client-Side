import SectionTitle from "../../Hooks/SectionTitle";
import Featuredimg from "../../assets/home/featured.jpg";
import './featured.css'

const Featured = () => {
  return (
    <section className="featured-item bg-fixed text-white pt-10 my-20">
      <SectionTitle 
        heading={"FROM OUR MENU"}
        subHeading={"Check it out"}
      >

      </SectionTitle>
      <div className="flex items-center justify-center pb-20 bg-black bg-opacity-40 pt-12 px-36 ">
        <div className="">
          <img src={Featuredimg} alt="" />
        </div>
        <div className="md:ml-10">
          <p className="">March 20, 2023</p>
          <p className="">WHERE CAN I GET SOME?</p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
