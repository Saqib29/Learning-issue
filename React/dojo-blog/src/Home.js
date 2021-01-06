import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlog] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome partyt', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tools', body: 'lorem ipsum...', author: 'mario', id: 3 },
    ]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All blogs!"/>
        </div>
     );
}
 
export default Home;