import b1 from "./assets/b1.jpg";
import b2 from "./assets/b2.jpg";
import b3 from "./assets/b3.jpg"
import BlogCard from "./BlogCard";
const Blog = () => {
  return (
    <>
    <div className="container mx-auto">
      <div className="text-center pt-[125px] pr-[48px] pb-[20px]">
        <h1 className="pb-[27px] text-2xl font-bold">LATEST BLOG</h1>
        <p className="text-gray-500">
          Bring called seed first of third give itself now ment
        </p>
      </div>

      <div className="flex justify-center pt-[50px] gap-7 pb-10 pr-[41px] " >
        <BlogCard
          a1={<span>By Admin</span>}
          a2={<span>2 Comments</span>}
          image={b1}
          p1={<span>Ford clever bed stops your sleeping partner hogging the whole</span>}
          p2={
            <span>Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light Forth.</span>
          }
          button={<span>Learn More</span>}
        />    
          <BlogCard
          a1={<span>By Admin</span>}
          a2={<span>2 Comments</span>}
          image={b2}
          p1={<span>Ford clever bed stops your sleeping partner hogging the whole</span>}
          p2={
           <span>Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light Forth.</span>
          }
          button={<span>Learn More</span>}
        />   
          <BlogCard
          a1={<span>By Admin</span>}
          a2={<span>2 Comments</span>}
          image={b3}
          p1={<span>Ford clever bed stops your sleeping partner hogging the whole</span>}
          p2={
           <span>Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light Forth.</span>
          }
          button={<span>Learn More</span>}
        />   
      </div>
        </div>
    </>
  );
};

export default Blog;
